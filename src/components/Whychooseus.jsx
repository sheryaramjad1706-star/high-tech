
"use client";

import { useEffect, useRef, useState } from "react";
import {
  LuLayoutGrid,
  LuArrowUpRight,
} from "react-icons/lu";

export default function BenefitsSection() {
  // SCROLL REVEAL
  const benefitsRef = useRef(null);
  const [showBenefits, setShowBenefits] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updateMotion = () => {
      setReduceMotion(mediaQuery.matches);
    };

    updateMotion();

    mediaQuery.addEventListener("change", updateMotion);

    const element = benefitsRef.current;

    if (!element) {
      return () => {
        mediaQuery.removeEventListener("change", updateMotion);
      };
    }

    if (mediaQuery.matches) {
      setShowBenefits(true);

      return () => {
        mediaQuery.removeEventListener("change", updateMotion);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowBenefits(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -120px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener("change", updateMotion);
    };
  }, []);

  const benefits = [
    {
      number: "01",
      title: "Reliable Security Solutions",
      description: (
        <>
          Our gate systems and electric fencing are built using{" "}
          <strong className="font-semibold text-[#555]">
            authentic components
          </strong>
          , ensuring powerful, consistent, and tamper-proof protection
          around the clock.
        </>
      ),
    },
    {
      number: "02",
      title: "Expert Installation Team",
      description: (
        <>
          Every project is handled by{" "}
          <strong className="font-semibold text-[#555]">
            trained professionals
          </strong>{" "}
          with years of experience in security automation,
          guaranteeing precise installation and seamless operation.
        </>
      ),
    },
    {
      number: "03",
      title: "Low Maintenance, High Performance",
      description: (
        <>
          Enjoy{" "}
          <strong className="font-semibold text-[#555]">
            long-lasting performance
          </strong>{" "}
          with minimal maintenance requirements — saving you time,
          effort, and unnecessary costs.
        </>
      ),
    },
    {
      number: "04",
      title: "After-Sales Support & Warranty",
      description: (
        <>
          We provide{" "}
          <strong className="font-semibold text-[#555]">
            dedicated customer support
          </strong>
          , periodic maintenance, and product warranties to ensure
          your complete satisfaction and peace of mind.
        </>
      ),
    },
  ];

  return (
    <section
      id="benefits"
      className="w-full overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-[1180px] xl:max-w-[1240px]">

        {/* SECTION HEADER */}
        <div className="mb-12 text-center sm:mb-14 lg:mb-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d9d9d9] bg-white px-5 py-2">
            <LuLayoutGrid className="h-4 w-4 text-[#ffc20e]" />

            <span className="text-[13px] font-medium tracking-[0.5px] text-[#222]">
              WHY CHOOSE US
            </span>
          </div>

          <h2 className="text-[32px] font-normal leading-[1.2] tracking-[0.2px] text-black sm:text-[42px] lg:text-[46px]">
            Benefits Of Choosing{" "}
            <span className="text-[#ffc20e]">
              High Tech Engineering
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[720px] text-[14px] leading-[1.8] text-[#70777a] sm:text-[15px] lg:text-[15.5px]">
            We combine innovation, quality, and experience to deliver
            gate automation systems and electric fencing that stand
            the test of time.
            <br className="hidden sm:block" />
            Our solutions are designed to provide{" "}
            <strong className="font-semibold text-[#555]">
              maximum safety, durability, and convenience
            </strong>{" "}
            — all with minimal maintenance and long-term reliability.
          </p>
        </div>

        {/* BENEFIT ROWS - SCROLL REVEAL */}
        <div
          ref={benefitsRef}
          className="flex flex-col gap-4 lg:gap-[18px]"
        >
          {benefits.map((benefit, index) => (
            <div
              key={benefit.number}
              className="benefit-reveal"
              style={{
                opacity:
                  showBenefits || reduceMotion ? 1 : 0,

                transform:
                  showBenefits || reduceMotion
                    ? "translate3d(0, 0, 0) scale(1)"
                    : "translate3d(0, 200px, 0) scale(0.82)",

                transition: reduceMotion
                  ? "none"
                  : "opacity 500ms ease-out, transform 850ms cubic-bezier(0.22, 1, 0.36, 1)",

                transitionDelay:
                  showBenefits && !reduceMotion
                    ? `${index * 150}ms`
                    : "0ms",
              }}
            >
              {/* ORIGINAL BENEFIT ROW */}
              <div className="group grid grid-cols-1 items-center gap-4 rounded-[10px] border border-[#d5d5d5] bg-white px-6 py-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#ffc20e] hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)] sm:grid-cols-[95px_210px_minmax(0,1fr)_75px] sm:gap-5 sm:px-6 sm:py-5 lg:grid-cols-[100px_235px_minmax(0,1fr)_100px] lg:gap-6 lg:px-5 lg:py-6">

                {/* NUMBER */}
                <div className="flex items-center justify-between sm:justify-start">
                  <span className="benefit-number text-[48px] font-normal leading-none tracking-[-1px] text-transparent transition-transform duration-300 group-hover:scale-110 sm:text-[50px] lg:text-[54px]">
                    {benefit.number}
                  </span>

                  {/* MOBILE ARROW */}
                  <a
                    href="#contact"
                    aria-label={`Learn more about ${benefit.title}`}
                    className="inline-flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#ffc20e] text-white transition-all duration-300 hover:scale-110 hover:bg-black hover:text-white sm:hidden"
                  >
                    <LuArrowUpRight className="h-7 w-7 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

                {/* TITLE */}
                <h3 className="text-[20px] font-medium leading-[1.4] tracking-[0.1px] text-[#111] transition-colors duration-300 group-hover:text-[#a47b00] sm:border-r sm:border-[#d5d5d5] sm:py-2 sm:pr-5 sm:text-[21px] lg:text-[22px]">
                  {benefit.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-[14px] leading-[1.8] text-[#70777a] sm:border-r sm:border-[#d5d5d5] sm:py-3 sm:pr-6 sm:text-[14px] lg:text-[14.5px]">
                  {benefit.description}
                </p>

                {/* DESKTOP ARROW */}
                <div className="hidden items-center justify-center sm:flex">
                  <a
                    href="#contact"
                    aria-label={`Learn more about ${benefit.title}`}
                    className="inline-flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#ffc20e] text-white transition-all duration-300 hover:scale-110 hover:bg-black hover:text-white hover:shadow-[0_5px_15px_rgba(0,0,0,0.2)] lg:h-[48px] lg:w-[48px]"
                  >
                    <LuArrowUpRight className="h-7 w-7 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* NUMBER OUTLINE STYLING */}
      <style jsx>{`
        .benefit-number {
          -webkit-text-stroke: 1.6px #ffc20e;
        }
      `}</style>
    </section>
  );
}
