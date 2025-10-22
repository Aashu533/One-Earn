export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-sm rounded-2xl bg-white/80 backdrop-blur-md shadow p-6">
        <h1 className="text-xl font-semibold">Admin Login</h1>
        <form className="mt-4 space-y-3">
          <input type="email" placeholder="Email" className="w-full border rounded-lg p-2" defaultValue="admin@gmail.com" />
          <input type="password" placeholder="Password" className="w-full border rounded-lg p-2" defaultValue="admin123" />
          <button type="button" className="w-full py-2 rounded-lg bg-brand-600 text-white">Login</button>
        </form>
      </div>
    </main>
  );
}
