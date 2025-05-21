'use client';

import Navbar from './Navbar';
import Footer from './Footer';
import { ReactNode } from 'react';

export default function BaseLayout({
  children,
  themeClass,
}: {
  children: ReactNode;
  themeClass: string;
}) {
  return (
    <div className={themeClass}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
