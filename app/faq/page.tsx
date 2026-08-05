export default function FAQPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-4 text-white">
      <h1 className="text-4xl font-bold text-orange-500 md:text-6xl">FAQ</h1>
      <div className="mt-8 max-w-2xl space-y-4">
        <details className="rounded-lg bg-zinc-900 p-4">
          <summary className="cursor-pointer font-bold text-orange-400">
            Who can join?
          </summary>
          <p className="mt-2 text-gray-400">Anyone passionate about cricket!</p>
        </details>
        <details className="rounded-lg bg-zinc-900 p-4">
          <summary className="cursor-pointer font-bold text-orange-400">
            When are practices?
          </summary>
          <p className="mt-2 text-gray-400">Every weekend at City Cricket Ground.</p>
        </details>
      </div>
    </main>
  );
}