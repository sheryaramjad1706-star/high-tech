
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function SwingGateExpertiseSection() {
  return (
    <section className="w-full bg-white py-8 md:py-12">
      <div className="mx-auto w-full max-w-[1300px] px-5 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,2.25fr)_minmax(0,1fr)] lg:gap-10">

          {/* LEFT SIDE IMAGE */}
          <div className="group relative w-full overflow-hidden rounded-[10px] bg-[#222]">
            <Image
              src="/WhatsApp-Image-2025-11-13-at-10.35.27_fac6195b.jpg"
              alt="Automated swing gate systems by High Tech Engineering"
              width={900}
              height={870}
              priority
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
          </div>

          {/* RIGHT SIDE EXPERTISE CARD */}
          <div className="flex w-full flex-col rounded-[17px] border border-[#d5d5d5] bg-white px-7 py-8 sm:px-9 lg:min-h-[300px]">

            {/* HEADING */}
            <h2 className="mb-7 text-[30px] font-semibold leading-tight text-black sm:text-[33px]">
              Expertise
            </h2>

            {/* BUTTONS */}
            <div className="flex flex-col gap-4">

              {/* FIRST BUTTON */}
              <Link
                href="/services/gate-automation-systems"
                className="group relative flex min-h-[74px] w-full items-center justify-center rounded-full bg-[#fac609] px-11 py-3 text-center text-[17px] font-medium leading-[1.35] text-white transition-all duration-300 hover:bg-[#171717] hover:shadow-md"
              >
                <span>
                  Gate Automation
                  <br />
                  Systems
                </span>

                <ArrowUpRight
                  size={20}
                  strokeWidth={1.6}
                  className="absolute right-6 top-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-[60%]"
                />
              </Link>

              {/* SECOND BUTTON */}
              <Link
                href="/services/smart-security-integration"
                className="group relative flex min-h-[74px] w-full items-center justify-center rounded-full bg-[#fac609] px-11 py-3 text-center text-[17px] font-medium leading-[1.35] text-white transition-all duration-300 hover:bg-[#171717] hover:shadow-md"
              >
                <span>
                  Smart Security
                  <br />
                  Integration
                </span>

                <ArrowUpRight
                  size={20}
                  strokeWidth={1.6}
                  className="absolute right-6 top-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-[60%]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
