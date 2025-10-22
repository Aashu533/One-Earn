import Link from "next/link";

export default function Home() {
  return (
    <main className="p-4">
      <div className="rounded-2xl bg-white/70 backdrop-blur-md shadow p-6 text-center">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <p className="text-gray-600 mt-2">Sign in to manage the app.</p>
        <div className="mt-6">
          <Link href="/login" className="px-4 py-2 rounded-full bg-brand-600 text-white">
            Go to Login
          </Link>
        </div>
      </div>
    </main>
  );
}
