
import Image from "next/image";

const components = [
  {
    id: 1,
    title: "Druid 13LCD Energizer",
    image: "/druid-13lcd-energizer.jpg",
    alt: "Nemtek Druid 13LCD Electric Fence Energizer",
    description: (
      <>
        Using Nemtek’s{" "}
        <strong>Adaptive Power Technology (APT)</strong>, the Druid
        13LCD adjusts energy output to prevent arcing and power
        waste — optimizing both safety and efficiency.
      </>
    ),
    features: [
      "3 Joule Output (Single Zone)",
      "Surge & Lightning Protection",
      "Intelligent Power Saving",
      "Walk Test Mode",
      "Optional Tag Control",
    ],
  },
  {
    id: 2,
    title: "Nemtek Connect WiFi Gateway",
    image: "/nemtek-connect-wifi-gateway.jpg",
    alt: "Nemtek Connect WiFi Gateway circuit board",
    description: (
      <>
        The <strong>Nemtek WiFi Gateway</strong> allows remote
        control and monitoring of your fencing system from any
        device.
      </>
    ),
    features: [
      "Built-in Nano SIM Slot",
      "2G GSM/GPRS Modem",
      "2dBi External Antenna",
      "Compatible with Druid Energizers",
      "Live System Alerts",
    ],
  },
  {
    id: 3,
    title: "Druid 28LCD Energizer",
    image: "/druid-28lcd-energizer.jpg",
    alt: "Nemtek Druid 28LCD Dual Zone Electric Fence Energizer",
    description: (
      <>
        For larger or dual-zone installations, the{" "}
        <strong>Druid 28LCD</strong> provides two independently
        controlled zones with up to{" "}
        <strong>3.7 Joules per zone</strong>.
        <br />
        Perfect for{" "}
        <strong>
          residential, industrial, and high-security sites.
        </strong>
      </>
    ),
    features: [
      "Dual-Zone Output",
      "High/Low Voltage Modes",
      "Optional Keypad Programming",
      "Synchronization via Satellite or Network Cable",
      "Full Alarm System Integration",
    ],
  },
];

export default function ElectricFencingComponentSection() {
  return (
    <section className="w-full bg-white py-10 md:py-14">
      <div className="mx-auto max-w-[1600px] px-5 lg:px-8">

        {/* MAIN HEADING */}
        <h2 className="mb-14 text-center text-[30px] font-medium leading-tight text-[#242424] sm:text-[38px] lg:text-[40px]">
          Electric Fencing Components
        </h2>

        {/* COMPONENT ROWS */}
        <div className="flex flex-col gap-8 md:gap-12">

          {components.map((item) => (
            <article
              key={item.id}
              className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-2 lg:gap-[14px]"
            >

              {/* LEFT IMAGE */}
              <div className="group relative min-h-[330px] w-full overflow-hidden bg-white sm:min-h-[450px] lg:min-h-[625px]">

                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>

              {/* RIGHT CONTENT */}
              <div className="flex min-h-[330px] flex-col bg-[#f5f8ee] px-4 py-4 sm:px-5 sm:py-5 lg:min-h-[625px] lg:px-4 lg:py-3">

                {/* COMPONENT TITLE */}
                <h3 className="mb-4 text-[28px] font-medium leading-[1.2] tracking-[-0.4px] text-[#262626] sm:text-[36px] lg:text-[39px]">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-[16px] leading-[1.65] text-[#292929] sm:text-[18px]">
                  {item.description}
                </p>

                {/* FEATURES LABEL */}
                <h4 className="mt-1 text-[17px] font-bold text-[#252525] sm:text-[19px]">
                  Features:
                </h4>

                {/* FEATURES LIST */}
                <ul className="mt-4 list-disc space-y-4 pl-10 text-[16px] leading-[1.5] text-[#292929] sm:text-[18px]">
                  {item.features.map((feature, index) => (
                    <li key={index} className="pl-1">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
