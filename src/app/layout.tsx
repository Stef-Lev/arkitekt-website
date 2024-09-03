import type { Metadata } from 'next';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import { Roboto_Condensed } from 'next/font/google';
import './globals.css';
import ScrollTopButton from '@/components/scroll-top-button/scroll-top-button';

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
      <body className={robotoCon.className}>
        <Header />
        {children}
        <ScrollTopButton />
        <Footer />
      </body>
    </html>
  );
}
