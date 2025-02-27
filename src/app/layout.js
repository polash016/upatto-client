"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";
import { ScrollProvider } from "./context/ScrollContext";
import Footer from "@/components/shared/Footer";
import { usePathname } from "next/navigation";
import OgNavbar from "@/components/shared/OgNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [showNavbar, setShowNavbar] = useState(false);
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (!isHomePage) {
      setShowNavbar(true);
    } else {
      // Delay navbar appearance after animation (adjust timing as needed)
      const timer = setTimeout(() => setShowNavbar(true), 12600);
      return () => clearTimeout(timer);
    }
  }, [isHomePage]);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollProvider>
          {/* <FloatingNavDemo /> */}
          {/* <NavFour /> */}
          {/* <Navbar /> */}
          {/* <NavTwo isScrolled={isScrolled} /> */}
          {/* <AnimationNav /> */}
          {/* {showNavbar && <OgNavbar />} */}
          {children}
          <Footer />
        </ScrollProvider>
      </body>
    </html>
  );
}
