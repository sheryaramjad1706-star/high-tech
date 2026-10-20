
import Image from "next/image";
import Link from "next/link";
import {
  UsersRound,
  Headset,
  MailOpen,
  ArrowUpRight,
} from "lucide-react";

export default function SlidingGateAssistanceSection() {
  return (
    <section className="w-full bg-white py-10 md:py-12">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,2.25fr)_minmax(0,1fr)] lg:gap-10">

          {/* LEFT CONTENT */}
          <div className="min-w-0 border-t border-[#dedede] pt-8">

            {/* TOP FEATURES */}
            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-5">

              {/* SKILLED TEAM */}
              <div className="group flex items-start gap-4">

                {/* HOVER ICON */}
                <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full bg-[#fac609] transition-all duration-300 ease-in-out group-hover:rotate-[8deg] group-hover:scale-110 group-hover:bg-[#171717] group-hover:shadow-lg">
                  <UsersRound
                    size={35}
                    strokeWidth={1.4}
                    className="text-white transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div>
                  <h3 className="mb-2 text-[23px] font-medium leading-tight text-black xl:text-[26px]">
                    Skilled Team member
                  </h3>

                  <p className="text-[15px] leading-[1.55] text-[#777777] xl:text-[16px]">
                    Our professional technicians are certified and
                    trained in the latest automation systems to ensure
                    perfect installation every time.
                  </p>
                </div>
              </div>

              {/* 24 HOURS SUPPORT */}
              <div className="group flex items-start gap-4">

                {/* HOVER ICON */}
                <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full bg-[#fac609] transition-all duration-300 ease-in-out group-hover:rotate-[8deg] group-hover:scale-110 group-hover:bg-[#171717] group-hover:shadow-lg">
                  <Headset
                    size={35}
                    strokeWidth={1.4}
                    className="text-white transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div>
                  <h3 className="mb-2 text-[23px] font-medium leading-tight text-black xl:text-[26px]">
                    Available 24 hours
                  </h3>

                  <p className="text-[15px] leading-[1.55] text-[#777777] xl:text-[16px]">
                    We provide 24/7 customer support for emergency
                    assistance and maintenance calls.
                  </p>
                </div>
              </div>
            </div>

            {/* BOTTOM IMAGES */}
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-14">

              {/* FIRST IMAGE */}
              <div className="group relative h-[260px] overflow-hidden rounded-[10px] sm:h-[310px]">
                <Image
                  src="/WhatsApp-Image-2025-11-13-at-10.35.27_fac6195b.jpg"
                  alt="Automatic sliding gate installation"
                  fill
                  sizes="(max-width: 640px) 100vw, 35vw"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* SECOND IMAGE */}
              <div className="group relative h-[260px] overflow-hidden rounded-[10px] sm:h-[310px]">
                <Image
                  src="/IMG-20251009-WA0028-1.jpg"
                  alt="Automatic sliding and swing door opener"
                  fill
                  sizes="(max-width: 640px) 100vw, 35vw"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* RIGHT ASSISTANCE CARD */}
          <div className="relative mt-0 min-h-[475px] overflow-hidden rounded-[10px] bg-[#222222] text-white lg:mt-[52px]">

            {/* BACKGROUND */}
            <Image
              src="/WhatsApp-Image-2025-10-13-at-13.49.32_a4d4e813.jpg"
              alt="Gate motor background"
              fill
              sizes="(max-width: 1024px) 100vw, 30vw"
              className="object-cover object-center"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/65" />

            {/* CONTENT */}
            <div className="relative z-10 flex min-h-[475px] flex-col items-center justify-center px-6 py-8 text-center">

              {/* MAIL ICON WITH HOVER */}
              <div className="group mb-4 cursor-default">
                <MailOpen
                  size={43}
                  strokeWidth={1.5}
                  className="text-[#fac609] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:rotate-[-8deg] group-hover:text-white"
                />
              </div>

              {/* HEADING */}
              <h2 className="text-[39px] font-medium leading-[1.15] tracking-[0.5px] sm:text-[45px]">
                Need
                <br />
                Assistance?
              </h2>

              {/* DIVIDER */}
              <div className="my-6 h-px w-full max-w-[275px] bg-[#fac609]" />

              {/* CONTACT */}
              <div className="flex flex-col items-center gap-4 text-[15px] sm:text-[17px]">
                <a
                  href="tel:+923339129936"
                  className="transition-colors duration-300 hover:text-[#fac609]"
                >
                  +92 333 9129936
                </a>

                <a
                  href="mailto:htechsolutions@gmail.com"
                  className="break-all transition-colors duration-300 hover:text-[#fac609]"
                >
                  htechsolutions@gmail.com
                </a>
              </div>

              {/* BOOK NOW BUTTON */}
              <Link
                href="/contact"
                className="group mt-6 flex min-h-[58px] w-full max-w-[285px] items-center justify-center gap-3 rounded-full bg-[#fac609] px-5 text-[22px] font-medium text-white transition-all duration-300 hover:bg-[#171717] hover:shadow-lg"
              >
                Book Now

                <ArrowUpRight
                  size={24}
                  strokeWidth={1.6}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-45"
                />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
