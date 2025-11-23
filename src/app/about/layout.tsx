import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About SANA Technologies - The Operating System for Natural Healing",
  description: "Learn about SANA Technologies, the health technology company building the infrastructure for evidence-based complementary and alternative medicine. Founded in the UK, SANA connects wellness seekers with verified CAM practitioners.",
  keywords: [
    "about SANA",
    "SANA Technologies",
    "natural healing platform",
    "CAM technology company",
    "complementary medicine",
    "evidence-based wellness",
    "UK health tech startup",
    "wellness platform",
    "practitioner verification"
  ],
  openGraph: {
    title: "About SANA Technologies",
    description: "Building the operating system for natural healing. Learn about our mission to make complementary medicine evidence-based and trustworthy.",
    url: "https://sana.health/about",
    type: "website",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
