import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});  

export const metadata: Metadata = {
  title: "Leet Code",
  description: "Web application that contains Leet Code problems and video solutions",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Leet Code</title>
        <meta name="viewport" content="width=device-width, initial-scale-1" />
        <link rel="icon" href="./favicon.ico" />
        <meta name="description" content="Web application that contains Leet Code problems and video solutions" />
      </Head> 
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
