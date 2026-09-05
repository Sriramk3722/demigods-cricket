import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import WhatsAppButton from "@/app/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Demigod's Cricket Club",
  description: "Where Legends Rise. Join the best cricket club in Bangalore.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Demigod's Cricket Club",
    description: "Join the best cricket club in Bangalore. Free trials available.",
    url: "https://demigods-cricket.vercel.app",
    siteName: "Demigod's Cricket Club",
    images: [
      {
        url: "https://demigods-cricket.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Demigod's Cricket Club - Where Legends Rise",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Demigod's Cricket Club",
    description: "Where Legends Rise. Join the best cricket club in Bangalore.",
    images: ["https://demigods-cricket.vercel.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-20">{children}</div>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}