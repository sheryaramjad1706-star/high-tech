"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, ClipboardCheck, Wrench, ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Gate Automation Installation",
    image: "/gate-installation.png",
    alt: "Automatic sliding gate motor installation",
    icon: ShieldCheck,
    description: (
      <>
        At <strong>High Tech Engineering</strong>, we specialize in installing
        smart gate automation systems that combine security, convenience, and
        modern technology.
        <br />
        Our gate motors are designed to make your life easier — with just a
        single press of a remote, your gate opens or closes smoothly,
        eliminating the need for manual effort.
        <br />
        Whether for residential, commercial, or industrial use, our systems add
        an <strong>extra layer of safety</strong> while enhancing the overall
        look and efficiency of your property.
      </>
    ),
    href: "/gate-motor/installation",
  },
  {
    number: "02",
    title: "Free Site Survey",
    image: "/free-site-survey.png",
    alt: "Automatic gate at a property",
    icon: ClipboardCheck,
    description: (
      <>
        Installing an automatic gate is an important investment, and we make
        sure it is done right from the start.
        <br />
        Our expert technicians conduct a <strong>free on-site inspection</strong>{" "}
        of your gate’s structure and security layout to recommend the best
        automation solution.
        <br />
        Whether you have a <strong>sliding gate or swing gate</strong>, we
        ensure the perfect fit, smooth performance, and long-term reliability
        while meeting the highest safety standards.
      </>
    ),
    href: "/gate-motor/site-survey",
  },
  {
    number: "03",
    title: "Gate Automation Maintenance",
    image: "/gate-maintenance.png",
    alt: "Gate motor and automation accessories",
    icon: Wrench,
    description: (
      <>
        Our dedicated maintenance services keep your{" "}
        <strong>automatic gate system</strong> working at peak efficiency.
        <br />
        We regularly inspect and test <strong>gate motors, sensors, and remote
        systems</strong> to prevent breakdowns and ensure smooth, quiet
        operation.
        <br />
        With our proactive approach, you can rely on continuous performance
        and dependable security — without the worry of sudden malfunctions.
      </>
    ),
    href: "/gate-motor/maintenance",
  },
];

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Har card 0.2s ke gap se aayega
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 }, // Neeche se start hoga
  visible: {
    opacity: 1,
    y: 0, // Upar move hoga
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#121212] px-4 py-14 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[700px] max-w-full -translate-x-1/2 rounded-full bg-[#ffc400]/[0.06] blur-[100px]" />

      <div className="relative mx-auto w-full max-w-[1450px]">
        {/* Section heading */}
        <div className="mb-10 text-center sm:mb-12 lg:mb-14">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.03] px-5 py-2 text-xs font-semibold tracking-[1.5px] text-white sm:text-sm">
            <span className="text-[#ffc400]">▦</span>
            OUR SERVICES
          </div>

          <h2 className="text-3xl font-semibold leading-tight tracking-[0.3px] sm:text-4xl md:text-[42px] lg:text-[48px]">
            Gate Automation Solutions{" "}
            <span className="text-[#ffc400]">
              High Tech Engineering
            </span>
          </h2>

          <p className="mt-4 text-lg font-medium tracking-wide text-white/75 sm:text-xl md:text-2xl">
            OUR SERVICES INCLUDE
          </p>

          <div className="mx-auto mt-5 h-[3px] w-20 rounded-full bg-[#ffc400]" />
        </div>

        {/* Animated Service cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.article
                key={service.number}
                variants={cardVariants}
                className="group flex h-full min-w-0 flex-col rounded-xl border border-white/20 bg-gradient-to-br from-white/[0.035] via-transparent to-[#ffc400]/[0.055] p-5 transition-all duration-300 hover:-translate-y-2 hover:border-[#ffc400]/70 hover:shadow-[0_12px_40px_rgba(255,196,0,0.12)] sm:p-6 lg:p-6 xl:p-7"
              >
                {/* Card top */}
                <div className="flex items-start gap-4">
                  <div className="min-w-0 flex-1">
                    <div className="mb-3 text-[#ffc400] transition-transform duration-300 group-hover:scale-110">
                      <IconComponent className="h-8 w-8" />
                    </div>

                    <h3 className="text-lg font-semibold leading-[1.4] tracking-[0.1px] sm:text-xl lg:text-[20px]">
                      {service.title}
                    </h3>

                    <div className="mt-4 h-px w-full bg-white/25 transition-colors duration-300 group-hover:bg-[#ffc400]/60" />
                  </div>

                  {/* Service image */}
                  <div className="relative h-[112px] w-[42%] shrink-0 overflow-hidden rounded-lg bg-[#292929] sm:h-[115px] sm:w-[43%] lg:h-[125px]">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(max-width: 639px) 42vw, (max-width: 1023px) 35vw, 220px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="mt-6 flex-1 text-[13px] font-normal leading-[1.8] text-white/85 sm:text-[13px] lg:text-[14px] lg:leading-[1.85]">
                  {service.description}
                </div>

                {/* Learn More */}
                <div className="mt-6 pt-1">
                  <Link
                    href={service.href}
                    className="inline-flex min-h-11 items-center justify-center gap-3 rounded-full bg-[#ffc400] px-5 py-3 text-sm font-semibold text-[#171717] transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_rgba(255,196,0,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffc400] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121212]"
                  >
                    Learn More
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}