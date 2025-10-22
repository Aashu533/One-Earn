import type { AppSettings, UserTier } from "./types";

export const DEFAULT_SETTINGS: AppSettings = {
  baseReward: 50,
  referralReward: 200,
  withdrawalThresholds: { upi: 2000, paytm: 2000, bank: 2000 },
  vipTiers: [
    { id: "free", priceInr: 0, multiplier: 1 },
    { id: "vip1" as UserTier, priceInr: 99, multiplier: 1.2 },
    { id: "vip2" as UserTier, priceInr: 199, multiplier: 1.5 },
    { id: "vip3" as UserTier, priceInr: 399, multiplier: 2 },
  ],
  adLimitsByTier: {
    free: 10,
    vip1: 20,
    vip2: 30,
    vip3: 50,
  },
};
