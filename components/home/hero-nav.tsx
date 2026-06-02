"use client";

import * as React from "react";
import Link from "next/link";
import { Logo } from "@/components/layout/logo";

const LINKS = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Links", href: "/links" },
];

export function HeroNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-10 flex items-center justify-between px-5 py-4 sm:px-8 sm:py-5"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {/* logo */}
        <Link href="/" className="flex items-center gap-3 text-black" aria-label="Meridian Labs">
          <Logo className="size-[26px] sm:size-[30px]" />
          <span
            className="tracking-tight text-[21px] sm:text-[26px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Meridian Labs&reg;
          </span>
        </Link>

        {/* desktop links */}
        <nav className="hidden items-center text-[23px] text-black md:flex">
          {LINKS.map((l, i) => (
            <React.Fragment key={l.href}>
              <Link href={l.href} className="transition-opacity hover:opacity-60">
                {l.label}
              </Link>
              {i < LINKS.length - 1 && <span>,&nbsp;</span>}
            </React.Fragment>
          ))}
        </nav>

        {/* desktop CTA */}
        <a
          href="mailto:hello@meridianlabs.co"
          className="hidden text-[23px] text-black underline underline-offset-2 transition-opacity hover:opacity-60 md:inline"
        >
          Get in touch
        </a>

        {/* mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-[5px] md:hidden"
        >
          <span
            className="h-[2px] w-6 bg-black transition-all duration-300"
            style={open ? { transform: "translateY(7px) rotate(45deg)" } : undefined}
          />
          <span
            className="h-[2px] w-6 bg-black transition-all duration-300"
            style={open ? { opacity: 0 } : undefined}
          />
          <span
            className="h-[2px] w-6 bg-black transition-all duration-300"
            style={open ? { transform: "translateY(-7px) rotate(-45deg)" } : undefined}
          />
        </button>
      </header>

      {/* mobile overlay */}
      <div
        className="fixed inset-0 z-[9] flex flex-col justify-center gap-8 bg-white/95 px-8 backdrop-blur-sm transition-opacity duration-300 md:hidden"
        style={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          fontFamily: "var(--font-body)",
        }}
      >
        {LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="text-[32px] font-medium text-black"
          >
            {l.label}
          </Link>
        ))}
        <a
          href="mailto:hello@meridianlabs.co"
          onClick={() => setOpen(false)}
          className="text-[32px] font-medium text-black underline underline-offset-2"
        >
          Get in touch
        </a>
      </div>
    </>
  );
}
