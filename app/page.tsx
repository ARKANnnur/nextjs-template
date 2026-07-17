import Image from "next/image";
import { LoginForm } from "@/features/auth";
import { UserProfile } from "@/features/users";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans text-zinc-900 dark:text-zinc-50 flex flex-col">
      {/* Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 py-4 px-6 sm:px-12 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={90}
            height={18}
            priority
          />
          <span className="text-zinc-300 dark:text-zinc-700">|</span>
          <span className="text-sm font-semibold tracking-wide uppercase text-zinc-500">Starter Template</span>
        </div>
        <div className="flex gap-4">
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition"
          >
            Docs
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-12 sm:px-12 flex flex-col gap-10">
        
        {/* Intro Hero Section */}
        <section className="text-center sm:text-left flex flex-col gap-3">
          <span className="text-xs px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-semibold w-max mx-auto sm:mx-0">
            Feature-Driven / Vertical Slicing Architecture
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Next.js Starter Template
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl text-sm sm:text-base">
            Project ini distrukturkan menggunakan prinsip <strong>Vertical Slicing</strong>. 
            Setiap fitur utama ditempatkan di dalam folder <code className="px-1 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-xs font-mono">@/features</code> dengan modul internal yang mandiri, dan hanya diekspos melalui file <code className="px-1 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-xs font-mono">index.ts</code> di setiap fitur.
          </p>
        </section>

        {/* Feature Demo Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Slice 1: Auth Feature Demo */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-widest">
                Slice 1: Auth Module
              </h2>
              <span className="text-xs text-zinc-400 font-mono">@/features/auth</span>
            </div>
            <LoginForm />
          </div>

          {/* Slice 2: Users Feature Demo */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-widest">
                Slice 2: Users Module
              </h2>
              <span className="text-xs text-zinc-400 font-mono">@/features/users</span>
            </div>
            <UserProfile />
          </div>
        </section>

        {/* Architectural Explainer */}
        <section className="p-6 bg-zinc-100 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 flex flex-col gap-4">
          <h3 className="text-lg font-bold">Struktur Direktori Aktif</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">1. Routing Layer (`app/`)</span>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Hanya menangani logic route, static layout, loading, dan error boundary.</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">2. Vertical Slices (`features/`)</span>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Potongan fitur mandiri (components, hooks, services, types) terisolasi.</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">3. Shared Core (`components/ui`)</span>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Komponen visual primitif (Buttons, Inputs) dan utilities global.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 py-6 text-center text-xs text-zinc-400">
        <p>&copy; {new Date().getFullYear()} Next.js Vertical Slicing Starter-FE.</p>
      </footer>
    </div>
  );
}
