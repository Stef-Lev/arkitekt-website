import type { Metadata } from 'next';
import Header from '@/components/header/header';
import Container from '@/components/container/container';
import { Inter } from 'next/font/google';
import './globals.css';
import TitleHeader from '@/components/title-header/title-header';
import PathFinder from '@/components/path-finder/path-finder';
import { headers } from 'next/headers';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>
        <Header />
        <main className="flex min-h-screen mt-[80px]">
          <Container className="">{children}</Container>
        </main>
      </body>
    </html>
  );
}
