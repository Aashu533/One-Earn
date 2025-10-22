"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BarChart3, Gift, ListChecks, Users } from "lucide-react";
import clsx from "clsx";

const items = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/stats", label: "Stats", icon: BarChart3 },
  { href: "/claim", label: "Claim", icon: Gift },
  { href: "/tasks", label: "Tasks", icon: ListChecks },
  { href: "/referral", label: "Referral", icon: Users },
];

export default function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-2 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-md">
      <div className="grid grid-cols-5 rounded-2xl bg-white/70 backdrop-blur-md shadow-glass border border-white/40">
        {items.map((item) => {
          const Icon = item.icon;
          const active = pathname?.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "flex flex-col items-center justify-center py-2 text-xs",
                active ? "text-brand-700" : "text-gray-600"
              )}
            >
              <Icon className={clsx("h-5 w-5", active && "animate-float")} />
              <span className="mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
