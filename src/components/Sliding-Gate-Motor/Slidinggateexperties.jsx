
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function SlidinggateexpertisSection() {
  return (
    <section className="w-full bg-white py-10">
      <div className="mx-auto w-full max-w-[1440px] px-5 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,2.25fr)_minmax(0,1fr)] lg:gap-10">

          {/* LEFT IMAGE */}
          <div className="relative h-[280px] w-full overflow-hidden rounded-xl sm:h-[370px] lg:h-[480px]">
            <Image
              src="/what-are-the-best-sliding-gate-openers-v2_4c4c3e99-790b-4533-9bae-8d04aa117647.webp"
              alt="Sliding gate motor installation"
              fill
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-cover object-center"
            />
          </div>

          {/* EXPERTISE CARD */}
          <div className="flex w-full flex-col rounded-[17px] border border-[#d5d5d5] bg-white px-7 py-9 sm:px-9 lg:min-h-[325px]">

            <h2 className="mb-7 text-[30px] font-semibold leading-tight text-black sm:text-[33px]">
              Expertise
            </h2>

            <div className="flex flex-col gap-4">

              {/* FIRST BUTTON */}
              <Link
                href="/services/gate-automation-systems"
                className="group relative flex min-h-[74px] items-center justify-center rounded-full bg-[#fac80b] px-11 py-3 text-center text-[18px] font-medium leading-[1.35] text-white transition-colors hover:bg-[#e9b900]"
              >
                <span>
                  Gate Automation
                  <br />
                  Systems
                </span>

                <ArrowUpRight
                  size={20}
                  strokeWidth={1.6}
                  className="absolute right-6 top-1/2 -translate-y-1/2 transition-transform group-hover:translate-x-1"
                />
              </Link>

              {/* SECOND BUTTON */}
              <Link
                href="/services/smart-security-integration"
                className="group relative flex min-h-[74px] items-center justify-center rounded-full border border-[#fac80b] bg-white px-11 py-3 text-center text-[18px] font-medium leading-[1.35] text-black transition-colors hover:bg-[#fff9e4]"
              >
                <span>
                  Smart Security
                  <br />
                  Integration
                </span>

                <ArrowUpRight
                  size={20}
                  strokeWidth={1.6}
                  className="absolute right-6 top-1/2 -translate-y-1/2 transition-transform group-hover:translate-x-1"
                />
              </Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
