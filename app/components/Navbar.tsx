"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { href: "/", label: "Home" },
  { href: "/tours", label: "Tours" },
  { href: "/about", label: "About Jamal" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const path = usePathname();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold text-emerald-700">Jamal Tours</h1>
        <ul className="flex gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={clsx(
                  "hover:text-emerald-600 transition",
                  path === link.href && "text-emerald-700 font-semibold"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
