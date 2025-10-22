import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import { z } from "zod";

if (!admin.apps.length) {
  admin.initializeApp();
}

const db = admin.firestore();

const verifyInitSchema = z.object({
  initData: z.string(),
});

export const verifyTelegramInit = functions.https.onCall(async (data, context) => {
  const parsed = verifyInitSchema.safeParse(data);
  if (!parsed.success) {
    throw new functions.https.HttpsError("invalid-argument", "Invalid input");
  }
  // TODO: verify hash per Telegram docs; return minimal profile
  return { ok: true };
});

export const claimDaily = functions.https.onCall(async (_data, context) => {
  const uid = context.auth?.uid;
  if (!uid) {
    throw new functions.https.HttpsError("unauthenticated", "Login required");
  }
  const userRef = db.collection("users").doc(uid);
  const now = Date.now();
  await db.runTransaction(async (tx) => {
    const snap = await tx.get(userRef);
    const user = snap.exists ? (snap.data() as any) : { coins: 0, streakDays: 0 };
    const lastClaimAt = user.lastClaimAt || 0;
    const oneDay = 24 * 60 * 60 * 1000;
    if (now - lastClaimAt < oneDay) {
      throw new functions.https.HttpsError("failed-precondition", "Already claimed today");
    }
    const within48h = now - lastClaimAt < 2 * oneDay;
    const newStreak = within48h ? (user.streakDays || 0) + 1 : 1;
    const reward = 50 + Math.min(newStreak, 7) * 10; // simple 7-day ramp
    tx.set(
      userRef,
      { coins: (user.coins || 0) + reward, streakDays: newStreak, lastClaimAt: now, updatedAt: now },
      { merge: true }
    );
    const txnRef = db.collection("transactions").doc();
    tx.set(txnRef, {
      id: txnRef.id,
      uid,
      type: "daily-claim",
      amount: reward,
      createdAt: now,
    });
  });
  return { ok: true };
});

export const createWithdrawal = functions.https.onCall(async (data, context) => {
  const uid = context.auth?.uid;
  if (!uid) throw new functions.https.HttpsError("unauthenticated", "Login required");
  const schema = z.object({ method: z.enum(["upi", "paytm", "bank"]), amountCoins: z.number().int().positive(), details: z.any() });
  const parsed = schema.parse(data);
  const now = Date.now();
  const reqRef = db.collection("withdrawals").doc();
  await reqRef.set({ id: reqRef.id, uid, status: "pending", createdAt: now, updatedAt: now, ...parsed });
  return { ok: true, id: reqRef.id };
});
