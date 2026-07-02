import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 py-6 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 bg-white">
      <div>
        &copy; {new Date().getFullYear()} StackVault. All rights reserved.
      </div>
      <div className="flex items-center gap-6">
        <Link href="/privacy" className="hover:text-zinc-800 transition">
          Privacy Policy
        </Link>
        <span className="h-3 w-px bg-zinc-200 hidden sm:inline"></span>
        <Link href="/terms" className="hover:text-zinc-800 transition">
          Terms of Service
        </Link>
      </div>
    </footer>
  );
}
