import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from "@/components/nav/Navigation";
import Link from "next/link";
import Image from 'next/image';
import '@/styles/global.scss'
import Footer from '@/components/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://web-evolution.co'),
  title: 'Web Evolution: A digital agency that cares',
  description: 'Web Evolution is a digital agency that creates web solutions to solve user and client problems.',
  openGraph: {
    title: 'Web Evolution: A digital agency that cares',
    description: 'Web Evolution is a digital agency that creates web solutions to solve user and client problems.',
    url: 'https://web-evolution.co',
    siteName: 'Web Evolution',
    images: [
      {
        url: 'https://web-evolution.co/images/other/og-image.jpg',
        width: 800,
        height: 600,
      },
      {
        url: 'https://web-evolution.co/images/other/og-image.jpg',
        width: 1200,
        height: 630,
      }
    ]
  },
  icons: {
    icon: '/logo/we-logo.svg'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <a href="#navigation" className="skipLink">
          skip to nav
        </a>
        <a href="#main" className="skipLink">
          skip to main content
        </a>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
};
