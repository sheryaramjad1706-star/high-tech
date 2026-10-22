
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BatteryCharging,
  ClipboardCheck,
  Zap,
} from "lucide-react";

const services = [
  {
    title: "Electric Fence Installation",
    image:
      "/WhatsApp-Image-2025-10-13-at-14.21.33_15d669b4-scaled-e1760351573220.jpg",
    imageAlt:
      "Electric fence installation by High Tech Engineering",
    icon: Zap,
    href: "",
    description: (
      <>
        At <strong>High Tech Engineering</strong>, we specialize in
        designing and installing{" "}
        <strong>custom electric fencing systems</strong> that offer
        both strength and style.
        <br />
        Each project is{" "}
        <strong>uniquely planned and executed</strong> to match
        your property’s layout and security needs — no
        one-size-fits-all approach.
        <br />
        Our fencing solutions are engineered to deliver{" "}
        <strong>
          maximum safety, aesthetic appeal, and long-term
          reliability
        </strong>
        , ensuring you and your property remain protected 24/7.
      </>
    ),
  },
  {
    title: "Free Site Survey",
    image: "/product-pic-3.jpg",
    imageAlt: "Electric fence free site survey",
    icon: ClipboardCheck,
    href: "/services/free-site-survey",
    description: (
      <>
        Your safety begins with a detailed site inspection.
        <br />
        We offer a <strong>free on-site survey</strong> to assess
        your property and recommend the best fencing design and
        energizer setup.
        <br />
        Our expert team is available{" "}
        <strong>round the clock</strong> to ensure your fence
        operates at <strong>peak performance</strong> and your
        security remains uninterrupted.
        <br />
        With{" "}
        <strong>
          reliable service, fast response, and trusted Nemtek
          technology
        </strong>
        , your protection is always our priority.
      </>
    ),
  },
  {
    title: "Fence Maintenance",
    image: "/IMG-20251009-WA0022-1011x1024.jpg",
    imageAlt:
      "Professional electric fence maintenance service",
    icon: BatteryCharging,
    href: "/services/fence-maintenance",
    description: (
      <>
        Forget the hassle of manual checks — our team provides{" "}
        <strong>
          scheduled maintenance and performance testing
        </strong>{" "}
        to keep your fence in top shape.
        <br />
        We use a{" "}
        <strong>proactive maintenance approach</strong> to
        identify and fix potential faults before they affect
        performance.
        <br />
        Our service ensures your electric fence remains{" "}
        <strong>fully functional, safe, and durable</strong>{" "}
        all year round.
      </>
    ),
  },
];

export default function ElectricFenceServicesSection() {
  // SCROLL REVEAL STATES
  const cardsRef = useRef(null);
  const [showCards, setShowCards] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updateMotion = () => {
      const prefersReducedMotion = mediaQuery.matches;
      setReduceMotion(prefersReducedMotion);

      if (prefersReducedMotion) {
        setShowCards(true);
      }
    };

    updateMotion();

    mediaQuery.addEventListener("change", updateMotion);

    const element = cardsRef.current;

    if (!element || mediaQuery.matches) {
      return () => {
        mediaQuery.removeEventListener(
          "change",
          updateMotion
        );
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowCards(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0,

        // Cards reveal only when reaching
        // the visible section while scrolling.
        rootMargin: "0px 0px -120px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener(
        "change",
        updateMotion
      );
    };
  }, []);

  return (
    <section className="relative isolate w-full overflow-hidden bg-[#141313] py-12 text-white md:py-16">

      {/* SUBTLE GOLDEN BACKGROUND GLOW */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 55%, rgba(135,100,0,0.20) 0%, rgba(50,40,12,0.08) 45%, transparent 75%)",
        }}
      />

      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">

        {/* SECTION HEADING */}
        <div className="mb-11 flex flex-col items-center text-center">

          {/* SERVICES BADGE */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-1.5">
            <Zap
              size={17}
              className="text-[#fac609]"
            />
            <span className="text-[14px] font-medium uppercase">
              Services
            </span>
          </div>

          {/* MAIN TITLE */}
          <h2 className="max-w-[1200px] text-[30px] font-medium leading-[1.2] tracking-[-0.5px] sm:text-[40px] lg:text-[50px]">
            Electric Fence Solutions{" "}
            <span className="text-[#fac609]">
              High Tech Engineering
            </span>
          </h2>

          {/* SUBTITLE */}
          <p className="mt-6 text-[22px] font-normal uppercase text-[#dedede] sm:text-[30px]">
            Our Services Include
          </p>
        </div>

        {/* SERVICE CARDS - SCROLL REVEAL */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="h-full"
                style={{
                  // Cards completely hidden initially
                  opacity:
                    showCards || reduceMotion ? 1 : 0,

                  // Cards start 200px below
                  transform:
                    showCards || reduceMotion
                      ? "translate3d(0, 0, 0) scale(1)"
                      : "translate3d(0, 200px, 0) scale(0.82)",

                  // Pop-up animation
                  transition: reduceMotion
                    ? "none"
                    : "opacity 500ms ease-out, transform 850ms cubic-bezier(0.22, 1, 0.36, 1)",

                  // Cards appear one after another
                  transitionDelay:
                    showCards && !reduceMotion
                      ? `${index * 180}ms`
                      : "0ms",
                }}
              >
                {/* ORIGINAL CARD DESIGN */}
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[11px] border border-[#4d4b46] bg-[#171615]/90 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#fac609]/70 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] sm:p-8">

                  {/* CARD TOP ROW */}
                  <div className="grid grid-cols-[minmax(0,1fr)_44%] gap-4">

                    {/* ICON AND TITLE */}
                    <div className="flex min-w-0 flex-col items-start">

                      {/* ICON HOVER */}
                      <div className="mb-3 text-[#fac609] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                        <Icon
                          size={38}
                          strokeWidth={1.8}
                        />
                      </div>

                      <h3 className="text-[20px] font-medium leading-[1.35] text-white sm:text-[23px]">
                        {service.title}
                      </h3>

                      <div className="mt-4 h-px w-full bg-white/25" />
                    </div>

                    {/* CARD IMAGE */}
                    <div className="relative h-[150px] overflow-hidden rounded-[10px]">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 768px) 45vw, 180px"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  {/* DESCRIPTION */}
                  <div className="mt-8 flex-1 text-[15px] leading-[1.65] text-[#efefef] sm:text-[16px]">
                    {service.description}
                  </div>

                  {/* LEARN MORE BUTTON */}
                  <div className="mt-8">
                    <Link
                      href={service.href}
                      className="group/btn inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-[#fac609] px-7 text-[17px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-black"
                    >
                      Learn More

                      <ArrowUpRight
                        size={20}
                        strokeWidth={1.7}
                        className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                      />
                    </Link>
                  </div>

                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
