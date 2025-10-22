"use client";
import { useEnsureAnonAuth } from "../lib/hooks";

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const ready = useEnsureAnonAuth();
  if (!ready) {
    return (
      <div className="p-4 animate-pulse">
        <div className="h-24 bg-white/60 rounded-2xl" />
      </div>
    );
  }
  return <>{children}</>;
}
