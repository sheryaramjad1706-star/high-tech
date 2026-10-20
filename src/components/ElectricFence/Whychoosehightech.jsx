import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Zap } from "lucide-react";

const products = [
  {
    title: "DRUID 13 LCD Energizer",
    image: "/IMG-20251009-WA0022.jpg",
    location: "Islamabad",
    href: "/services/druid-13-lcd-energizer",
    description: (
      <>
        Our <strong>Druid 13 Energizers</strong> use Adaptive Power Technology
        (APT) by <strong>Nemtek</strong> to optimize fence energy levels and
        prevent power loss. The LCD display shows real-time status, making
        system management simple and efficient.
      </>
    ),
  },
  {
    title: "Square Tube Shield Brackets",
    image: "/IMG-20251009-WA0021.jpg",
    location: "Islamabad",
    href: "/services/square-tube-shield-brackets",
    description: (
      <>
        We use premium-grade shield brackets with durable insulators for secure
        and tamper-resistant installations. Available in Hot Dip Galvanized and
        Powder-Coated finishes, these brackets form a strong barrier that
        prevents intrusion while maintaining structural stability.
      </>
    ),
  },
  {
    title: "Compression Spring System",
    image: "/3.png",
    location: "Islamabad",
    href: "/services/compression-spring-system",
    description: (
      <>
        Our stainless-steel compression springs ensure consistent wire tension
        across your electric fence. These springs maintain uniform tension to
        prevent sagging and performance drops over time — delivering a smooth,
        reliable, and professional finish.
      </>
    ),
  },
  {
    title: "Stainless Steel Wire 316 Grade",
    image: "/WhatsApp-Image-2025-10-13-at-14.21.49_84c5bd0a-scaled.jpg",
    location: "Islamabad",
    href: "/services/compression-spring-system",
    description: (
      <>
        The 316 Grade Stainless Steel Wire offers superior corrosion resistance
        and longevity, making it ideal for coastal and high-humidity regions. It
        provides a longer lifespan and stronger conductivity, ensuring your
        fence remains effective in all weather conditions.
      </>
    ),
  },
  {
    title: "7Ah Backup Battery",
    image: "/IMG-20251009-WA0026.jpg",
    location: "Islamabad",
    href: "/services/compression-spring-system",
    description: (
      <>
        7Ah Backup Battery Every installation includes a 12V 7Ah lead-acid,
        maintenance-free rechargeable battery, ensuring your fence continues to
        operate during power failures. Reliable backup means uninterrupted
        security, even in load-shedding or emergency conditions.
      </>
    ),
  },
  {
    title: "24/7 Support",
    image: "/WhatsApp-Image-2025-10-13-at-14.21.40_e57e253f-scaled.jpg",
    location: "Islamabad",
    href: "/services/compression-spring-system",
    description: (
      <>
        We stand by our promise — support when you need it most. Our dedicated
        service agents are available 24/7 to handle queries, repairs, and system
        checks. Every installation is performed by trained technicians, ensuring
        full quality control and long-term accountability.
      </>
    ),
  },
];

export default function WhyChooseHighTechSection() {
  return (
    <section className="w-full bg-[#f5f8ee] py-12 md:py-14">
      <div className="mx-auto max-w-[1300px] px-5 lg:px-8">
        {/* TOP HEADING AREA */}
        <div className="mb-10 grid grid-cols-1 items-start gap-7 lg:grid-cols-2">
          {/* LEFT TITLE */}
          <div>
            {/* Badge */}
            <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-[#d4d8cd] px-4 py-1.5 text-[15px] text-black">
              <Zap size={18} strokeWidth={2} className="text-[#fac609]" />
              <span>WHEN YOU CHOOSE</span>
            </div>

            {/* Main Heading */}
            <h2 className="max-w-[760px] text-[37px] font-medium leading-[1.12] tracking-[-0.5px] text-[#111111] sm:text-[45px] lg:text-[56px]">
              When You Choose High
              <br className="hidden xl:block" />
              Tech Engineering <span className="text-[#fac609]">You Get</span>
            </h2>
          </div>

          {/* RIGHT DESCRIPTION */}
          <div className="flex flex-col items-start lg:items-end lg:text-right">
            <p className="max-w-[650px] text-[16px] leading-[1.6] text-[#777777] sm:text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <Link
              href="/services"
              className="group mt-7 inline-flex min-h-[55px] items-center justify-center gap-3 rounded-full bg-[#fac609] px-7 text-[18px] font-medium text-white transition-all duration-300 hover:bg-[#171717] hover:shadow-md"
            >
              See More
              <ArrowUpRight
                size={21}
                strokeWidth={1.6}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>

        {/* PRODUCT CARDS */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <article
              key={index}
              className="group relative h-[475px] overflow-hidden rounded-[11px] bg-[#222222] sm:h-[500px] lg:h-[530px]"
            >
              {/* BACKGROUND IMAGE */}
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* IMAGE GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />

              {/* LOCATION BADGE */}
              <div className="absolute right-5 top-5 z-10 inline-flex items-center gap-2 rounded-full bg-[#131313] px-4 py-2 text-[16px] font-medium text-white">
                <MapPin size={20} strokeWidth={2} className="text-[#fac609]" />
                {product.location}
              </div>

              {/* CONTENT BOX */}
              <div className="absolute bottom-5 left-5 right-5 z-10 rounded-[11px] border border-white/20 bg-black/35 p-5 backdrop-blur-[2px] transition-all duration-300 group-hover:bg-black/50">
                {/* TITLE */}
                <h3 className="mb-3 text-[23px] font-medium leading-tight text-[#fac609] sm:text-[26px]">
                  {product.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-[15px] leading-[1.55] text-[#f1f1f1] sm:text-[17px]">
                  {product.description}
                </p>

                {/* SEE DETAILS BUTTON */}
                <Link
                  href={product.href}
                  className="group/btn mt-5 inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-[#fac609] px-7 text-[17px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-black"
                >
                  See Details
                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.7}
                    className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
