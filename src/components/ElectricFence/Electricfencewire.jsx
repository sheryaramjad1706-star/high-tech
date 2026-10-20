
import Image from "next/image";

export default function ElectricFenceWireSection() {
  return (
    <section className="w-full bg-white py-10 md:py-12">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-10">

          {/* LEFT CONTENT */}
          <div className="min-w-0 text-[#222222]">

            {/* FIRST HEADING */}
            <h2 className="mb-4 text-[29px] font-medium leading-tight tracking-[-0.4px] sm:text-[35px] lg:text-[38px]">
              Premium Electric Fence Wire
            </h2>

            <p className="mb-4 text-[16px] leading-[1.6] sm:text-[18px]">
              We use{" "}
              <strong>high-grade stainless steel wire</strong>{" "}
              suited to Pakistan’s diverse climates.
            </p>

            {/* BULLET POINTS */}
            <ul className="mb-8 list-disc space-y-3 pl-10 text-[16px] leading-[1.6] sm:text-[18px]">
              <li>
                <strong>316-L Grade</strong> for coastal and humid
                areas like Karachi.
              </li>

              <li>
                <strong>304-L Grade</strong> for inland regions like
                Islamabad, Rawalpindi, and Punjab.
                <br />
                Each wire is selected for{" "}
                <strong>
                  corrosion resistance, strength, and long lifespan
                </strong>, ensuring consistent current flow and
                maximum safety.
                <br />
                Choose <strong>High Tech Engineering</strong> for{" "}
                <strong>
                  industrial, commercial, and residential
                </strong>{" "}
                electric fence installations that last.
              </li>
            </ul>

            {/* SECOND HEADING */}
            <h2 className="mb-4 text-[29px] font-medium leading-tight tracking-[-0.4px] sm:text-[35px] lg:text-[38px]">
              What Makes Our Fences Special
            </h2>

            <div className="space-y-0 text-[16px] leading-[1.6] sm:text-[18px]">
              <p>
                At <strong>High Tech Engineering</strong>, every
                product is built for endurance.
              </p>

              <p>
                We use{" "}
                <strong>
                  Hot Dip Galvanized and Powder-Coated Poles
                </strong>{" "}
                that come with a{" "}
                <strong>lifetime rust-resistance warranty</strong>.
              </p>

              <p>
                Each pole meets{" "}
                <strong>Nemtek’s international manufacturing
                standards</strong>, featuring{" "}
                <strong>110 microns of galvanization</strong> and a{" "}
                <strong>sleek black finish</strong> for both
                durability and aesthetics.
              </p>

              <p>
                Being partners with <strong>Nemtek</strong>, we provide{" "}
                <strong>authentic components</strong> and access to{" "}
                <strong>
                  technical support directly from Nemtek’s experts
                </strong>{" "}
                for large-scale projects.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full overflow-hidden bg-[#f5f5f5]">
            <Image
              src="/electric-fence-service.jpg"
              alt="Premium electric fence wire and Nemtek electric fencing solutions"
              width={760}
              height={745}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
