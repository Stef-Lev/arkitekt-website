import type { Metadata } from 'next';
import { Roboto_Condensed } from 'next/font/google';
// @ts-ignore
import './globals.css';
const robotoCon = Roboto_Condensed({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Arkitekt | Designing the Sound of the Streets',
  description:
    'Official showcase of Arkitekt, a music producer from Athens. Specializing in UK/NY Drill, Trap, Lofi, Boombap, and Baile Funk. Distributed by The Orchard.',
  keywords: [
    'Arkitekt Beats',
    'Athens Music Producer',
    'UK Drill Beats',
    'Baile Funk Instrumental',
    'Trap Producer Greece',
    'The Orchard Artist',
  ],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={robotoCon.className}>{children}</body>
    </html>
  );
}
