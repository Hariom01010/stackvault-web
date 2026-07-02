import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  referralCode: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  referralCode,
}) => {
  const referralLink = `https://stack-vault.com/r/${referralCode}`;

  return (
    <div
      style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        backgroundColor: "#f9f9f9",
        padding: "40px 20px",
        color: "#18181b",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          border: "1px solid #e4e4e7",
          padding: "40px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.03)",
        }}
      >
        {/* Header Logo */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <img
            src="https://stack-vault.com/logo.png"
            alt="StackVault Logo"
            style={{ height: "32px", width: "auto", display: "inline-block" }}
            onError={(e) => {
              // Fallback to text logo if image fails to load
              e.currentTarget.style.display = "none";
              const textFallback = document.getElementById("text-logo-fallback");
              if (textFallback) textFallback.style.display = "block";
            }}
          />
          <div
            id="text-logo-fallback"
            style={{
              display: "none",
              fontSize: "22px",
              fontWeight: "bold",
              letterSpacing: "-0.03em",
              color: "#09090b",
            }}
          >
            StackVault
          </div>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "26px",
            fontWeight: 800,
            textAlign: "center",
            color: "#09090b",
            marginBottom: "24px",
            letterSpacing: "-0.02em",
          }}
        >
          Welcome to StackVault 🎉
        </h1>

        {/* Greeting & Message */}
        <p style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "600", margin: "0 0 12px 0" }}>
          Hi {firstName},
        </p>
        <p style={{ fontSize: "15px", lineHeight: "24px", color: "#4b5563", margin: "0 0 24px 0" }}>
          Thanks for joining the StackVault waitlist! We're excited to have you as one of our early supporters.
        </p>

        {/* Referral Card */}
        <div
          style={{
            backgroundColor: "#f8fafc",
            border: "1px solid #e2e8f0",
            borderRadius: "12px",
            padding: "24px",
            marginBottom: "24px",
          }}
        >
          <h2 style={{ fontSize: "16px", fontWeight: 700, color: "#0f172a", margin: "0 0 4px 0" }}>
            Your referral link
          </h2>
          <p style={{ fontSize: "14px", color: "#64748b", margin: "0 0 16px 0" }}>
            Share your unique link with friends and colleagues.
          </p>

          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #cbd5e1",
              borderRadius: "8px",
              padding: "14px 16px",
              fontSize: "14px",
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
              color: "#0f172a",
              wordBreak: "break-all",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>{referralLink}</span>
          </div>

          <div style={{ marginTop: "16px", fontSize: "13px", color: "#6366f1", fontWeight: 500 }}>
            ✦ Every successful referral brings you closer to early access.
          </div>
        </div>

        {/* CTA Button */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <a
            href={referralLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              width: "100%",
              boxSizing: "border-box",
              backgroundColor: "#09090b",
              color: "#ffffff",
              textDecoration: "none",
              padding: "14px 24px",
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "15px",
              textAlign: "center",
              marginBottom: "8px",
            }}
          >
            Share Referral Link
          </a>
          <p style={{ fontSize: "12px", color: "#71717a", margin: 0 }}>
            Opens your referral page where you can copy or share your link.
          </p>
        </div>

        {/* Divider */}
        <hr style={{ border: "none", borderTop: "1px solid #f4f4f5", margin: "0 0 32px 0" }} />

        {/* How Referrals Work */}
        <h3
          style={{
            fontSize: "16px",
            fontWeight: 700,
            color: "#09090b",
            margin: "0 0 24px 0",
          }}
        >
          How referrals work
        </h3>

        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "32px" }}>
          <tbody>
            <tr>
              {/* Step 1 */}
              <td style={{ width: "33%", padding: "0 8px 0 0", verticalAlign: "top", textAlign: "center" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "48px",
                    height: "48px",
                    backgroundColor: "#f5f3ff",
                    borderRadius: "12px",
                    fontSize: "20px",
                    marginBottom: "12px",
                  }}
                >
                  🔗
                </div>
                <div style={{ marginBottom: "8px" }}>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      backgroundColor: "#8b5cf6",
                      color: "#ffffff",
                      fontSize: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    1
                  </span>
                </div>
                <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#09090b", margin: "0 0 4px 0" }}>
                  Share your link
                </h4>
                <p style={{ fontSize: "12px", lineHeight: "18px", color: "#71717a", margin: 0 }}>
                  Send your unique link to friends and colleagues.
                </p>
              </td>

              {/* Step 2 */}
              <td style={{ width: "33%", padding: "0 8px", verticalAlign: "top", textAlign: "center" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "48px",
                    height: "48px",
                    backgroundColor: "#f0fdf4",
                    borderRadius: "12px",
                    fontSize: "20px",
                    marginBottom: "12px",
                  }}
                >
                  👥
                </div>
                <div style={{ marginBottom: "8px" }}>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      backgroundColor: "#22c55e",
                      color: "#ffffff",
                      fontSize: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    2
                  </span>
                </div>
                <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#09090b", margin: "0 0 4px 0" }}>
                  They join
                </h4>
                <p style={{ fontSize: "12px", lineHeight: "18px", color: "#71717a", margin: 0 }}>
                  They sign up for the waitlist using your link.
                </p>
              </td>

              {/* Step 3 */}
              <td style={{ width: "33%", padding: "0 0 0 8px", verticalAlign: "top", textAlign: "center" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "48px",
                    height: "48px",
                    backgroundColor: "#fef8e6",
                    borderRadius: "12px",
                    fontSize: "20px",
                    marginBottom: "12px",
                  }}
                >
                  🚀
                </div>
                <div style={{ marginBottom: "8px" }}>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      backgroundColor: "#eab308",
                      color: "#ffffff",
                      fontSize: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    3
                  </span>
                </div>
                <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#09090b", margin: "0 0 4px 0" }}>
                  Earn access
                </h4>
                <p style={{ fontSize: "12px", lineHeight: "18px", color: "#71717a", margin: 0 }}>
                  Successful referrals move you to the front.
                </p>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Closing */}
        <p style={{ fontSize: "14px", color: "#4b5563", margin: "0 0 6px 0" }}>
          Thanks for being part of the journey.
        </p>
        <p style={{ fontSize: "14px", fontWeight: "bold", color: "#09090b", margin: 0 }}>
          — The StackVault Team
        </p>
      </div>

      {/* Footer Info */}
      <div style={{ maxWidth: "600px", margin: "24px auto 0 auto", padding: "0 10px" }}>
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "18px" }}>
                You're receiving this email because you joined the StackVault waitlist.
              </td>
              <td style={{ textAlign: "right", fontSize: "12px", whiteSpace: "nowrap" }}>
                <a
                  href="https://stack-vault.com/privacy"
                  style={{ color: "#71717a", textDecoration: "underline", marginRight: "12px" }}
                >
                  Privacy Policy
                </a>
                <a
                  href="https://stack-vault.com/terms"
                  style={{ color: "#71717a", textDecoration: "underline" }}
                >
                  Terms of Service
                </a>
              </td>
            </tr>
            <tr>
              <td colSpan={2} style={{ textAlign: "center", paddingTop: "24px", fontSize: "12px", color: "#9ca3af" }}>
                © 2026 StackVault. All rights reserved.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};