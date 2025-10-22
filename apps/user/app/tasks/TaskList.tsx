"use client";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "@shared/firebaseClient";
import { useEffect, useState } from "react";
import type { TaskItem } from "@shared/types";

export default function TaskList() {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  useEffect(() => {
    const q = query(collection(db, "tasks"), where("enabled", "==", true));
    const unsub = onSnapshot(q, (snap) => {
      const list = snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) })) as TaskItem[];
      setTasks(list);
    });
    return () => unsub();
  }, []);

  return (
    <div className="grid gap-3">
      {tasks.map((t) => (
        <div key={t.id} className="rounded-xl bg-white border p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold flex items-center gap-2 text-sm">
                <span className="text-xl">{t.emoji || "✨"}</span>
                {t.title}
              </div>
              <div className="text-xs text-gray-500 mt-1">{t.description}</div>
            </div>
            <div className="text-brand-700 font-bold">+{t.rewardCoins}</div>
          </div>
        </div>
      ))}
      {tasks.length === 0 && (
        <div className="text-center text-sm text-gray-500">No tasks yet. Check back soon.</div>
      )}
    </div>
  );
}
