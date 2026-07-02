import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  referralCode: string;
  baseUrl?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  referralCode,
  baseUrl,
}) => {
  const activeBaseUrl = baseUrl || "https://stack-vault.com";
  const referralLink = `${activeBaseUrl}/?r=${referralCode}`;
  const logoUrl = `${activeBaseUrl}/logo.png`;

  return (
    <Html>
      <Head />
      <Preview>Welcome to StackVault 🎉</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header Logo */}
          <Section style={logoContainer}>
            <Img
              src={logoUrl}
              alt="StackVault Logo"
              width="140"
              height="32"
              style={logo}
            />
          </Section>

          {/* Headline */}
          <Heading style={h1}>Welcome to StackVault 🎉</Heading>

          {/* Greeting & Message */}
          <Text style={greeting}>Hi {firstName},</Text>
          <Text style={paragraph}>
            Thanks for joining the StackVault waitlist! We're excited to have you as one of our early supporters.
          </Text>

          {/* Referral Card */}
          <Section style={card}>
            <Heading as="h2" style={cardTitle}>
              Your referral link
            </Heading>
            <Text style={cardSubtitle}>
              Share your unique link with friends and colleagues.
            </Text>

            <Section style={inputContainer}>
              <Text style={inputLink}>{referralLink}</Text>
            </Section>

            <Text style={sparkle}>
              ✦ Every successful referral brings you closer to early access.
            </Text>
          </Section>

          {/* CTA Button */}
          <Section style={ctaContainer}>
            <Link href={referralLink} style={button}>
              Share Referral Link
            </Link>
            <Text style={buttonSubtext}>
              Opens your referral page where you can copy or share your link.
            </Text>
          </Section>



          {/* Closing Section wrapped in Section container for structural grid alignment */}
          <Section style={closingSection}>
            <Text style={closing}>Thanks for being part of the journey.</Text>
            <Text style={signature}>— The StackVault Team</Text>
          </Section>
        </Container>

        {/* Footer Info */}
        <Container style={footerContainer}>
          <Row>
            <Column style={footerLeft}>
              <Text style={footerText}>
                You're receiving this email because you joined the StackVault waitlist.
              </Text>
            </Column>
            <Column style={footerRight}>
              <Link href="https://stack-vault.com/privacy" style={footerLink}>
                Privacy Policy
              </Link>
              <span style={footerSeparator}>•</span>
              <Link href="https://stack-vault.com/terms" style={footerLink}>
                Terms of Service
              </Link>
            </Column>
          </Row>
          <Row>
            <Column>
              <Text style={copyrightText}>
                © 2026 StackVault. All rights reserved.
              </Text>
            </Column>
          </Row>
        </Container>
      </Body>
    </Html>
  );
};

// Styling definitions
const main = {
  backgroundColor: "#f9f9f9",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  padding: "40px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #e4e4e7",
  borderRadius: "16px",
  margin: "0 auto",
  padding: "40px",
  maxWidth: "600px",
};

const logoContainer = {
  textAlign: "center" as const,
  marginBottom: "32px",
};

const logo = {
  margin: "0 auto",
  display: "block",
};

const h1 = {
  color: "#09090b",
  fontSize: "24px",
  fontWeight: "800",
  textAlign: "center" as const,
  marginBottom: "24px",
  letterSpacing: "-0.02em",
};

const greeting = {
  fontSize: "15px",
  lineHeight: "24px",
  fontWeight: "600",
  margin: "0 0 12px 0",
  color: "#18181b",
};

const paragraph = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#4b5563",
  margin: "0 0 24px 0",
};

const card = {
  backgroundColor: "#f8fafc",
  border: "1px solid #e2e8f0",
  borderRadius: "12px",
  padding: "24px",
  marginBottom: "24px",
};

const cardTitle = {
  fontSize: "15px",
  fontWeight: "700",
  color: "#0f172a",
  margin: "0 0 4px 0",
};

