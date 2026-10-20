"use client";

import {
  LuBattery,
  LuBatteryCharging,
  LuCloud,
  LuLayoutGrid,
  LuLightbulb,
} from "react-icons/lu";

export default function WorkingProcess() {
  const steps = [
    {
      number: "01",
      icon: <LuLayoutGrid className="h-7 w-7 text-[#ffc20e] transition-colors duration-300 group-hover:text-white" />,
      title: "Site Inspection & Consultation",
      description:
        "We begin by visiting your site to assess your security needs and surroundings. Our experts recommend the best solution — whether it's an electric fence or gate motor system — tailored to your property layout.",
    },
    {
      number: "02",
      icon: <LuLightbulb className="h-7 w-7 text-[#ffc20e] transition-colors duration-300 group-hover:text-white" />,
      title: "System Planning & Design",
      description:
        "Based on your requirements, we design a customized system layout using genuine components and Nemtek technology for maximum efficiency and safety.",
    },
    {
      number: "03",
      icon: <LuCloud className="h-7 w-7 text-[#ffc20e] transition-colors duration-300 group-hover:text-white" />,
      title: "Professional Installation",
      description:
        "Our trained technicians carry out installation with precision, ensuring every connection, insulator, and motor component is securely fitted and fully compliant with safety standards.",
    },
    {
      number: "04",
      icon: <LuBattery className="h-7 w-7 text-[#ffc20e] transition-colors duration-300 group-hover:text-white" />,
      title: "Testing & Commissioning",
      description:
        "Before handover, we conduct multiple performance tests to verify the entire system's functionality — ensuring smooth operation, correct voltage levels, and total reliability.",
    },
    {
      number: "05",
      icon: <LuBatteryCharging className="h-7 w-7 text-[#ffc20e] transition-colors duration-300 group-hover:text-white" />,
      title: "Maintenance & Support",
      description:
        "We provide ongoing support, troubleshooting, and periodic maintenance to keep your electric fence and gate automation systems working perfectly all year round.",
    },
  ];

  return (
    <section id="process" className="w-full bg-[#f5f8ef] py-20 sm:py-24">
      <style jsx>{`
        .stroke-number {
          -webkit-text-stroke: 1.5px #ffc20e;
          color: transparent;
        }
      `}</style>

      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-8 xl:px-0">
        <div className="grid grid-cols-1 items-stretch gap-3 md:grid-cols-2 lg:grid-cols-3">

          {/* MAIN BRAND CARD */}
          <div className="flex flex-col rounded-[8px] bg-[#423b12] p-6 text-white sm:p-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#635a20] bg-[#332e0e] px-3 py-1.5 shadow-sm">
                <LuLayoutGrid className="h-4 w-4 text-[#ffc20e]" />
                <span className="text-[12px] font-semibold tracking-[0.3px] text-[#ffc20e] uppercase">
                  WORKING PROCESS
                </span>
              </div>

              <h2 className="mt-4 text-[32px] font-bold leading-[1.1] tracking-[-0.5px] sm:text-[40px]">
                How We <br />
                <span className="text-[#ffc20e]">Work For You</span>
              </h2>

              <div className="mt-6 space-y-0 text-[13px] leading-[1.5] text-[#d6d0ad] sm:text-[14px]">
                <p>
                  At <strong className="font-semibold text-white">High Tech Engineering</strong>, we follow a structured process to ensure every project is handled with precision, safety, and top-quality service.
                </p>
                <p>
                  From initial consultation to final testing, our expert team guarantees reliable installation and long-term performance of your gate motor system or electric fence.
                </p>
              </div>
            </div>
          </div>

          {/* PROCESS STEP CARDS */}
          {steps.map((step) => (
            <div
              key={step.number}
              className="group flex min-h-[340px] flex-col rounded-[8px] border border-[#d6d6d6] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6"
            >
              {/* ICON AND NUMBER */}
              <div className="flex items-center justify-between">
                <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full border border-[#ffc20e] bg-white shadow-sm transition-all duration-300 group-hover:bg-[#ffc20e] group-hover:shadow-[0_0_20px_rgba(255,194,14,0.3)]">
                  {step.icon}
                </div>

                <span className="stroke-number font-sans text-[42px] font-extrabold tracking-wider transition-transform duration-300 group-hover:scale-105">
                  {step.number}
                </span>
              </div>

              {/* HEADING */}
              <h3 className="mt-4 text-[19px] font-bold leading-[1.3] text-[#1a1a1a] sm:text-[20px]">
                {step.title}
              </h3>

              {/* DESCRIPTION: CLOSE TO HEADING */}
              <p className="mt-3 text-[13px] leading-[1.5] text-[#70777a] sm:text-[14px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}