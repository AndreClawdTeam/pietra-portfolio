"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import siteContent from "@/content/siteContent";
import { CtaButton, ctaButtonColorCn } from "./CtaButton";

type HeaderProps = {
  isBlogLayout?: boolean;
};

export default function Header({ isBlogLayout = false }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const links = isBlogLayout
    ? siteContent.navigation.links.filter((link) => link.href !== "/blog")
    : siteContent.navigation.links;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background shadow-md py-2"
          : "bg-background md:bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/logo-transparent.png"
              alt={siteContent.navigation.brand}
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Mobile menu */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile CTA button */}
            <CtaButton
              content={siteContent.navigation.ctaMobile.label}
              className="!px-4 !py-2"
            />

            {/* Mobile menu button */}
            <button
              className="md:hidden text-foreground focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            {links.map((link, index) => (
              <NavLink
                key={index}
                href={`${isBlogLayout ? "/" : ""}${link.href}`}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink href={siteContent.navigation.cta.href} isButton={true}>
              {siteContent.navigation.cta.label}
            </NavLink>
          </nav>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-60 mt-4" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col space-y-4 py-4">
            {links.map((link, index) => (
              <NavLink
                key={index}
                href={`${isBlogLayout ? "/" : ""}${link.href}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              href={siteContent.navigation.cta.href}
              isButton={true}
              onClick={() => setIsMenuOpen(false)}
              className="hidden md:block"
            >
              {siteContent.navigation.cta.label}
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isButton?: boolean;
  onClick?: () => void;
  className?: string;
}

function NavLink({
  href,
  children,
  isButton = false,
  onClick,
  className,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        ${className}
        transition-colors duration-300 font-medium text-lg
        ${
          isButton
            ? `${ctaButtonColorCn} px-4 py-2 rounded-full`
            : "text-foreground hover:text-primary"
        }
      `}
    >
      {children}
    </Link>
  );
}
