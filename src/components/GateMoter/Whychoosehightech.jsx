import Image from "next/image";

export default function WhyChooseSection() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 md:py-16 lg:px-8 lg:py-20 text-[#333333]">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col justify-center space-y-8">
            
            {/* Block 1 */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#222222] sm:text-3xl lg:text-[32px] leading-snug">
                Why Choose High Tech Engineering
              </h2>
              <div className="mt-4 space-y-3 text-base text-[#555555] sm:text-[17px] leading-relaxed">
                <p>
                  At <strong className="font-bold text-[#222222]">High Tech Engineering</strong>,{" "}
                  <strong className="font-bold text-[#222222]">quality and customer satisfaction</strong> are the foundation of everything we do.
                </p>
                <p>
                  Our professional team delivers reliable service, expert guidance, and after-sale support that ensures lasting performance.
                </p>
                <p>
                  Through <strong className="font-bold text-[#222222]">continuous improvement and innovative solutions</strong>, we aim not just to meet but to exceed our clients&apos; expectations — every single time.
                </p>
              </div>
            </div>

            {/* Block 2 */}
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-[#222222] sm:text-3xl lg:text-[30px] leading-snug">
                Gate Automation Systems
              </h3>
              <div className="mt-4 space-y-3 text-base text-[#555555] sm:text-[17px] leading-relaxed">
                <p>
                  We offer <strong className="font-bold text-[#222222]">premium-grade gate motors</strong> and control units designed to{" "}
                  <strong className="font-bold text-[#222222]">automate your existing gates</strong> for enhanced safety and convenience.
                </p>
                <p>
                  Our automation systems seamlessly integrate with{" "}
                  <strong className="font-bold text-[#222222]">electric fencing</strong>, providing a{" "}
                  <strong className="font-bold text-[#222222]">complete, high-security perimeter solution</strong>.
                </p>
                <p>
                  With just a press of a button, your gate operates smoothly, offering both comfort and control.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Image */}
          <div className="relative w-full overflow-hidden rounded-lg shadow-sm">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/gate-motor-service.jpg" // Apni image ka path ya name lagayein
                alt="Automatic gate with remote control"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}