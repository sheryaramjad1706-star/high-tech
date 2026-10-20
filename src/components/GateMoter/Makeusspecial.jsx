import Image from "next/image";

export default function WhatMakesUsSpecial() {
  return (
    <section className="bg-[#f3f6ee] py-10 px-4 sm:px-6 md:py-14 text-[#333333]">
      <div className="mx-auto w-full max-w-[1400px]">
        
        {/* Centered Heading */}
        <h2 className="text-center text-2xl font-bold tracking-tight text-[#222222] sm:text-3xl lg:text-[34px]">
          What Makes Us Special
        </h2>

        {/* Text Paragraphs with Natural Line Height & Spacing */}
        <div className="mt-6 space-y-2 text-center text-sm text-[#333333] sm:text-base md:text-[16px] leading-relaxed max-w-[1050px] mx-auto">
          <p>
            Our gate automation systems are built using{" "}
            <strong className="font-bold text-[#111111]">
              advanced, weather-resistant technology
            </strong>{" "}
            that performs efficiently in all environments.
          </p>

          <p>
            Each motor is engineered for{" "}
            <strong className="font-bold text-[#111111]">
              durability, precision, and safety
            </strong>
            , equipped with{" "}
            <strong className="font-bold text-[#111111]">
              secure remote access
            </strong>{" "}
            to prevent unauthorized entry.
          </p>

          <p>
            As an{" "}
            <strong className="font-bold text-[#111111]">
              authorized distributor of Nemtek products in Pakistan
            </strong>
            , High Tech Engineering offers{" "}
            <strong className="font-bold text-[#111111]">
              expert installation and support
            </strong>{" "}
            for residential, commercial, and large-scale projects.
          </p>
        </div>

        {/* 🚀 Fully Responsive, Large Wide/Horizontal Image Container */}
        <div className="mt-10 w-full overflow-hidden rounded-md shadow-sm">
          {/* w-full aspect ration logic to prevent clipping horizontally */}
          <div className="relative w-full aspect-[16/7] md:aspect-[21/8] lg:aspect-[21/7.2] xl:aspect-[24/8]">
            <Image
              src="/automatic-gate-motors-banner.jpg" // Apni full quality wide image ya check folder structure me save kiya hua resource path layein
              alt="Automatic Gate Motors - Effortless Security & Convenience"
              fill
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-cover object-center" // horizontal visual consistency k lye object-cover aur full fill pattern
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}