import Link from "next/link";
import { Check, Mail, Link as LinkIcon, TrendingUp, Send, ArrowUpRight, Clock, RotateCcw } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "You're on the Waitlist | StackVault",
  description: "Thanks for joining the StackVault waitlist. Check your inbox for your referral link and instructions on how to move up the waitlist.",
};

export default function ThankYouPage() {
  return (
    <div className="w-full relative overflow-hidden bg-white text-zinc-900 flex flex-col flex-grow justify-center selection:bg-zinc-100">
      
      {/* Main Body */}
      <main className="relative z-10 flex-1 flex flex-col justify-center items-center px-4 sm:px-6 py-12 max-w-3xl mx-auto w-full text-center">
        
        {/* Checked Icon */}
        <div className="w-14 h-14 rounded-full bg-[#f4fdf0] border border-[#e2f8d3] flex items-center justify-center text-[#55a022] mb-6 shadow-sm mx-auto">
          <Check className="h-6 w-6 stroke-[3]" />
        </div>

        {/* Title & description */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-tight text-zinc-950 mb-3">
          You're on the list!
        </h1>
        <p className="text-zinc-500 text-sm sm:text-base max-w-md mx-auto mb-10 leading-relaxed font-normal">
          Thanks for joining the StackVault waitlist. We've sent a confirmation email to the address you provided with your unique referral link.
        </p>

        {/* Email Card Container */}
        <div className="w-full max-w-md mx-auto border border-zinc-200/70 bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-sm mb-10 text-center">
          {/* Card Envelope Icon */}
          <div className="mx-auto w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200/80 flex items-center justify-center text-zinc-500 mb-4">
            <Mail className="h-5 w-5" />
          </div>

          <h3 className="text-sm sm:text-base font-bold text-zinc-900 mb-1">
            Check your email
          </h3>
          <p className="text-xs sm:text-sm text-zinc-500 mb-6">
            We just sent you everything you need to get started:
          </p>

          {/* List Items */}
          <div className="space-y-4">
            {/* Item 1 */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-zinc-50 border border-zinc-200/80 flex items-center justify-center text-zinc-600 shrink-0">
                <LinkIcon className="h-4 w-4" />
              </div>
              <div className="text-left">
                <h4 className="text-xs sm:text-sm font-bold text-zinc-900">Your unique referral link</h4>
                <p className="text-xs text-zinc-400">Share it with your network and invite others.</p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-zinc-100 w-full pl-11"></div>

            {/* Item 2 */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-zinc-50 border border-zinc-200/80 flex items-center justify-center text-zinc-600 shrink-0">
                <TrendingUp className="h-4 w-4" />
              </div>
              <div className="text-left">
                <h4 className="text-xs sm:text-sm font-bold text-zinc-900">How to move up the waitlist</h4>
                <p className="text-xs text-zinc-400">Tips to get more referrals and climb faster.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action: Help build */}
        <div className="w-full max-w-md mx-auto mb-12 text-center">
          <div className="inline-flex relative mb-3">
            <Send className="h-6 w-6 text-zinc-800" />
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
            </span>
          </div>

          <h3 className="text-sm sm:text-base font-bold text-zinc-950 mb-1">
            Help us build something amazing
          </h3>
          <p className="text-xs sm:text-sm text-zinc-500 max-w-sm mx-auto mb-6 leading-relaxed">
            The more people you invite, the sooner you'll get access. Invite your friends and help shape StackVault.
          </p>

          <a href="mailto:">
            <button className="h-11 bg-zinc-950 hover:bg-zinc-900 text-white font-medium rounded-xl flex items-center justify-center gap-1.5 px-6 mx-auto text-xs sm:text-sm shadow-sm transition active:scale-[0.98] border border-transparent">
              <span>Open Email App</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </a>
        </div>

        {/* Didn't get the email? Section */}
        <div className="w-full max-w-xl mx-auto mb-8">
          <div className="flex items-center justify-center gap-4 my-8">
            <span className="h-px bg-zinc-200 flex-grow max-w-[120px]"></span>
            <span className="text-[10px] sm:text-[11px] font-bold text-zinc-400 uppercase tracking-widest shrink-0">
              Didn't get the email?
            </span>
            <span className="h-px bg-zinc-200 flex-grow max-w-[120px]"></span>
          </div>

          {/* Three columns items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left md:text-center">
            {/* Col 1 */}
            <div className="flex md:flex-col items-center md:items-center text-left md:text-center gap-3 md:gap-0">
              <div className="w-8 h-8 rounded-full bg-zinc-50 border border-zinc-200/80 flex items-center justify-center text-zinc-500 shrink-0 md:mb-3">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-zinc-800 md:mb-1">Check your spam folder</h4>
                <p className="text-[11px] text-zinc-400">Sometimes emails hide in there.</p>
              </div>
            </div>

            {/* Col 2 */}
            <div className="flex md:flex-col items-center md:items-center text-left md:text-center gap-3 md:gap-0">
              <div className="w-8 h-8 rounded-full bg-zinc-50 border border-zinc-200/80 flex items-center justify-center text-zinc-500 shrink-0 md:mb-3">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-zinc-800 md:mb-1">Wait a few minutes</h4>
                <p className="text-[11px] text-zinc-400">It can take a couple of minutes to arrive.</p>
              </div>
            </div>

            {/* Col 3 */}
            <div className="flex md:flex-col items-center md:items-center text-left md:text-center gap-3 md:gap-0">
              <div className="w-8 h-8 rounded-full bg-zinc-50 border border-zinc-200/80 flex items-center justify-center text-zinc-500 shrink-0 md:mb-3">
                <RotateCcw className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-zinc-800 md:mb-1">Join again</h4>
                <p className="text-[11px] text-zinc-400">Make sure you used the right email address.</p>
              </div>
            </div>
          </div>
        </div>

      </main>

    </div>
  );
}
