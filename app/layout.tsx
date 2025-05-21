import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

// Helper to assign a class based on route
const getThemeClass = (pathname: string) => {
  if (pathname === "/about") return "about-theme";
  if (pathname === "/projects") return "projects-theme";
  if (pathname === "/stack") return "stack-theme";
  if (pathname === "/contact") return "contact-theme";
  return "home-theme"; // fallback for homepage or unknown
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";
  const themeClass = getThemeClass(pathname);

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

