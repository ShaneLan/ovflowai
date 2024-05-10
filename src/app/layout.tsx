import type { Metadata } from "next";
import type { Viewport } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "katex/dist/katex.min.css";
import "./globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OvFlowAI",
  description: "Search Stackoverflow with the power of AI. Try now!",
  icons: {
    icon: "/Logo.png",
    shortcut: "/Logo.png",
    apple: "/Apple-Icon.png",
  },
  openGraph: {
    title: "OvFlowAI - Web Search AI",
    description: "Search stackoverflow with the power of AI. Try now!",
    url: "https://OvFlowAI.com/",
    siteName: "OvFlowAI",
    images: [
      {
        url: "https://OvFlowAI.com/OGImage.png",
        width: 1200,
        height: 630,
        alt: "OvFlowAI - Stackoverflow Search AI",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OvFlowAI - Web Search AI",
    description: "Search online with the power of AI. Try now!",
    images: [
      {
        url: "https://OvFlowAI.ai/OGImage.png",
        width: 1200,
        height: 630,
        alt: "OvFlowAI - Stackoverflow Search AI",
      },
    ],
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>
          <Sidebar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
