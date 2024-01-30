import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import GoogleAnalytics from "@/components/Analytics";
import Nav from "./(shared)/Nav";
import { Toaster } from "@/components/ui/toaster";
import { Footer2, FooterMain } from "./(shared)/Footer";
import { footer, nav } from "@/public/content/en";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-body",
  display: "swap",
});
const recoleta = localFont({
  src: "../public/fonts/recoleta.woff2",
  variable: "--font-title",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Fractional CTO | Startup Mike | Tech Leadership for Startups & Scaleups",
  description:
    "Helping non-technical teams build great products that people love. I work with early stage startups as a tech advisor, leader, or full-stack product manager & developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_MEASUREMENT_ID="G-WPD87GRL8C" />
      <GoogleAnalytics GA_MEASUREMENT_ID="G-TEL3Q2X5H8" />
      <body
        className={`${recoleta.className} ${poppins.variable} scroll-smooth snap-y snap-mandatory h-full min-h-screen flex flex-col grow`}
      >
        <Nav content={nav} />
        <div className="flex-grow">
          {children}
          <Toaster />
        </div>
        <Footer2 content={footer} />
      </body>
    </html>
  );
}
