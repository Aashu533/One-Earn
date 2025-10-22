export type UserTier = "free" | "vip1" | "vip2" | "vip3";

export interface UserProfile {
  uid: string;
  telegramId?: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  photoUrl?: string;
  referrerId?: string; // uid of referrer
  coins: number;
  tier: UserTier;
  streakDays: number;
  lastClaimAt?: number; // ms since epoch
  createdAt: number;
  updatedAt: number;
}

export type TaskType =
  | "video"
  | "survey"
  | "social-follow"
  | "youtube"
  | "website"
  | "offerwall";

export interface TaskItem {
  id: string;
  title: string;
  description?: string;
  type: TaskType;
  rewardCoins: number;
  url?: string; // external link or iframe src
  emoji?: string;
  enabled: boolean;
  minWatchSeconds?: number;
  maxPerDay?: number;
  vipMultiplierEligible?: boolean;
  createdAt: number;
  updatedAt: number;
}

export interface AppSettings {
  baseReward: number;
  referralReward: number; // e.g., 200
  withdrawalThresholds: { upi: number; paytm: number; bank: number };
  vipTiers: Array<{ id: UserTier; priceInr: number; multiplier: number }>;
  adLimitsByTier: Record<UserTier, number>;
}

export interface Transaction {
  id: string;
  uid: string;
  type:
    | "task"
    | "daily-claim"
    | "referral"
    | "promo"
    | "withdrawal"
    | "admin-adjust"
    | "offerwall";
  amount: number; // positive for credit, negative for debit
  meta?: Record<string, unknown>;
  createdAt: number;
}

export interface WithdrawalRequest {
  id: string;
  uid: string;
  method: "upi" | "paytm" | "bank";
  amountCoins: number;
  details: { upiId?: string; paytmNumber?: string; bank?: { ifsc: string; account: string; name: string } };
  status: "pending" | "approved" | "rejected";
  createdAt: number;
  updatedAt: number;
}

export interface PromoCode {
  code: string;
  multiplier?: number; // temporary multiplier for tasks
  bonusCoins?: number;
  expiresAt?: number;
  maxUses?: number;
  usedCount: number;
  enabled: boolean;
}
