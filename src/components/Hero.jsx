"use client";

import { useEffect, useState } from "react";
import {
  LuSun,
  LuRefreshCw,
  LuArrowUpRight,
  LuPlay,
  LuX,
  LuShieldCheck,
  LuUsers,
} from "react-icons/lu";

const heroVideo = "/videos/hero-video.mp4";

function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame;
    const duration = 1800;
    const startTime = performance.now();

    function updateCounter(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(eased * end));

      if (progress < 1) {
        frame = requestAnimationFrame(updateCounter);
      }
    }

    frame = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(frame);
  }, [end]);

  return (
    <>
      {count.toLocaleString("en-US")}
      {suffix}
    </>
  );
}

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    if (!videoOpen) return;

    const previousOverflow = document.body.style.overflow;

    function handleEscape(event) {
      if (event.key === "Escape") {
        setVideoOpen(false);
      }
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [videoOpen]);

  return (
    <section className="relative isolate w-full overflow-hidden bg-[#171b1c] text-white">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 -z-10 bg-black/65" />

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/50 via-black/20 to-black/50" />

      {/* HERO CONTENT */}
      <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-12 px-5 py-12 sm:px-8 sm:py-16 md:gap-14 md:px-10 md:py-20 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12 lg:px-8 lg:py-20 xl:gap-16 xl:px-0 xl:py-24">

        {/* LEFT SIDE */}
        <div className="flex min-w-0 flex-col justify-center">

          {/* MAIN HEADING */}
          <h1 className="max-w-[680px] text-[clamp(2.25rem,5.3vw,4.25rem)] font-bold leading-[1.12] tracking-[-0.7px]">
            <span className="block">Best</span>

            <span className="block text-[#ffc20e]">
              Gate Motor &amp; Electric
            </span>

            <span className="block text-[#ffc20e]">
              Fence Solutions
            </span>

            <span className="block">
              In Town For You
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-5 max-w-[620px] text-[14px] font-medium leading-[1.9] text-white/90 sm:mt-6 sm:text-[16px] md:text-[17px]">
            High Tech Engineering provides reliable automatic gate motor
            systems and electric fencing, ensuring maximum protection,
            convenience, and long-term durability.
          </p>

          {/* DIVIDER */}
          <div className="mt-6 h-px w-full max-w-[620px] bg-white/25" />

          {/* BUTTONS */}
          <div className="mt-7 flex flex-wrap items-center gap-5 sm:mt-8 sm:gap-6">

            <a
              href="/contact"
              className="group inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full border border-[#ffc20e] bg-[#ffc20e] px-6 py-3 text-[14px] font-semibold text-white transition-all duration-300 hover:bg-transparent hover:text-[#ffc20e] sm:min-h-[52px] sm:px-7 sm:text-[15px]"
            >
              Explore More

              <LuArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>

            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              aria-label="Play company video"
              className="group flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full border-2 border-[#ffc20e] bg-white text-[#ffc20e] transition-all duration-300 hover:scale-110 hover:bg-[#ffc20e] hover:text-white hover:shadow-[0_0_25px_rgba(255,194,14,0.45)] sm:h-[62px] sm:w-[62px]"
            >
              <LuPlay className="ml-0.5 h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
            </button>

            <span className="text-[12px] font-medium text-white/80 sm:text-[13px]">
              Watch Our Video
            </span>
          </div>

          {/* ANIMATED COUNTERS */}
          <div className="mt-9 grid w-full max-w-[650px] grid-cols-3 overflow-hidden rounded-xl border border-[#ffc20e]/80 bg-black/35 backdrop-blur-sm sm:mt-11">

            {/* PROJECTS */}
            <div className="flex min-h-[105px] flex-col items-center justify-center px-1 py-5 transition-colors duration-300 hover:bg-[#ffc20e]/15 sm:min-h-[125px] sm:px-3">
              <h2 className="text-[25px] font-bold leading-none sm:text-[36px] md:text-[40px]">
                <Counter end={1} suffix="K+" />
              </h2>

              <p className="mt-3 text-center text-[10px] font-semibold leading-snug text-white/90 sm:text-[14px] md:text-[15px]">
                Projects Complete
              </p>
            </div>

            {/* WORKERS */}
            <div className="flex min-h-[105px] flex-col items-center justify-center border-x border-[#ffc20e]/80 px-1 py-5 transition-colors duration-300 hover:bg-[#ffc20e]/15 sm:min-h-[125px] sm:px-3">
              <h2 className="text-[25px] font-bold leading-none sm:text-[36px] md:text-[40px]">
                <Counter end={20} suffix="+" />
              </h2>

              <p className="mt-3 text-center text-[10px] font-semibold leading-snug text-white/90 sm:text-[14px] md:text-[15px]">
                Best Workers
              </p>
            </div>

            {/* PROJECT VALUE */}
            <div className="flex min-h-[105px] flex-col items-center justify-center px-1 py-5 transition-colors duration-300 hover:bg-[#ffc20e]/15 sm:min-h-[125px] sm:px-3">
              <h2 className="text-[25px] font-bold leading-none sm:text-[36px] md:text-[40px]">
                <Counter end={10} suffix="Cr+" />
              </h2>

              <p className="mt-3 text-center text-[10px] font-semibold leading-snug text-white/90 sm:text-[14px] md:text-[15px]">
                Project Value
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: FEATURE CARDS */}
        <div className="flex min-w-0 flex-col gap-5 sm:gap-6 lg:gap-7">

          {/* GATE MOTORS CARD */}
          <a
            href="/sliding-gate-motor"
            className="group relative flex min-h-[155px] min-w-0 items-center gap-4 rounded-xl border border-white/25 bg-white/[0.06] p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#ffc20e] hover:bg-black/40 hover:shadow-[0_10px_35px_rgba(255,194,14,0.12)] sm:min-h-[175px] sm:gap-5 sm:p-6 md:p-7"
          >
            <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full border border-[#ffc20e] text-[#ffc20e] transition-all duration-500 group-hover:bg-[#ffc20e] group-hover:text-black group-hover:shadow-[0_0_22px_rgba(255,194,14,0.3)] sm:h-[70px] sm:w-[70px]">
              <LuSun className="h-7 w-7 transition-transform duration-500 group-hover:rotate-90 group-hover:scale-110 sm:h-9 sm:w-9" />
            </div>

            <div className="min-w-0 flex-1 pr-5">
              <h3 className="text-[18px] font-bold transition-colors group-hover:text-[#ffc20e] sm:text-[21px] md:text-[23px]">
                Gate Motors
              </h3>

              <p className="mt-2 text-[13px] leading-[1.8] text-white/85 sm:text-[14px] sm:leading-[1.9]">
                Reliable automated gate solutions for convenient access,
                enhanced protection, and dependable everyday performance.
              </p>
            </div>

            <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc20e] text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-black sm:right-4 sm:top-4 sm:h-10 sm:w-10">
              <LuArrowUpRight className="h-5 w-5" />
            </span>
          </a>

          {/* ELECTRIC FENCE CARD */}
          <a
            href="/electric-fence"
            className="group relative flex min-h-[155px] min-w-0 items-center gap-4 rounded-xl border border-white/25 bg-white/[0.06] p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#ffc20e] hover:bg-black/40 hover:shadow-[0_10px_35px_rgba(255,194,14,0.12)] sm:min-h-[175px] sm:gap-5 sm:p-6 md:p-7"
          >
            <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full border border-[#ffc20e] text-[#ffc20e] transition-all duration-500 group-hover:bg-[#ffc20e] group-hover:text-black group-hover:shadow-[0_0_22px_rgba(255,194,14,0.3)] sm:h-[70px] sm:w-[70px]">
              <LuRefreshCw className="h-7 w-7 transition-transform duration-500 group-hover:rotate-180 group-hover:scale-110 sm:h-9 sm:w-9" />
            </div>

            <div className="min-w-0 flex-1 pr-5">
              <h3 className="text-[18px] font-bold transition-colors group-hover:text-[#ffc20e] sm:text-[21px] md:text-[23px]">
                Electric Fence Security
              </h3>

              <p className="mt-2 text-[13px] leading-[1.8] text-white/85 sm:text-[14px] sm:leading-[1.9]">
                Durable electric fencing systems designed to strengthen
                perimeter protection and help keep your property secure.
              </p>
            </div>

            <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc20e] text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-black sm:right-4 sm:top-4 sm:h-10 sm:w-10">
              <LuArrowUpRight className="h-5 w-5" />
            </span>
          </a>

          {/* HAPPY CLIENTS CARD */}
          <div className="flex min-h-[120px] min-w-0 items-center justify-center gap-4 rounded-xl bg-white px-4 py-5 text-black transition-transform duration-300 hover:-translate-y-1 sm:min-h-[140px] sm:gap-5 sm:px-6">

            <div className="flex shrink-0 items-center pl-1">
              {[
                { src: "/clients/client-1.jpg", alt: "Client 1" },
                { src: "/clients/client-2.jpg", alt: "Client 2" },
                { src: "/clients/client-3.jpg", alt: "Client 3" },
                { src: "/clients/client-4.jpg", alt: "Client 4" },
              ].map((client, index) => (
                <img
                  key={client.alt}
                  src={client.src}
                  alt={client.alt}
                  className={`relative h-[38px] w-[38px] rounded-full border-2 border-white object-cover transition-transform duration-300 hover:z-10 hover:scale-125 sm:h-[48px] sm:w-[48px] ${
                    index !== 0 ? "-ml-3" : ""
                  }`}
                />
              ))}
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <LuUsers className="h-5 w-5 shrink-0 text-[#dba900]" />

                <p className="text-[13px] font-bold sm:text-[15px]">
                  Happy Clients
                </p>
              </div>

              <p className="mt-1 text-[12px] text-gray-500 sm:text-[13px]">
                (3.5K reviews)
              </p>

              <div
                className="mt-1 flex gap-[2px]"
                aria-label="5 out of 5 stars"
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className="text-[17px] leading-none text-[#ffc20e]"
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>

            <LuShieldCheck className="ml-auto hidden h-8 w-8 shrink-0 text-[#dba900] sm:block md:h-9 md:w-9" />
          </div>
        </div>
      </div>

      {/* VIDEO MODAL */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
          onClick={() => setVideoOpen(false)}
        >
          <button
            type="button"
            aria-label="Close video"
            onClick={() => setVideoOpen(false)}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/50 text-white transition-colors hover:border-[#ffc20e] hover:text-[#ffc20e] sm:right-7 sm:top-7"
          >
            <LuX className="h-7 w-7" />
          </button>

          <div
            role="dialog"
            aria-modal="true"
            aria-label="Company video"
            className="w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <video
              src={heroVideo}
              controls
              autoPlay
              playsInline
              className="max-h-[80vh] w-full rounded-xl bg-black shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}