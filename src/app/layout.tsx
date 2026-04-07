import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rooted Clarity | Your Labs Tell a Story Your Doctor Isn't Reading",
  description:
    "Upload your bloodwork. Get real answers. Metabolic health insights, alternative supplement protocols, and personalized wellness plans — backed by real science, not mainstream silence.",
  keywords: [
    "metabolic health",
    "bloodwork analysis",
    "lab results",
    "supplement protocols",
    "wellness plans",
    "ketogenic",
    "fasting",
    "functional medicine",
  ],
  openGraph: {
    title: "Rooted Clarity | Your Labs Tell a Story Your Doctor Isn't Reading",
    description:
      "Upload your bloodwork. Get real answers. Metabolic health insights, alternative supplement protocols, and personalized wellness plans.",
    url: "https://rootedclarityhealth.com",
    siteName: "Rooted Clarity",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rooted Clarity",
    description:
      "Your labs tell a story your doctor isn't reading. Upload your bloodwork. Get real answers.",
    creator: "@rootedclarityhealth",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
