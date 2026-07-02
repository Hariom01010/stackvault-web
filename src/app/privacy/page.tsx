import { Calendar } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | StackVault",
  description: "Learn how StackVault collects, uses, and protects your information when you join our waitlist.",
};

export default function PrivacyPage() {
  return (
    <div className="w-full relative overflow-hidden bg-white text-zinc-900 flex flex-col flex-grow selection:bg-zinc-100">
      
      {/* Main Body */}
      <main className="flex-grow flex flex-col">
        
        {/* Title Banner Section with Moving Grid Background */}
        <section className="w-full border-b border-zinc-200/60 py-16 md:py-20 relative bg-zinc-50/10 overflow-hidden text-center px-4 sm:px-6">

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif italic font-normal text-zinc-950 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-zinc-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Your privacy matters to us. This policy explains how we collect, use, and protect your information.
            </p>
            
            {/* Last updated badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/80 text-zinc-500 text-xs font-semibold shadow-sm">
              <Calendar className="h-3.5 w-3.5 text-zinc-400" />
              <span>Last updated: July 3, 2026</span>
            </div>
          </div>
        </section>

        {/* Policy Content Sections */}
        <section className="py-12 md:py-16 px-6 sm:px-8 max-w-3xl mx-auto w-full">
          <div className="space-y-8 text-zinc-600 text-[13px] sm:text-sm leading-relaxed">
            
            {/* Section 1 */}
            <div className="border-b border-zinc-100 pb-8">
              <h2 className="text-base font-bold text-zinc-950 mb-3">1. Information We Collect</h2>
              <p className="mb-3">When you join our waitlist, we collect:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4 text-zinc-500">
                <li>Your first name</li>
                <li>Your email address</li>
              </ul>
              <p>We do not collect payment information or any documents at this stage.</p>
            </div>

            {/* Section 2 */}
            <div className="border-b border-zinc-100 pb-8">
              <h2 className="text-base font-bold text-zinc-950 mb-3">2. How We Use Your Information</h2>
              <p className="mb-3">We use your information to:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4 text-zinc-500">
                <li>Add you to the StackVault waitlist</li>
                <li>Notify you when early access becomes available</li>
                <li>Share important product updates</li>
                <li>Contact you about launch announcements and exclusive early adopter offers</li>
              </ul>
              <p>We will not send unrelated marketing emails.</p>
            </div>

            {/* Section 3 */}
            <div className="border-b border-zinc-100 pb-8">
              <h2 className="text-base font-bold text-zinc-950 mb-3">3. How We Store Your Information</h2>
              <p>
                Your information is stored securely using industry-standard security practices. We take reasonable measures to protect your personal data from unauthorized access, disclosure, or misuse.
              </p>
            </div>

            {/* Section 4 */}
            <div className="border-b border-zinc-100 pb-8">
              <h2 className="text-base font-bold text-zinc-950 mb-3">4. Sharing Your Information</h2>
              <p className="mb-3">We do not sell, rent, or trade your personal information.</p>
              <p>
                We may use trusted third-party service providers to help us operate our waitlist, send emails, or host our infrastructure. These providers only receive the information necessary to perform their services.
              </p>
            </div>

            {/* Section 5 */}
            <div className="border-b border-zinc-100 pb-8">
              <h2 className="text-base font-bold text-zinc-950 mb-3">5. Data Retention</h2>
              <p>
                We retain your information for as long as necessary to manage the waitlist and communicate with you about StackVault. You may request deletion of your information at any time.
              </p>
            </div>

            {/* Section 6 */}
            <div className="border-b border-zinc-100 pb-8">
              <h2 className="text-base font-bold text-zinc-950 mb-3">6. Your Rights</h2>
              <p className="mb-3">You may:</p>
              <ul className="list-disc pl-5 space-y-2 text-zinc-500">
                <li>Request access to the personal information we hold about you.</li>
                <li>Request correction of inaccurate information.</li>
                <li>Request deletion of your information.</li>
                <li>Unsubscribe from our emails at any time using the unsubscribe link included in our emails.</li>
              </ul>
            </div>

            {/* Section 7 */}
            <div className="border-b border-zinc-100 pb-8">
              <h2 className="text-base font-bold text-zinc-950 mb-3">7. Cookies</h2>
              <p>
                Our waitlist website may use essential cookies required for the website to function properly. We do not use cookies to track your browsing behavior for advertising purposes.
              </p>
            </div>

            {/* Section 8 */}
            <div className="border-b border-zinc-100 pb-8">
              <h2 className="text-base font-bold text-zinc-950 mb-3">8. Children's Privacy</h2>
              <p>
                StackVault is not intended for individuals under the age of 13. We do not knowingly collect personal information from children.
              </p>
            </div>

            {/* Section 9 */}
            <div className="border-b border-zinc-100 pb-8">
              <h2 className="text-base font-bold text-zinc-950 mb-3">9. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date.
              </p>
            </div>

            {/* Section 10 */}
            <div className="pb-4">
              <h2 className="text-base font-bold text-zinc-950 mb-3">10. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy or your personal information, please contact us at:
              </p>
              <a 
                href="mailto:support@stack-vault.com" 
                className="inline-block bg-zinc-50 border border-zinc-200/80 rounded-xl px-4 py-2.5 text-zinc-800 hover:text-zinc-950 hover:bg-zinc-100 font-medium font-sans text-xs transition shadow-sm"
              >
                support@stack-vault.com
              </a>
            </div>

          </div>
        </section>

      </main>

    </div>
  );
}
