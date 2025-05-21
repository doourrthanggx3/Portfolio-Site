'use client';

import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePathname } from 'next/navigation';
import { useEffect, useState, ReactNode } from 'react';

const getThemeClass = (pathname: string) => {
  if (pathname === '/about') return 'about-theme';
  if (pathname === '/projects') return 'projects-theme';
  if (pathname === '/stack') return 'stack-theme';
  if (pathname === '/contact') return 'contact-theme';
  return 'home-theme';
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [themeClass, setThemeClass] = useState('home-theme');

  useEffect(() => {
    setThemeClass(getThemeClass(pathname));
  }, [pathname]);

  return (
    <html lang="en">
      <body className={themeClass}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

