'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [activePage, setActivePage] = useState<string>('home');

  useEffect(() => {
    const route = pathname?.split('/')[1]; // get the first slug (e.g., "about")
    setActivePage(route || 'home');        // default to "home" if root
  }, [pathname]);

  const links = [
    { name: 'About', href: '/about', id: 'about' },
    { name: 'Projects', href: '/projects', id: 'projects' },
    { name: 'Tech Stack', href: '/stack', id: 'stack' },
    { name: 'Contact', href: '/contact', id: 'contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link href="/" className="logo">
          MarissaLynn.dev
        </Link>
        <div className="nav-links">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`link ${link.id} ${activePage === link.id ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