const cardSubtitle = {
  fontSize: "13px",
  color: "#64748b",
  margin: "0 0 16px 0",
};

const inputContainer = {
  backgroundColor: "#ffffff",
  border: "1px solid #cbd5e1",
  borderRadius: "8px",
  padding: "14px 16px",
};

const inputLink = {
  fontSize: "13px",
  fontFamily:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',
  color: "#0f172a",
  margin: 0,
  wordBreak: "break-all" as const,
};

const sparkle = {
  fontSize: "12px",
  color: "#6366f1",
  fontWeight: "500",
  margin: "16px 0 0 0",
};

const ctaContainer = {
  textAlign: "center" as const,
  marginBottom: "32px",
};

const button = {
  backgroundColor: "#09090b",
  borderRadius: "8px",
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "14px 24px",
  marginBottom: "8px",
};

const buttonSubtext = {
  fontSize: "11px",
  color: "#71717a",
  margin: 0,
};

const hr = {
  borderColor: "#f4f4f5",
  margin: "0 0 32px 0",
};

const h3 = {
  fontSize: "15px",
  fontWeight: "700",
  color: "#09090b",
  margin: "0 0 24px 0",
};

const stepsRow = {
  marginBottom: "32px",
};

const stepColumn = {
  padding: "0 8px",
  textAlign: "center" as const,
  verticalAlign: "top",
};

const iconBoxPurple = {
  display: "inline-block",
  width: "44px",
  height: "44px",
  backgroundColor: "#f5f3ff",
  borderRadius: "12px",
  marginBottom: "12px",
};

const iconStyle = {
  margin: 0,
  fontSize: "18px",
  lineHeight: "44px",
  textAlign: "center" as const,
};

const iconBoxGreen = {
  ...iconBoxPurple,
  backgroundColor: "#f0fdf4",
};

const iconBoxGold = {
  ...iconBoxPurple,
  backgroundColor: "#fef8e6",
};

const badgeContainer = {
  marginBottom: "8px",
  textAlign: "center" as const,
};

const badgeBase = {
  display: "inline-block",
  width: "18px",
  height: "18px",
  lineHeight: "18px",
  borderRadius: "50%",
  color: "#ffffff",
  fontSize: "10px",
  fontWeight: "bold" as const,
  textAlign: "center" as const,
};

const badgePurple = {
  ...badgeBase,
  backgroundColor: "#8b5cf6",
};

const badgeGreen = {
  ...badgeBase,
  backgroundColor: "#22c55e",
};

const badgeGold = {
  ...badgeBase,
  backgroundColor: "#eab308",
};

const stepTitle = {
  fontSize: "13px",
  fontWeight: "700",
  color: "#09090b",
  margin: "0 0 4px 0",
};

const stepDesc = {
  fontSize: "11px",
  lineHeight: "16px",
  color: "#71717a",
  margin: 0,
};

const closingSection = {
  textAlign: "left" as const,
  marginTop: "24px",
};

const closing = {
  fontSize: "14px",
  color: "#4b5563",
  margin: "0 0 6px 0",
};

const signature = {
  fontSize: "14px",
  fontWeight: "bold" as const,
  color: "#09090b",
  margin: 0,
};

const footerContainer = {
  margin: "24px auto 0 auto",
  maxWidth: "600px",
  padding: "0 10px",
};

const footerLeft = {
  width: "60%",
  verticalAlign: "top",
};

const footerRight = {
  width: "40%",
  textAlign: "right" as const,
  verticalAlign: "top",
};

const footerText = {
  fontSize: "11px",
  color: "#9ca3af",
  lineHeight: "16px",
  margin: 0,
};

const footerLink = {
  color: "#71717a",
  textDecoration: "underline",
  fontSize: "11px",
};

const footerSeparator = {
  color: "#d1d5db",
  margin: "0 8px",
  fontSize: "11px",
};

const copyrightText = {
  textAlign: "center" as const,
  paddingTop: "24px",
  fontSize: "11px",
  color: "#9ca3af",
  margin: 0,
};