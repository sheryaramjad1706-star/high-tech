"use client";

import Image from "next/image";
import {
  LuArrowUpRight,
  LuBuilding2,
  LuGlobe,
  LuHouse,
  LuLightbulb,
  LuPanelsTopLeft,
} from "react-icons/lu";

export default function About() {
  return (
    <section id="about" className="w-full bg-[#f5f8ef] text-[#080808]">
      <div className="mx-auto max-w-[1200px] px-6 py-20 sm:px-10 lg:px-8 xl:px-0 xl:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.15fr] lg:items-center lg:gap-16 xl:gap-20">
          
          {/* LEFT CONTENT */}
          <div className="flex flex-col items-start">
            <div className="inline-flex h-[34px] items-center gap-2 rounded-full border border-[#d3d5ca] px-4">
              <LuPanelsTopLeft className="h-[17px] w-[17px] text-[#ffc20e]" />
              <span className="text-[13px] font-semibold tracking-[0.5px]">
                ABOUT US
              </span>
            </div>

            <h2 className="mt-5 text-[40px] font-semibold leading-[1.2] tracking-[-0.8px] sm:text-[48px] lg:text-[46px] xl:text-[52px]">
              <span className="block">Trusted</span>
              <span className="block text-[#ffc20e]">Automation &amp;</span>
              <span className="block text-[#ffc20e]">Security Experts</span>
              <span className="mt-1 block">For A Safer Tomorrow</span>
            </h2>

            <p className="mt-5 max-w-[450px] text-[16px] leading-7 text-[#70777a]">
              Innovative security solutions built to protect your property,
              simplify access, and deliver lasting peace of mind.
            </p>

            <a
              href="/"
              className="group mt-7 inline-flex h-[49px] items-center gap-3 rounded-full border border-[#ffc20e] bg-[#ffc20e] px-7 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-transparent hover:text-[#c99b00] hover:shadow-[0_5px_18px_rgba(255,194,14,0.18)]"
            >
              Read More
              <LuArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </div>

          {/* RIGHT CONTENT */}
          <div className="pt-2">
            <h3 className="max-w-[550px] text-[23px] font-bold leading-[1.55] text-[#555b5d] sm:text-[26px]">
              Trusted Automation &amp; Security Experts for a Safer Tomorrow
            </h3>

            <div className="mt-4 max-w-[590px] space-y-4 text-[15px] leading-[1.9] text-[#70777a] sm:text-[16px]">
              <p>
                At High Tech Engineering, we specialize in delivering
                state-of-the-art{" "}
                <strong className="font-semibold text-[#33383a]">
                  Gate Motor
                </strong>{" "}
                solutions and{" "}
                <strong className="font-semibold text-[#33383a]">
                  Electric Fence
                </strong>{" "}
                systems that combine innovation, performance, and durability.
              </p>

              <p>
                With years of technical experience and a team of certified
                professionals, we design and install advanced perimeter
                security systems that meet international safety standards.
                Whether it’s a residential villa, industrial complex, or
                commercial site, we help keep your property secure — 24/7.
              </p>
            </div>

            {/* SECURITY FEATURES */}
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-7">
              {/* RESIDENTIAL SECURITY */}
              <div className="group flex items-start gap-4">
                <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full border border-[#ffc20e] text-[#eeb800] transition-all duration-300 group-hover:bg-[#ffc20e] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(255,194,14,0.25)]">
                  <LuBuilding2 className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
                </div>

                <div className="pt-1">
                  <h4 className="text-[19px] font-semibold leading-[1.4] text-black">
                    Residential Security
                  </h4>
                  <p className="mt-3 text-[14px] leading-[1.8] text-[#70777a]">
                    Comprehensive electric fence and gate automation systems
                    designed to protect homes, villas, and private properties
                    with smart, remote-controlled access.
                  </p>
                </div>
              </div>

              {/* COMMERCIAL & INDUSTRIAL SECURITY */}
              <div className="group flex items-start gap-4">
                <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full border border-[#ffc20e] text-[#eeb800] transition-all duration-300 group-hover:bg-[#ffc20e] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(255,194,14,0.25)]">
                  <LuHouse className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
                </div>

                <div className="pt-1">
                  <h4 className="text-[19px] font-semibold leading-[1.4] text-black">
                    Commercial &amp; Industrial Security
                  </h4>
                  <p className="mt-3 text-[14px] leading-[1.8] text-[#70777a]">
                    High-performance security automation for warehouses,
                    factories, and business complexes, combining electric
                    fencing, sliding gates, and swing gate motors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SINGLE IMAGE CONTAINER (Updated based on image_0.png) */}
        <div className="relative mt-16 h-[260px] w-full overflow-hidden rounded-[16px] sm:h-[350px] lg:h-[390px] shadow-md">
          {/* Ek Single High-Quality Image Showcase */}
          <Image
            src="/fence-installation.jpg" // Ek Single Wide Combined Image lagayein jo gate/fence dono dikhaye
            alt="Trusted Automation & Security Works"
            fill
            className="object-cover"
            priority
          />

          {/* FLOATING CARD 1: TOP LEFT */}
          <div className="absolute left-4 top-4 flex w-[120px] flex-col items-center justify-center rounded-[12px] border border-[#ffc20e] bg-white p-3 text-center shadow-lg sm:left-6 sm:top-6 sm:w-[150px] sm:p-4">
            <LuLightbulb className="h-6 w-6 text-[#ffc20e] sm:h-7 sm:w-7" />
            <span className="mt-1 text-[15px] font-bold text-[#1a1a1a] sm:text-[18px]">
              500 Install
            </span>
            <span className="text-[10px] font-medium text-[#70777a] sm:text-[12px]">
              Completed Work
            </span>
          </div>

          {/* FLOATING CARD 2: BOTTOM RIGHT */}
          <div className="absolute bottom-4 right-4 flex w-[120px] flex-col items-center justify-center rounded-[12px] border border-[#ffc20e] bg-white p-3 text-center shadow-lg sm:bottom-6 sm:right-6 sm:w-[150px] sm:p-4">
            <LuGlobe className="h-6 w-6 text-[#ffc20e] sm:h-7 sm:w-7" />
            <span className="mt-1 text-[15px] font-bold text-[#1a1a1a] sm:text-[18px]">
              25 Years
            </span>
            <span className="text-[10px] font-medium text-[#70777a] sm:text-[12px]">
              Experience Working
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}