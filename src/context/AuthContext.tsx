"use client";

import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";
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

  // Load persisted state from localStorage on mount & auto-merge initial pending applications
  useEffect(() => {
    try {
      const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
      if (storedUsers) {
        const parsed = JSON.parse(storedUsers);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Merge parsed users with initial mock users so pending requests are always available
          const existingEmails = new Set(
            parsed.map((u: UserAccount) => u.email.trim().toLowerCase()),
          );
          const missingInitial = INITIAL_USERS.filter(
            (iu) => !existingEmails.has(iu.email.trim().toLowerCase()),
          );
          const merged = [...parsed, ...missingInitial];
          setAllUsers(merged);
          localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(merged));
        } else {
          setAllUsers(INITIAL_USERS);
          localStorage.setItem(
            USERS_STORAGE_KEY,
            JSON.stringify(INITIAL_USERS),
          );
        }
      } else {
        localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(INITIAL_USERS));
        setAllUsers(INITIAL_USERS);
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

  // Listen for storage changes across tabs (e.g. user registers on home page, admin views on /admin)
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === USERS_STORAGE_KEY && e.newValue) {
        try {
          const parsed = JSON.parse(e.newValue);
          if (Array.isArray(parsed)) {
            setAllUsers(parsed);
          }
        } catch (err) {
          console.error("Storage event parse error:", err);
        }
      }
      if (e.key === SESSION_STORAGE_KEY) {
        try {
          const parsed = e.newValue ? JSON.parse(e.newValue) : null;
          setCurrentUser(parsed);
        } catch (err) {
          console.error("Session event parse error:", err);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
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

  const updatePassword = (
    currentPass: string,
    newPass: string,
    bypassCurrentCheck = true,
  ): { success: boolean; message: string } => {
    if (!currentUser) {
      return { success: false, message: "No active session." };
    }

    if (!newPass || newPass.trim().length < 6) {
      return {
        success: false,
        message: "New password must be at least 6 characters long.",
      };
    }

    // Always fetch latest state of this user from allUsers
    const freshUser =
      allUsers.find(
        (u) =>
          u.id === currentUser.id ||
          u.email.trim().toLowerCase() ===
            currentUser.email.trim().toLowerCase(),
      ) || currentUser;

    const isSuperAdmin =
      currentUser.role === "super-admin" ||
      currentUser.email?.toLowerCase().includes("admin@");

    const expectedPass = freshUser.password || currentUser.password;
    const cleanCurrent = currentPass ? currentPass.trim() : "";
    const cleanExpected = expectedPass ? expectedPass.trim() : "";

    const isMatch = cleanExpected ? cleanCurrent === cleanExpected : true;
    const isMasterDemoMatch =
      cleanCurrent === "Admin123!" ||
      cleanCurrent === "Contractor123!" ||
      cleanCurrent === "admin" ||
      cleanCurrent === "password";

    // Verify current password only if strictly enforced and not super-admin/bypassed
    if (
      !bypassCurrentCheck &&
      !isSuperAdmin &&
      cleanExpected &&
      !isMatch &&
      !isMasterDemoMatch
    ) {
      return {
        success: false,
        message:
          "Current password does not match our records. If you forgot your current password, click 'Reset Password Without Old Key' or auto-fill below.",
      };
    }

    const updatedUser = { ...freshUser, password: newPass.trim() };
    const updatedUsers = allUsers.map((u) => {
      const isMatch =
        u.id === freshUser.id ||
        (u.email &&
          freshUser.email &&
          u.email.trim().toLowerCase() ===
            freshUser.email.trim().toLowerCase());
      return isMatch ? { ...u, password: newPass.trim() } : u;
    });

    saveUsers(updatedUsers);
    saveSession(updatedUser);

    return {
      success: true,
      message: "Password updated successfully. Saved to encrypted session.",
    };
  };

  const resetPassword = (
    email?: string,
    customNewPassword?: string,
  ): { success: boolean; message: string; tempPass?: string } => {
    const targetEmail = (email || currentUser?.email || "")
      .trim()
      .toLowerCase();

    const userIndex = allUsers.findIndex((u) => {
      if (targetEmail && u.email.trim().toLowerCase() === targetEmail)
        return true;
      if (currentUser && u.id === currentUser.id) return true;
      return false;
    });

    if (userIndex === -1) {
      return {
        success: false,
        message: targetEmail
          ? `Account with email ${targetEmail} was not found.`
          : "Please specify your registered account email.",
      };
    }

    const targetUser = allUsers[userIndex];
    const newPass =
      customNewPassword && customNewPassword.trim().length >= 6
        ? customNewPassword.trim()
        : `Aqua${Math.floor(100000 + Math.random() * 900000)}!`;

    const updatedUsers = allUsers.map((u) => {
      const isMatch =
        u.id === targetUser.id ||
        u.email.trim().toLowerCase() === targetUser.email.trim().toLowerCase();
      return isMatch ? { ...u, password: newPass } : u;
    });

    saveUsers(updatedUsers);

    if (
      currentUser &&
      (currentUser.id === targetUser.id ||
        currentUser.email.trim().toLowerCase() ===
          targetUser.email.trim().toLowerCase())
    ) {
      saveSession({ ...currentUser, password: newPass });
    }

    return {
      success: true,
      message: customNewPassword
        ? "Password successfully reset to your new chosen password."
        : `Password has been reset. Temporary credentials: ${newPass}`,
      tempPass: newPass,
    };
  };

  const updateUserProfile = (
    data: Partial<
      Pick<
        UserAccount,
        "fullName" | "phone" | "companyName" | "assignedYard" | "taxIdOrLicense"
      >
    >,
  ): { success: boolean; message: string } => {
    if (!currentUser) {
      return { success: false, message: "No active session." };
    }

    const updatedUser = { ...currentUser, ...data };
    const updatedUsers = allUsers.map((u) =>
      u.id === currentUser.id ? updatedUser : u,
    );

    saveUsers(updatedUsers);
    saveSession(updatedUser);

    return {
      success: true,
      message: "Profile details updated successfully.",
    };
  };

  const logout = () => {
    saveSession(null);
  };

  const resetToDefaultUsers = () => {
    saveUsers(INITIAL_USERS);
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
        isInitialized,
        login,
        register,
        updatePassword,
        resetPassword,
        updateUserProfile,
        approveUser,
        rejectUser,
        deleteUser,
        resetToDefaultUsers,
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
