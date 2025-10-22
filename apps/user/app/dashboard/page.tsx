import ProfileCard from "./ProfileCard";

export default function DashboardPage() {
  return (
    <main className="p-4 space-y-4">
      <ProfileCard />
      <section className="rounded-2xl bg-white/70 backdrop-blur-md shadow-glass p-6">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <p className="text-gray-600">Balance, streaks, and quick actions will appear here.</p>
      </section>
    </main>
  );
}
