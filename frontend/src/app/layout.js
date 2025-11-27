import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/comps/Header";
import Footer from "@/comps/Footer";
import AppProvider from "@/comps/AppProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nayem's Canvas | Home",
  description: "Simple blog website by Nayem Ahmed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppProvider>
          <Header />
          <main>
            {children}
          </main>
        </AppProvider>
        <Footer />
      </body>
    </html>
  );
}