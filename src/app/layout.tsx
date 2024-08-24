import type { Metadata } from 'next';
import Header from '@/components/header/header';
import Container from '@/components/container/container';
import Footer from '@/components/footer/footer';
import { Roboto_Condensed } from 'next/font/google';
import './globals.css';
import TitleHeader from '@/components/title-header/title-header';
import PathFinder from '@/components/path-finder/path-finder';
import { headers } from 'next/headers';
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
  const pagesWithTitleHeader = ['/music', '/videos', '/contact'];
  const headersList = headers();
  const path = headersList.get('x-pathname');
  console.log({ path });
  // const showTitleHeader = pagesWithTitleHeader.includes(pathname);
  // console.log(pathname);
  return (
    <html lang="en">
      <body className={robotoCon.className}>
        <Header />
        <Container className="mt-[80px] h-max">{children}</Container>
        {/* <Footer /> */}
        <ScrollTopButton />
      </body>
    </html>
  );
}
