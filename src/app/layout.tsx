import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Lora } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const lora = Lora({ subsets: ["latin"], variable: "--font-serif", style: ["italic", "normal"] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StackVault | Secure Workspaces for Modern Teams",
  description: "Join the StackVault waitlist and be among the first to experience a modern, secure workspace for organizing documents and collaborating with your team.",
  icons: {
    icon: [
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/favicon.ico" }
    ],
    apple: [
      { url: "/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ]
  },
  manifest: "/favicon_io/site.webmanifest",
  openGraph: {
    title: "StackVault | Secure Workspaces for Modern Teams",
    description: "Join the StackVault waitlist and be among the first to experience a modern, secure workspace for organizing documents and collaborating with your team.",
    url: "https://stack-vault.com",
    siteName: "StackVault",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "StackVault Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StackVault | Secure Workspaces for Modern Teams",
    description: "Join the StackVault waitlist and be among the first to experience a modern, secure workspace for organizing documents and collaborating with your team.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
        lora.variable
      )}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900 selection:bg-zinc-100">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
