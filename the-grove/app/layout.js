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

export const metadata = {
  title: "The Grove",
};

export const viewport = {
  width:"devide-width",
  initialScale: 1
}
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="font-serif bg-[#b7afa0] flex flex-wrap overflow-x-hidden scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
