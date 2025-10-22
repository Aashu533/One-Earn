"use client";
import { useEffect, useMemo, useState } from "react";
import { auth, db } from "@shared/firebaseClient";
import { onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { doc, onSnapshot, setDoc, serverTimestamp } from "firebase/firestore";
import type { UserProfile } from "@shared/types";

export function useEnsureAnonAuth() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        await signInAnonymously(auth);
      }
      setReady(true);
    });
    return () => unsub();
  }, []);
  return ready;
}

export function useUserProfile() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (fbUser) => {
      if (!fbUser) return;
      const ref = doc(db, "users", fbUser.uid);
      const unsubDoc = onSnapshot(ref, async (snap) => {
        if (!snap.exists()) {
          const profile: UserProfile = {
            uid: fbUser.uid,
            coins: 0,
            tier: "free",
            streakDays: 0,
            createdAt: Date.now(),
            updatedAt: Date.now(),
          };
          await setDoc(ref, profile, { merge: true });
          setUser(profile);
          setLoading(false);
          return;
        }
        const data = snap.data() as UserProfile;
        setUser(data);
        setLoading(false);
      });
      return () => unsubDoc();
    });
    return () => unsub();
  }, []);

  return { user, loading } as const;
}
