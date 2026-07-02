import { Calendar, FileText, Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | StackVault",
  description: "Read the Terms of Service governing your use of the StackVault website and waitlist.",
};

export default function TermsPage() {
  return (
    <div className="w-full relative overflow-hidden bg-white text-zinc-900 flex flex-col flex-grow selection:bg-zinc-100">
      
      {/* Title Banner Section with Moving Grid Background */}
      <section className="w-full border-b border-zinc-200/60 py-16 md:py-20 relative bg-zinc-50/10 overflow-hidden text-center px-4 sm:px-6">

        <div className="relative z-10 max-w-3xl mx-auto space-y-4 flex flex-col items-center">
          
          {/* Terms Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200/80 text-zinc-600 text-xs font-semibold shadow-sm">
            <FileText className="h-3.5 w-3.5 text-zinc-400" />
            <span>Terms of Service</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif italic font-normal text-zinc-950 tracking-tight">
            Terms of Service
          </h1>
          
          <p className="text-zinc-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            These Terms govern your use of the StackVault website and your participation in our waitlist.
          </p>
          
          {/* Last updated badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/80 text-zinc-500 text-xs font-semibold shadow-sm">
            <Calendar className="h-3.5 w-3.5 text-zinc-400" />
            <span>Last updated: July 3, 2026</span>
          </div>
        </div>
      </section>

      {/* Terms Content Sections */}
      <section className="py-12 md:py-16 px-6 sm:px-8 max-w-3xl mx-auto w-full">
        <p className="text-zinc-600 text-sm mb-8 leading-relaxed">
          Welcome to <strong className="text-zinc-900 font-semibold">StackVault</strong>. By accessing our website or joining our waitlist, you agree to these Terms of Service (&quot;Terms&quot;). If you do not agree with these Terms, please do not use our website.
        </p>

        <div className="space-y-8 text-zinc-600 text-[13px] sm:text-sm leading-relaxed">
          
          {/* Section 1 */}
          <div className="border-b border-zinc-100 pb-8">
            <h2 className="text-base font-bold text-zinc-950 mb-3">1. About StackVault</h2>
            <p className="mb-3">
              StackVault is currently in development. By joining our waitlist, you are expressing interest in receiving updates and potential early access to the product.
            </p>
            <p>Joining the waitlist does not guarantee access to the product or any specific launch date.</p>
          </div>

          {/* Section 2 */}
          <div className="border-b border-zinc-100 pb-8">
            <h2 className="text-base font-bold text-zinc-950 mb-3">2. Eligibility</h2>
            <p className="mb-3">You must be at least 13 years old to join the StackVault waitlist.</p>
            <p>By submitting your information, you confirm that the information you provide is accurate and belongs to you.</p>
          </div>

          {/* Section 3 */}
          <div className="border-b border-zinc-100 pb-8">
            <h2 className="text-base font-bold text-zinc-950 mb-3">3. Waitlist Registration</h2>
            <p className="mb-3">When joining the waitlist, you may be asked to provide:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4 text-zinc-500">
              <li>Your first name</li>
              <li>Your email address</li>
            </ul>
            <p className="mb-3">You agree to provide accurate and up-to-date information.</p>
            <p>We reserve the right to remove duplicate, fraudulent, or abusive registrations.</p>
          </div>

          {/* Section 4 */}
          <div className="border-b border-zinc-100 pb-8">
            <h2 className="text-base font-bold text-zinc-950 mb-3">4. Referral Program</h2>
            <p className="mb-3">Eligible waitlist members may receive a unique referral link.</p>
            <p className="mb-3">Referral links are intended for legitimate sharing with friends, colleagues, and professional networks.</p>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4 text-zinc-500">
              <li>Create fake accounts or multiple registrations.</li>
              <li>Use automated tools, bots, or scripts to generate referrals.</li>
              <li>Purchase referrals or engage in fraudulent activity.</li>
              <li>Misrepresent StackVault or impersonate others while sharing your referral link.</li>
            </ul>
            <p>We reserve the right to invalidate referrals or remove participants who violate these Terms.</p>
          </div>

          {/* Section 5 */}
          <div className="border-b border-zinc-100 pb-8">
            <h2 className="text-base font-bold text-zinc-950 mb-3">5. Early Access</h2>
            <p className="mb-3">Early access, launch rewards, or promotional offers are provided at our sole discretion.</p>
            <p>We may modify, suspend, or discontinue any waitlist incentive at any time before launch.</p>
          </div>

          {/* Section 6 */}
          <div className="border-b border-zinc-100 pb-8">
            <h2 className="text-base font-bold text-zinc-950 mb-3">6. Intellectual Property</h2>
            <p className="mb-3">
              All content on this website, including text, graphics, logos, branding, designs, and software, is the property of StackVault or its licensors and is protected by applicable intellectual property laws.
            </p>
            <p>You may not copy, reproduce, distribute, or modify any content without prior written permission.</p>
          </div>

          {/* Section 7 */}
          <div className="border-b border-zinc-100 pb-8">
            <h2 className="text-base font-bold text-zinc-950 mb-3">7. Acceptable Use</h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc pl-5 space-y-2 text-zinc-500">
              <li>Attempt to interfere with the operation or security of the website.</li>
              <li>Access systems or data without authorization.</li>
              <li>Submit malicious code or harmful content.</li>
              <li>Use the website for unlawful purposes.</li>
            </ul>
          </div>

          {/* Section 8 */}
          <div className="border-b border-zinc-100 pb-8">
            <h2 className="text-base font-bold text-zinc-950 mb-3">8. Disclaimer</h2>
            <p className="mb-3">The StackVault website and waitlist are provided on an &quot;as is&quot; and &quot;as available&quot; basis.</p>
            <p>We make no guarantees regarding product availability, launch timing, features, or uninterrupted access to the website.</p>
          </div>

          {/* Section 9 */}
          <div className="border-b border-zinc-100 pb-8">
            <h2 className="text-base font-bold text-zinc-950 mb-3">9. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, StackVault shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the website or participation in the waitlist.
            </p>
          </div>

          {/* Section 10 */}
          <div className="border-b border-zinc-100 pb-8">
            <h2 className="text-base font-bold text-zinc-950 mb-3">10. Changes to These Terms</h2>
            <p className="mb-3">We may update these Terms from time to time.</p>
            <p>Changes become effective when published on this page. Your continued use of the website after changes are posted constitutes acceptance of the updated Terms.</p>
          </div>

          {/* Section 11 */}
          <div className="border-b border-zinc-100 pb-8">
            <h2 className="text-base font-bold text-zinc-950 mb-3">11. Governing Law</h2>
            <p>
              These Terms shall be governed by and interpreted in accordance with the laws of India, without regard to its conflict of law principles.
            </p>
          </div>

          {/* Section 12 */}
          <div className="pb-4">
            <h2 className="text-base font-bold text-zinc-950 mb-3">12. Contact Us</h2>
            <p className="mb-4">If you have any questions about these Terms, please contact us at:</p>
            
            <a 
              href="mailto:support@stack-vault.com" 
              className="inline-flex items-center gap-2 bg-zinc-50 border border-zinc-200/80 rounded-xl px-4 py-2.5 text-zinc-800 hover:text-zinc-950 hover:bg-zinc-100 font-medium font-sans text-xs transition shadow-sm"
            >
              <Mail className="h-4 w-4 text-zinc-400" />
              <span>support@stack-vault.com</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
