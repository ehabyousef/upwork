import { Antonio, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const antonio = Antonio({
  variable: "--font-antonio",
  subsets: ["latin"],
});

export const metadata = {
  title: "freamer - template",
  description: "upwork framer template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${antonio.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
