import Link from "next/link";

export default function Home() {
  return (
    <main className="p-4">
      <div className="rounded-2xl bg-white/70 backdrop-blur-md shadow-glass p-6 text-center">
        <h1 className="text-2xl font-bold">Telegram Mini Earning App</h1>
        <p className="text-gray-600 mt-2">User panel is ready. Open dashboard.</p>
        <div className="mt-6">
          <Link href="/dashboard" className="px-4 py-2 rounded-full bg-brand-600 text-white">
            Open Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
