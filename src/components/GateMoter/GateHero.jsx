
import Link from "next/link";

export default function GateHeros() {
  return (
    <section
      className="relative isolate flex min-h-[290px] w-full items-center justify-center overflow-hidden bg-[#242424] bg-cover bg-center bg-no-repeat px-5 py-10 sm:min-h-[310px] sm:px-8 sm:py-12 md:min-h-[340px] md:py-14 lg:min-h-[360px]"
      style={{
        backgroundImage: "url('/gate-motor-service.png')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-black/60" />

      {/* Warm center glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(255,194,14,0.20),transparent_65%)]" />

      {/* Content */}
      <div className="mx-auto flex w-full max-w-[700px] flex-col items-center text-center">
        <h1 className="text-[36px] font-bold leading-tight tracking-[0.2px] text-white sm:text-[42px] md:text-[48px] lg:text-[50px]">
          Gate Automation
        </h1>

        <p className="mt-4 max-w-[560px] text-[14px] font-normal leading-[23px] text-white/90 sm:text-[15px] sm:leading-[25px] md:mt-5 md:text-[16px] md:leading-[27px]">
          Experience the perfect balance of security, convenience, and
          innovation with our advanced gate automation systems.
          <br className="hidden sm:block" /> At High Tech Engineering, we
          install durable, remote-controlled gate motors designed to make
          every entry and exit smooth, effortless, and secure.
        </p>

        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mt-6 flex items-center justify-center rounded-full border border-white/25 bg-black/15 px-3.5 py-2 backdrop-blur-[2px] sm:mt-7 sm:px-4"
        >
          <Link
            href="/"
            className="flex items-center gap-2 text-[12px] font-medium text-white transition-colors duration-200 hover:text-[#ffc20e] sm:text-[13px]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffc20e"
              strokeWidth="1.8"
              className="h-[15px] w-[15px]"
              aria-hidden="true"
            >
              <path d="m3 10 9-7 9 7" />
              <path d="M5 9v11h14V9M9 20v-7h6v7" />
            </svg>
            HOME
          </Link>

          <span className="mx-3 text-[13px] font-medium text-white">
            /
          </span>

          <span
            aria-current="page"
            className="text-[12px] font-medium text-white sm:text-[13px]"
          >
            PROJECTS
          </span>
        </nav>
      </div>
    </section>
  );
}
