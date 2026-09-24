import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uday Creative Portfolio",
  description:
    "Professional portfolio for Uday Paila showcasing photography, video editing, projects, and creative skills.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://uday-profile.vercel.app",
  ),
  openGraph: {
    title: "Uday Creative Portfolio",
    description: "Photography, video editing, and frontend development by Uday Paila.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-transparent text-slate-900">{children}</body>
    </html>
  );
}
