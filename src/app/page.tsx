import { WaitlistForm } from "@/components/waitlist-form";
import { Sparkles } from "lucide-react";
import type { Metadata } from "next";
import { LandingGsap } from "@/components/landing-gsap";

export const metadata: Metadata = {
  title: "StackVault | Join the Waitlist",
  description: "Join the StackVault waitlist and be among the first to experience a modern, secure workspace for organizing documents and collaborating with your team.",
};

export default function Home() {
  return (
    <div className="w-full relative overflow-hidden bg-white text-zinc-900 flex flex-col flex-grow justify-center">
      
      {/* GSAP Animation Controller */}
      <LandingGsap />

      {/* Subtle Animated Muted Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern animate-grid-drift pointer-events-none opacity-0 gsap-bg-grid"></div>
      
      {/* Subtle background ambient lights (drifting soft glow) */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-lime-200/20 to-indigo-200/20 rounded-full blur-3xl opacity-50 pointer-events-none animate-pulse duration-[10000ms]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-indigo-200/10 to-purple-200/20 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

      <main className="relative z-10 flex-1 flex flex-col justify-center items-center px-4 sm:px-6 py-12 md:py-20 max-w-5xl mx-auto w-full text-center">
      
        {/* Coming Soon Pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200/80 text-zinc-600 text-xs font-semibold shadow-sm mb-8 opacity-0 gsap-fade-in">
          <Sparkles className="h-3 w-3 text-zinc-500 fill-zinc-400/20" />
          <span>Coming Soon</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-sans font-bold tracking-tight text-zinc-950 leading-[1.15] mb-6 max-w-4xl mx-auto opacity-0 gsap-fade-in">
          The{" "}
          <span className="relative inline-block font-serif italic font-normal text-zinc-950 px-1">
            smarter way
            {/* Hand-drawn underline SVG */}
            <svg className="absolute left-0 -bottom-1 w-full h-[6px] text-lime-400/90" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M3,5 Q40,9 97,5" stroke="currentColor" strokeWidth="4.5" fill="none" strokeLinecap="round" />
            </svg>
          </span>{" "}
          to organize{" "}
          <span className="relative inline-block">
            your documents.
            {/* Highlight rays SVG */}
            <svg className="absolute -top-4 -right-6 h-6 w-6 text-lime-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="4" y1="20" x2="6" y2="14" />
              <line x1="10" y1="22" x2="15" y2="18" />
              <line x1="18" y1="20" x2="22" y2="21" />
            </svg>
          </span>
        </h1>

        {/* Sub-headline Description */}
        <p className="text-sm sm:text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-normal opacity-0 gsap-fade-in">
          Join the waitlist for StackVault and be among the first to experience a faster, more secure way to organize, manage, and collaborate on your files.
        </p>

        {/* Signup Form Container */}
        <div className="w-full mb-8 opacity-0 gsap-fade-in">
          <WaitlistForm />
        </div>

      </main>

    </div>
  );
}
