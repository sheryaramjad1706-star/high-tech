
import Link from "next/link";
import { House } from "lucide-react";

export default function SlidingGateHerosection() {
  return (
    <section
      className="relative isolate flex min-h-[574px] w-full items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat px-5 py-16 text-white"
      style={{
        backgroundImage: "url('/industrial-sliding-gate-motor.jpg')",
      }}
    >
      {/* Dark overlay across the entire image */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-black/60" />

      {/* Golden yellow overlay matching screenshot */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 48% 78% at 50% 0%, rgba(235, 189, 0, 0.62) 0%, rgba(197, 151, 0, 0.38) 38%, rgba(126, 95, 0, 0.13) 70%, transparent 100%)",
        }}
      />

      {/* Additional subtle yellow wash */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(90deg, transparent 10%, rgba(181, 143, 0, 0.10) 42%, rgba(214, 169, 0, 0.16) 60%, transparent 90%)",
        }}
      />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[850px] flex-col items-center text-center">
        <h1 className="mb-[21px] text-[38px] font-semibold leading-tight tracking-[0.3px] sm:text-[48px] lg:text-[60px] lg:leading-[1.15]">
          Automatic Sliding Gate Motors
        </h1>

        <p className="mx-auto max-w-[660px] text-[16px] font-medium leading-[1.5] text-[#e1e1e1] sm:text-[18px] lg:text-[20px]">
          Enhance your property’s security and convenience with our
          state-of-the-art automatic sliding gate systems.
          <br className="hidden sm:block" />
          At <em>High Tech Engineering</em>, we deliver durable,
          smart, and fast gate automation designed for long-term
          reliability and seamless performance.
        </p>

        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mt-[38px] flex min-h-[54px] max-w-full items-center justify-center gap-4 rounded-full border border-white/25 bg-white/[0.03] px-5 py-2.5 text-[14px] font-medium backdrop-blur-[2px] sm:gap-5 sm:text-[20px]"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-3 whitespace-nowrap transition-colors duration-200 hover:text-[#f4c400]"
          >
            <House
              size={23}
              strokeWidth={1.8}
              className="text-[#ffd000]"
            />
            <span>HOME</span>
          </Link>

          <span className="font-semibold text-white">/</span>

          <span className="whitespace-nowrap">
            PROJECT DETAILS
          </span>
        </nav>
      </div>
    </section>
  );
}
