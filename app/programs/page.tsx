export default function ProgramsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-4 text-white">
      <h1 className="text-4xl font-bold text-orange-500 md:text-6xl">Our Programs</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-lg bg-zinc-900 p-6 text-center">
          <h3 className="text-xl font-bold text-orange-400">Free Trial</h3>
          <p className="mt-2 text-gray-400">Experience our training for free.</p>
        </div>
        <div className="rounded-lg bg-zinc-900 p-6 text-center">
          <h3 className="text-xl font-bold text-orange-400">Pro League</h3>
          <p className="mt-2 text-gray-400">IPL-style internal competition.</p>
        </div>
        <div className="rounded-lg bg-zinc-900 p-6 text-center">
          <h3 className="text-xl font-bold text-orange-400">Weekend Nets</h3>
          <p className="mt-2 text-gray-400">Regular practice with coaches.</p>
        </div>
      </div>
    </main>
  );
}