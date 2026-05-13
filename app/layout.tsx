import type { Metadata } from 'next';
import { Manrope, Inter } from 'next/font/google';

import './globals.css';

import Header from '@/components/Header/Header';

const manrope = Manrope({
  variable: '--font-family',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--second-family',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Rental Car',
  description: 'Car rental website',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${manrope.variable} ${inter.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
