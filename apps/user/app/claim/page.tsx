"use client";
import { api } from "@shared/firebaseClient";
import { httpsCallable } from "firebase/functions";
import toast from "react-hot-toast";

export default function ClaimPage() {
  const onClaim = async () => {
    try {
      const res: any = await api.claimDaily({});
      toast.success("Claimed daily reward!");
    } catch (e: any) {
      toast.error(e?.message || "Already claimed today");
    }
  };
  return (
    <main className="p-4 space-y-4">
      <section className="rounded-2xl bg-white/70 backdrop-blur-md shadow-glass p-6 text-center">
        <h2 className="text-xl font-semibold">Daily Claim</h2>
        <p className="text-gray-600">Maintain your 7-day streak to maximize rewards.</p>
        <button onClick={onClaim} className="mt-4 px-4 py-2 rounded-full bg-brand-600 text-white">Claim Now</button>
      </section>
    </main>
  );
}
