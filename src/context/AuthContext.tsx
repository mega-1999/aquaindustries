"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { INITIAL_USERS } from "../data/auth-data";
import type { AuthContextType, UserAccount } from "../types/auth";

const USERS_STORAGE_KEY = "aqua_industries_registered_users_v1";
const SESSION_STORAGE_KEY = "aqua_industries_active_session_v1";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [allUsers, setAllUsers] = useState<UserAccount[]>(INITIAL_USERS);
  const [currentUser, setCurrentUser] = useState<UserAccount | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load persisted state from localStorage on mount
  useEffect(() => {
    try {
      const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
      if (storedUsers) {
        const parsed = JSON.parse(storedUsers);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Merge with initial admin if missing
          const hasAdmin = parsed.some((u) => u.role === "super-admin");
          if (!hasAdmin) {
            setAllUsers([INITIAL_USERS[0], ...parsed]);
          } else {
            setAllUsers(parsed);
          }
        }
      } else {
        localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(INITIAL_USERS));
      }

      const storedSession = localStorage.getItem(SESSION_STORAGE_KEY);
      if (storedSession) {
        const parsedUser = JSON.parse(storedSession);
        setCurrentUser(parsedUser);
      }
    } catch (e) {
      console.warn("Failed to read auth state from localStorage:", e);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  // Save changes to localStorage
  const saveUsers = (users: UserAccount[]) => {
    setAllUsers(users);
    try {
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    } catch (e) {
      console.error("Failed to persist users to localStorage:", e);
    }
  };

  const saveSession = (user: UserAccount | null) => {
    setCurrentUser(user);
    try {
      if (user) {
        localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(user));
      } else {
        localStorage.removeItem(SESSION_STORAGE_KEY);
      }
    } catch (e) {
      console.error("Failed to persist session to localStorage:", e);
    }
  };

  const pendingCount = allUsers.filter(
    (u) => u.status === "PENDING_APPROVAL",
  ).length;

  const login = (
    email: string,
    password?: string,
  ): { success: boolean; message: string; user?: UserAccount } => {
    const cleanEmail = email.trim().toLowerCase();
    const user = allUsers.find(
      (u) => u.email.trim().toLowerCase() === cleanEmail,
    );

    if (!user) {
      return {
        success: false,
        message:
          "Account not found. Please register your commercial account or check your email address.",
      };
    }

    if (password && user.password && user.password !== password) {
      return {
        success: false,
        message: "Invalid password for this account. Please try again.",
      };
    }

    // CHECK SUPER-ADMIN APPROVAL STATUS
    if (user.role !== "super-admin") {
      if (user.status === "PENDING_APPROVAL") {
        return {
          success: false,
          message:
            "YOUR ACCOUNT IS CURRENTLY PENDING SUPER-ADMIN APPROVAL. An authorized Aqua Industries administrator must review your contractor license and W-9 before portal access is unlocked. Check back shortly or contact Melville dispatch.",
          user,
        };
      }

      if (user.status === "REJECTED") {
        return {
          success: false,
          message: `ACCOUNT REGISTRATION DECLINED: ${
            user.rejectionReason ||
            "Documentation did not satisfy municipal contractor qualification standards."
          } Contact dispatch for re-application details.`,
          user,
        };
      }
    }

    // APPROVED OR SUPER-ADMIN
    saveSession(user);
    return {
      success: true,
      message: `Welcome back, ${user.fullName} (${user.companyName})!`,
      user,
    };
  };

  const register = (
    data: Omit<UserAccount, "id" | "status" | "createdAt">,
  ): { success: boolean; message: string; user?: UserAccount } => {
    const cleanEmail = data.email.trim().toLowerCase();
    const existing = allUsers.find(
      (u) => u.email.trim().toLowerCase() === cleanEmail,
    );

    if (existing) {
      return {
        success: false,
        message:
          "An account with this email address is already registered. If you forgot your password, contact dispatch.",
      };
    }

    const newUser: UserAccount = {
      ...data,
      id: `user-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      email: cleanEmail,
      status: "PENDING_APPROVAL", // STRICT REQUIREMENT: Starts as PENDING
      createdAt: new Date().toISOString(),
    };

    const updated = [newUser, ...allUsers];
    saveUsers(updated);

    return {
      success: true,
      message:
        "COMMERCIAL ACCOUNT APPLICATION SUBMITTED! Your account has been queued for Super-Admin review. You will receive authorization once company credentials and W-9 are verified.",
      user: newUser,
    };
  };

  const approveUser = (userId: string) => {
    const adminName = currentUser?.fullName || "Super-Admin";
    const updated = allUsers.map((u) => {
      if (u.id === userId) {
        return {
          ...u,
          status: "APPROVED" as const,
          approvedAt: new Date().toISOString(),
          approvedBy: adminName,
          rejectionReason: undefined,
        };
      }
      return u;
    });

    saveUsers(updated);

    // If current logged-in user was approved in another tab/session, update
    if (currentUser?.id === userId) {
      saveSession({
        ...currentUser,
        status: "APPROVED",
        approvedAt: new Date().toISOString(),
        approvedBy: adminName,
      });
    }
  };

  const rejectUser = (userId: string, reason?: string) => {
    const defaultReason =
      reason || "License verification incomplete or unverified tax ID.";
    const updated = allUsers.map((u) => {
      if (u.id === userId) {
        return {
          ...u,
          status: "REJECTED" as const,
          rejectionReason: defaultReason,
        };
      }
      return u;
    });

    saveUsers(updated);

    if (currentUser?.id === userId) {
      saveSession({
        ...currentUser,
        status: "REJECTED",
        rejectionReason: defaultReason,
      });
    }
  };

  const deleteUser = (userId: string) => {
    const updated = allUsers.filter((u) => u.id !== userId);
    saveUsers(updated);
    if (currentUser?.id === userId) {
      saveSession(null);
    }
  };

  const logout = () => {
    saveSession(null);
  };

  const quickLoginAsAdmin = () => {
    const admin =
      allUsers.find((u) => u.role === "super-admin") || INITIAL_USERS[0];
    saveSession(admin);
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        allUsers,
        pendingCount,
        login,
        register,
        approveUser,
        rejectUser,
        deleteUser,
        logout,
        quickLoginAsAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
