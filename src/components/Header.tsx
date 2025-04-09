"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-gray-800">
            Pietra Fogaça
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
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

          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            <NavLink href="#sobre">Sobre</NavLink>
            <NavLink href="#metodo">O Método 3C&apos;s</NavLink>
            <NavLink href="#resultados">Resultados</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <NavLink href="#contato">Contato</NavLink>
            <NavLink href="https://wa.me/5511xxxxxxxxx" isButton={true}>
              Agende Agora
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
            <NavLink href="#sobre" onClick={() => setIsMenuOpen(false)}>
              Sobre
            </NavLink>
            <NavLink href="#metodo" onClick={() => setIsMenuOpen(false)}>
              O Método 3C&apos;s
            </NavLink>
            <NavLink href="#resultados" onClick={() => setIsMenuOpen(false)}>
              Resultados
            </NavLink>
            <NavLink href="#faq" onClick={() => setIsMenuOpen(false)}>
              FAQ
            </NavLink>
            <NavLink href="#contato" onClick={() => setIsMenuOpen(false)}>
              Contato
            </NavLink>
            <NavLink
              href="https://wa.me/5511xxxxxxxxx"
              isButton={true}
              onClick={() => setIsMenuOpen(false)}
            >
              Agende Agora
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
}

function NavLink({ href, children, isButton = false, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        transition-colors duration-300
        ${
          isButton
            ? "bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700"
            : "text-gray-800 hover:text-pink-600"
        }
      `}
    >
      {children}
    </Link>
  );
}
