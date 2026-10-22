
"use client";

import { useState } from "react";

const SearchIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    className="h-[19px] w-[19px]"
  >
    <circle cx="10.8" cy="10.8" r="6.8" />
    <path d="m16 16 4.5 4.5" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-[16px] w-[16px]"
  >
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
);

const ChevronIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    className="h-[14px] w-[14px] shrink-0"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [gateOpen, setGateOpen] = useState(false);

  const linkClass =
    "whitespace-nowrap text-[16px] font-semibold transition-colors duration-200 hover:text-[#ffc20e]";

  const mobileLinkClass =
    "block rounded px-3 py-3 text-[16px] font-semibold transition-colors duration-200 hover:bg-yellow-50 hover:text-[#ffc20e]";

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setGateOpen(false);
  };

  return (
    <header className="relative z-50 w-full bg-white text-black shadow-sm">
      <nav className="mx-auto flex min-h-[80px] max-w-[1000px] items-center justify-between px-5 lg:px-0">
        {/* Logo */}
        <a
          href="/"
          className="flex shrink-0 items-center"
          aria-label="Hi-Tech Home"
        >
          <img
            src="/hightech-logo.png"
            alt="Hi-Tech Engineering Solutions"
            className="h-[70px] w-auto max-w-[115px] object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-[32px] md:flex">
          <a href="/" className={`${linkClass} text-[#ffc20e]`}>
            Home
          </a>

          {/* Gate Motor Dropdown */}
          <div className="group relative">
            <div className="flex items-center gap-[5px]">
              <a href="/gate-motor" className={linkClass}>
                Gate Motor
              </a>

              <button
                type="button"
                onClick={() => setGateOpen((prev) => !prev)}
                aria-label="Toggle Gate Motor submenu"
                aria-expanded={gateOpen}
                className="flex items-center justify-center p-1 transition-colors duration-200 hover:text-[#ffc20e]"
              >
                <ChevronIcon />
              </button>
            </div>

            <div
              className={`absolute left-[-12px] top-full z-50 w-[190px] pt-[22px] ${
                gateOpen ? "block" : "hidden"
              } group-hover:block group-focus-within:block`}
            >
              <div className="overflow-hidden bg-white shadow-lg">
                <a
                  href="/sliding-gate-motor"
                  className="block px-4 py-[12px] text-[15px] font-medium transition-colors duration-200 hover:bg-[#ffc20e] hover:text-white"
                >
                  Sliding Gate Motor
                </a>

                <a
                  href="/swing-gate-motor"
                  className="block bg-[#ffc20e] px-4 py-[12px] text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#e5ad00]"
                >
                  Swing Gate Motor
                </a>
              </div>
            </div>
          </div>

          <a href="/electric-fence" className={linkClass}>
            Electric Fence
          </a>

          <a href="/portfolio" className={linkClass}>
            Portfolio
          </a>

          <a href="/contact" className={linkClass}>
            Contact
          </a>
        </div>

        {/* Desktop Search and Get Started */}
        <div className="hidden shrink-0 items-center gap-[30px] md:flex">
          <button
            type="button"
            aria-label="Search"
            className="text-[#ffc20e] transition-colors duration-200 hover:text-black"
          >
            <SearchIcon />
          </button>

          <a
            href="/contact"
            className="group flex h-[46px] items-center gap-3 rounded-full border border-[#ffc20e] bg-[#ffc20e] px-[25px] text-[16px] font-bold text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            Get Started
            <ArrowIcon />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => {
            setMobileOpen((prev) => !prev);
            setGateOpen(false);
          }}
          className="flex h-11 w-11 items-center justify-center text-black transition-colors hover:text-[#ffc20e] md:hidden"
        >
          {mobileOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-7 w-7"
            >
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-7 w-7"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-4 shadow-lg md:hidden">
          <div className="flex flex-col gap-1">
            <a
              href="/"
              onClick={closeMobileMenu}
              className={`${mobileLinkClass} text-[#ffc20e]`}
            >
              Home
            </a>

            {/* Mobile Gate Motor */}
            <div>
              <div className="flex items-center justify-between">
                <a
                  href="/gate-motor"
                  onClick={closeMobileMenu}
                  className={`${mobileLinkClass} flex-1`}
                >
                  Gate Motor
                </a>

                <button
                  type="button"
                  onClick={() => setGateOpen((prev) => !prev)}
                  aria-label="Toggle Gate Motor submenu"
                  aria-expanded={gateOpen}
                  className="flex h-11 w-11 items-center justify-center rounded transition-colors hover:bg-yellow-50 hover:text-[#ffc20e]"
                >
                  <ChevronIcon />
                </button>
              </div>

              {gateOpen && (
                <div className="ml-3 border-l-2 border-[#ffc20e]">
                  <a
                    href="/sliding-gate-motor"
                    onClick={closeMobileMenu}
                    className="block px-4 py-3 text-[15px] font-medium transition-colors hover:text-[#ffc20e]"
                  >
                    Sliding Gate Motor
                  </a>

                  <a
                    href="/swing-gate-motor"
                    onClick={closeMobileMenu}
                    className="block px-4 py-3 text-[15px] font-semibold transition-colors hover:text-[#ffc20e]"
                  >
                    Swing Gate Motor
                  </a>
                </div>
              )}
            </div>

            <a
              href="/electric-fence"
              onClick={closeMobileMenu}
              className={mobileLinkClass}
            >
              Electric Fence
            </a>

            <a
              href="/portfolio"
              onClick={closeMobileMenu}
              className={mobileLinkClass}
            >
              Portfolio
            </a>

            <a
              href="/contact"
              onClick={closeMobileMenu}
              className={mobileLinkClass}
            >
              Contact
            </a>

            {/* Mobile Search and CTA */}
            <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-4">
              <button
                type="button"
                aria-label="Search"
                className="p-2 text-[#ffc20e] transition-colors hover:text-black"
              >
                <SearchIcon />
              </button>

              <a
                href="/contact"
                onClick={closeMobileMenu}
                className="flex h-[46px] items-center gap-3 rounded-full border border-[#ffc20e] bg-[#ffc20e] px-[25px] text-[16px] font-bold text-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                Get Started
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
