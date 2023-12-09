import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from "../components/nav/Navigation";
import Link from "next/link";
import Image from 'next/image';

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
        <footer className="footer">
          <div className="footer_container">
            <div className="footer_logoAndWordMark">
              <Link href="/" className="footer_logo">
                <Image
                  src="../public/logo/we-logo-white.svg"
                  alt="Web Evolution Logo"
                  width={100}
                  height={50}
                />
              </Link>
              <p>web evolution</p>
            </div>
            <div className="footer_contact">
              <h3>Contact</h3>
              <p className="footer_address">
                Str. Professor Parashkev Stoyanov 5 <br />
                Bulgaria - Varna, 9000
              </p>
              <div className="footer_phoneAndMail">
                <p>
                  <a href="mailto:i.stoyanov.work@gmail.com">
                    i.stoyanov.work@gmail.com
                  </a>
                </p>
                <p>
                  <a href="tel:+359 (0)886020965">+359 (0)886020965</a>
                </p>
              </div>
            </div>
            <div className="footer_info">
              <p>© 2021–Today Web Evolution Ltd.</p>
              <a href="/privacy-policy">Privacy Policy</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
};
