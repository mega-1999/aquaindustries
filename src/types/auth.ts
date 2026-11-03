export type UserRole =
  | "super-admin"
  | "contractor"
  | "supplyhouse"
  | "municipal";

export type AccountStatus = "PENDING_APPROVAL" | "APPROVED" | "REJECTED";

export interface UserAccount {
  id: string;
  email: string;
  password?: string;
  fullName: string;
  companyName: string;
  phone: string;
  role: UserRole;
  accountType:
    | "Contractor"
    | "Supply House Partner"
    | "Municipal Utility"
    | "Engineering Specifier";
  taxIdOrLicense: string;
  assignedYard: string;
  status: AccountStatus;
  createdAt: string;
  approvedAt?: string;
  approvedBy?: string;
  rejectionReason?: string;
  w9Uploaded: boolean;
  resaleUploaded: boolean;
}

export interface AuthContextType {
  currentUser: UserAccount | null;
  allUsers: UserAccount[];
  pendingCount: number;
  isInitialized: boolean;
  login: (
    email: string,
    password?: string,
  ) => { success: boolean; message: string; user?: UserAccount };
  register: (data: Omit<UserAccount, "id" | "status" | "createdAt">) => {
    success: boolean;
    message: string;
    user?: UserAccount;
  };
  updatePassword: (
    currentPass: string,
    newPass: string,
    bypassCurrentCheck?: boolean,
  ) => { success: boolean; message: string };
  resetPassword: (
    email?: string,
    customNewPassword?: string,
  ) => {
    success: boolean;
    message: string;
    tempPass?: string;
  };
  updateUserProfile: (
    data: Partial<
      Pick<
        UserAccount,
        "fullName" | "phone" | "companyName" | "assignedYard" | "taxIdOrLicense"
      >
    >,
  ) => { success: boolean; message: string };
  approveUser: (userId: string) => void;
  rejectUser: (userId: string, reason?: string) => void;
  deleteUser: (userId: string) => void;
  logout: () => void;
  quickLoginAsAdmin: () => void;
}
