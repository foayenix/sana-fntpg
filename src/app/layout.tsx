import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SANA Technologies | The Operating System for Natural Healing",
  description: "Join 1,000+ verified practitioners building the evidence revolution. AI-powered clinical assistant, evidence-based practice management, and the largest CAM outcomes database.",
  keywords: ["natural healing", "CAM", "complementary medicine", "practitioners", "evidence-based", "AI clinical assistant"],
  openGraph: {
    title: "SANA Technologies | The Operating System for Natural Healing",
    description: "Join 1,000+ verified practitioners building the evidence revolution.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-[#FAF9F6] text-[#2C3333]">
        {children}
      </body>
    </html>
  );
}
