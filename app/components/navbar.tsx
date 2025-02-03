"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Features", href: "#features" },
  { name: "How it works", href: "#how-it-works" },
  { name: "Market Potential", href: "#market-potential" },
  { name: "Comparison", href: "#comparison" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const targetId = target.getAttribute("href")?.substring(1);
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScroll);
      });
    };
  }, []);
  const openPdfInNewTab = () => {
    const pdfUrl = "/mna-whitepaper.pdf";
    window.open(pdfUrl, "_blank");
  };
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <Image
                  src="/mna-navbar.png"
                  alt="MNA DEFI Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button
              variant="outline"
              className="text-blue-600 border-blue-600 hover:bg-blue-50"
              onClick={openPdfInNewTab}
            >
              Whitepaper
            </Button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <Button
              variant="ghost"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <Button
              variant="outline"
              className="ml-3 mb-3 text-blue-600 border-blue-600 hover:bg-blue-50"
              onClick={openPdfInNewTab}
            >
              Whitepaper
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
