"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Главная", href: "/", anchor: false },
  { label: "Как это работает", href: "#how", anchor: true },
  { label: "Условия", href: "/terms" },
  { label: "Связаться", href: "https://t.me/<MY_HANDLE>", external: true },
];

function scrollToId(e: React.MouseEvent, href: string) {
  const id = href.replace("#", "");
  if (href.startsWith("#")) {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("home");
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      // header ~height
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 w-full z-30 transition-colors duration-300 h-[88px] md:h-auto bg-[#A09D9D] shadow-md md:shadow-none md:bg-transparent"
    >
      <nav
        className="container max-w-screen-xl mx-auto flex items-center justify-between px-4 h-full"
        aria-label="Главная навигация"
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500"
        >
          <Image
            src="/logo.png"
            alt="fiat24 logo"
            width={128}
            height={128}
            className="w-32 aspect-square -my-8 object-contain transition-transform duration-200"
          />
        </Link>
        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) =>
            link.external ? (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500"
                >
                  {link.label}
                </a>
              </li>
            ) : (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={link.anchor ? (e) => scrollToId(e, link.href) : undefined}
                  className="text-white hover:text-gray-200 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500"
                >
                  {link.label}
                </a>
              </li>
            )
          )}
          <li>
            <a
              href="#form"
              onClick={(e) => scrollToId(e, "#form")}
              className="ml-2 rounded-full bg-black text-white px-5 py-2 font-medium shadow-sm hover:bg-gray-800 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500"
            >
              Оставить заявку
            </a>
          </li>
        </ul>
        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {/* Simple hamburger SVG */}
          <span aria-hidden="true">
            {open ? (
              // X icon
              <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2}>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </svg>
            ) : (
              // Hamburger icon
              <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2}>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </span>
        </button>
        {/* Mobile menu */}
        {open && (
          <ul
            className="absolute left-0 top-full w-full bg-[#A09D9D] shadow-md flex flex-col gap-2 px-4 py-4 md:hidden animate-fade-in items-center justify-center"
          >
            {navLinks.map((link) =>
              link.external ? (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 text-white hover:text-gray-200 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ) : (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.anchor) scrollToId(e, link.href);
                      setOpen(false);
                    }}
                    className="block py-2 text-white hover:text-gray-200 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500"
                  >
                    {link.label}
                  </a>
                </li>
              )
            )}
            <li>
              <a
                href="#form"
                onClick={(e) => {
                  scrollToId(e, "#form");
                  setOpen(false);
                }}
                className="block mt-2 rounded-full bg-black text-white px-5 py-2 font-medium shadow-sm hover:bg-gray-800 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500"
              >
                Оставить заявку
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

