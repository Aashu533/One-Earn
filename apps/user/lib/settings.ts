"use client";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "@shared/firebaseClient";
import { DEFAULT_SETTINGS } from "@shared/settings";
import type { AppSettings } from "@shared/types";

export function useAppSettings() {
  const [settings, setSettings] = useState<AppSettings>(DEFAULT_SETTINGS);
  useEffect(() => {
    const ref = doc(db, "config", "appSettings");
    const unsub = onSnapshot(ref, (snap) => {
      if (snap.exists()) setSettings({ ...DEFAULT_SETTINGS, ...(snap.data() as any) });
    });
    return () => unsub();
  }, []);
  return settings;
}
