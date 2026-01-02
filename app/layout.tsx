import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coup",
  description: "Coup lets you, your team, or AI workflows send iMessages directly from your phone number, running securely on your Mac or Mac Mini.",
  keywords: ["iMessage", "automation", "Mac", "AI workflows", "team messaging"],
  openGraph: {
    title: "Coup - iMessage Automation for Teams and AI Workflows",
    description: "Send iMessages directly from your phone number with AI workflows",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
