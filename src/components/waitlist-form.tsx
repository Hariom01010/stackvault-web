"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { User, Mail, ArrowRight, Loader2, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WaitlistForm() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const searchParams = new URLSearchParams(window.location.search);
      const referralCode = searchParams.get("r") || undefined;

      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: firstName,
          email,
          referralCode,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to join waitlist.");
      }

      const params = new URLSearchParams();
      params.set("name", firstName);
      params.set("email", email);
      if (result.referralCode) {
        params.set("code", result.referralCode);
      }
      router.push(`/thank-you?${params.toString()}`);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <User className="h-4.5 w-4.5 text-zinc-400" />
            </div>
            <input
              type="text"
              name="name"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              disabled={isLoading}
              required
              className="block w-full pl-11 pr-4 py-3.5 bg-white border border-zinc-200 rounded-xl text-zinc-900 placeholder-zinc-400 outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition text-sm sm:text-base"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="h-4.5 w-4.5 text-zinc-400" />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              required
              className="block w-full pl-11 pr-4 py-3.5 bg-white border border-zinc-200 rounded-xl text-zinc-900 placeholder-zinc-400 outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition text-sm sm:text-base"
            />
          </div>
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full h-13 bg-zinc-950 hover:bg-zinc-900 text-white font-medium rounded-xl flex items-center justify-center gap-2 transition duration-200 active:scale-[0.99] text-sm sm:text-base border border-transparent disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Joining Waitlist...</span>
            </>
          ) : (
            <>
              <span>Join the Waitlist</span>
              <ArrowRight className="h-5 w-5" />
            </>
          )}
        </Button>

        {error && (
          <p className="text-sm text-red-500 text-center mt-2" role="alert">
            {error}
          </p>
        )}

        <div className="mt-8 bg-[#f9fdf4] border border-[#e2f1cd] rounded-2xl p-4 flex items-start sm:items-center gap-3 max-w-xl mx-auto">
          <div className="p-2 rounded-xl bg-[#eef8df] text-[#70a130] shrink-0">
            <Gift className="h-5 w-5" />
          </div>
          <p className="text-xs sm:text-sm text-zinc-600 leading-normal text-left">
            The <strong className="text-zinc-900 font-semibold">first 100 users</strong> will receive exclusive launch rewards and special pricing reserved for early supporters.
          </p>
        </div>

      </form>
    </div>
  );
}
