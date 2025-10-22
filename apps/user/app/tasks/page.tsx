import TaskList from "./TaskList";

export default function TasksPage() {
  return (
    <main className="p-4 space-y-4">
      <section className="rounded-2xl bg-white/70 backdrop-blur-md shadow-glass p-6">
        <h2 className="text-xl font-semibold">Tasks</h2>
        <p className="text-gray-600">Complete tasks and earn coins.</p>
        <div className="mt-4">
          <TaskList />
        </div>
      </section>
    </main>
  );
}
