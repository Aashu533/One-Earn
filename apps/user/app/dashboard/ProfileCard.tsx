"use client";
import { useUserProfile } from "@/lib/hooks";

export default function ProfileCard() {
  const { user, loading } = useUserProfile();
  if (loading) {
    return <div className="h-24 bg-white/60 rounded-2xl animate-pulse" />;
  }
  return (
    <div className="rounded-2xl bg-white/80 border p-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold">{user?.firstName || "Guest"}</div>
          <div className="text-xs text-gray-500">@{user?.username || "anonymous"}</div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-brand-700">{user?.coins ?? 0}</div>
          <div className="text-xs text-gray-500">coins</div>
        </div>
      </div>
    </div>
  );
}
