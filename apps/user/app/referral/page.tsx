"use client";
import { useEffect, useState } from "react";

export default function ReferralPage() {
  const [link, setLink] = useState("");
  useEffect(() => {
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const code = "REF123"; // placeholder; replace with real code
    setLink(`${origin}/?ref=${code}`);
  }, []);
  return (
    <main className="p-4 space-y-4">
      <section className="rounded-2xl bg-white/70 backdrop-blur-md shadow-glass p-6">
        <h2 className="text-xl font-semibold">Referral</h2>
        <p className="text-gray-600">Invite friends and earn 200 coins per referral.</p>
        <div className="mt-4 break-all text-sm bg-white rounded-xl p-3 border">{link}</div>
      </section>
    </main>
  );
}
