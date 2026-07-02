"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const showBackToHome = pathname !== "/";

  return (
    <header className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 py-5 flex items-center justify-between border-b border-zinc-100 bg-white">
      <Link href="/" className="flex items-center gap-2.5 group">
        <div className="relative flex h-7 w-7 items-center justify-center text-zinc-950">
          <svg className="h-6 w-6 stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
        </div>
        <span className="font-sans text-xl font-bold tracking-tight text-zinc-950">
          StackVault
        </span>
      </Link>
      
      {showBackToHome && (
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-950 transition text-sm font-medium">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
      )}
    </header>
  );
}
