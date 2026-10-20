"use client";

import Image from "next/image";
import {
  LuArrowUpRight,
  LuBatteryCharging,
  LuLayoutGrid,
  LuZap,
} from "react-icons/lu";

export default function Services() {
  const services = [
    {
      id: "gate-motor",
      isFeatured: false,
      icon: <LuLayoutGrid className="h-[22px] w-[22px] text-[#ffc20e]" />,
      title: "Gate Motor Solutions",
      image: "/gate-motor-service.jpg",
      description: (
        <>
          We offer complete <strong className="font-semibold text-white">automatic gate systems</strong> designed for both residential and commercial use. Whether you need a <strong className="font-semibold text-white">Swing Gate Motor</strong> for smooth dual-panel movement or a <strong className="font-semibold text-white">Sliding Gate Motor</strong> for space-saving automation, our solutions provide effortless entry control, safety, and durability.
        </>
      ),
      link: "#",
    },
    {
      id: "electric-fence",
      isFeatured: true,
      icon: <LuZap className="h-[22px] w-[22px] text-[#ffc20e]" />,
      title: "Electric Fence Installation",
      image: "/electric-fence-service.jpg",
      description: (
        <>
          Protect your property with <strong className="font-semibold text-white">Nemtek-powered electric fencing systems</strong>. Our fences are built for efficiency, reliability, and 24/7 security. Ideal for homes, farms, and industries looking for peace of mind and high-performance perimeter protection.
        </>
      ),
      link: "#",
    },
    {
      id: "installation-service",
      isFeatured: false,
      icon: <LuBatteryCharging className="h-[22px] w-[22px] text-[#ffc20e]" />,
      title: "Installation & After-Sales Service",
      image: "/after-sales-service.jpg",
      description: (
        <>
          Our job doesn't end at installation — we provide ongoing <strong className="font-semibold text-white">maintenance, upgrades, and troubleshooting</strong> to ensure your systems run flawlessly. Count on our trained engineers for quick support and long-term reliability.
        </>
      ),
      link: "#",
    },
  ];

  const marqueeItems = [
    "Secure",
    "Automate",
    "Protect",
    "Smart Security Starts Here",
    "Advanced Electric Fencing Solutions",
  ];

  return (
    <section id="services" className="w-full bg-[#0d0f12] pt-20 text-white sm:pt-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-8 xl:px-0">
        
        {/* TOP HEADER SECTION */}
        <div className="flex flex-col items-center text-center">
          
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#2b2f36] bg-[#16191e] px-4 py-1.5 shadow-sm">
            <LuLayoutGrid className="h-[15px] w-[15px] text-[#ffc20e]" />
            <span className="text-[12px] font-semibold tracking-[0.8px] text-[#e2e8f0] uppercase">
              SERVICES
            </span>
          </div>

          {/* MAIN HEADING */}
          <h2 className="mt-6 text-[34px] font-bold leading-[1.25] tracking-[-0.5px] sm:text-[44px] md:text-[48px] lg:text-[52px]">
            Smart Security &amp; Automation{" "}
            <span className="text-[#ffc20e]">Solutions For You</span>
          </h2>

          {/* SUBTITLE */}
          <p className="mt-5 max-w-[760px] text-[15px] leading-[1.75] text-[#9ca3af] sm:text-[16px]">
            At <strong className="font-semibold text-white">High Tech Engineering</strong>, we deliver reliable, durable, and technology-driven solutions to enhance your property's security and convenience. From advanced <strong className="font-semibold text-white">automated gate motors to electric fencing systems</strong>, our expert team ensures professional installation, premium materials, and long-term performance.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative flex flex-col justify-between rounded-[20px] p-7 transition-all duration-300 ${
                service.isFeatured
                  ? "border-2 border-[#ffc20e]/80 bg-gradient-to-b from-[#1c180b] via-[#14161b] to-[#121519] shadow-[0_0_35px_rgba(255,194,14,0.15)]"
                  : "border border-[#23272f] bg-[#121519] hover:border-[#ffc20e]/40 hover:bg-[#161a20]"
              } hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]`}
            >
              <div>
                {/* CARD HEADER */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col items-start pr-2">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#1a1e26]">
                      {service.icon}
                    </div>
                    <h3 className="text-[21px] font-bold leading-[1.3] text-white">
                      {service.title}
                    </h3>
                  </div>

                  {/* Right Preview Image */}
                  <div className="relative h-[115px] w-[130px] shrink-0 overflow-hidden rounded-[14px] border border-[#2d323c]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* DIVIDER LINE */}
                <div className={`my-6 h-[1px] w-full ${service.isFeatured ? "bg-[#332b13]" : "bg-[#1e232d]"}`} />

                {/* DESCRIPTION */}
                <p className="text-[14px] leading-[1.8] text-[#9da4b0]">
                  {service.description}
                </p>
              </div>

              {/* BUTTON */}
              <div className="mt-8">
                <a
                  href={service.link}
                  className="inline-flex h-[44px] items-center gap-2 rounded-full border border-[#ffc20e] bg-[#ffc20e] px-6 text-[14px] font-semibold text-[#0d0f12] transition-all duration-300 hover:bg-transparent hover:text-[#ffc20e] hover:shadow-[0_0_20px_rgba(255,194,14,0.2)]"
                >
                  Learn More
                  <LuArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* BARA & CHORA YELLOW RUNNING TICKER / MARQUEE BANNER AT THE BOTTOM */}
      <div className="mt-20 w-full overflow-hidden bg-[#ffc20e] py-7 text-white">
        {/* CSS KEYFRAMES EMBEDDED TO GUARANTEE SMOOTH RUNNING MOVEMENT */}
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-continuous-marquee {
            animation: marquee 20s linear infinite;
          }
        `}</style>

        <div className="flex w-max animate-continuous-marquee items-center space-x-10">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center space-x-10">
              {marqueeItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-10 whitespace-nowrap text-[24px] font-extrabold tracking-wide text-white uppercase sm:text-[30px] md:text-[34px]"
                >
                  <span>{item}</span>
                  <span className="text-[20px] text-white/80 sm:text-[26px]">•</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}