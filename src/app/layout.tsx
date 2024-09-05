import type { Metadata } from 'next';
import Header from '@/components/header/header';
import Head from 'next/head';
import Script from 'next/script';
import Footer from '@/components/footer/footer';
import { Roboto_Condensed } from 'next/font/google';
import './globals.css';
import ScrollTopButton from '@/components/scroll-top-button/scroll-top-button';
import { GoogleAnalytics } from '@next/third-parties/google';

const robotoCon = Roboto_Condensed({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Arkitekt - Official Page',
  description: 'The Arkitekt Beats',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="a85d79e3-6677-4e63-af5d-927f01bd042a"
        data-blockingmode="auto"
        type="text/javascript"
      ></Script>
      <GoogleAnalytics gaId="G-5YCKW8K98N" />
      <body className={robotoCon.className}>
        <Header />
        {children}
        <ScrollTopButton />
        <Footer />
      </body>
    </html>
  );
}
