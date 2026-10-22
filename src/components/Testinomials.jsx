
"use client";

import { useEffect, useRef, useState } from "react";
import { LuChevronRight, LuStar } from "react-icons/lu";

const reviews = [
  {
    name: "KASHIF KHAN",
    text: "Love the expertise of the team personally impressed by the quality of work Top city 1",
    color: "#C47773",
  },
  {
    name: "Haq Nawaz",
    text: "perfect team , great work keep it up ..",
    color: "#69B4C5",
  },
  {
    name: "Ch Majeed",
    text: "Best team in the town , great experience in the town",
    color: "#9165BE",
  },
  {
    name: "Mujeeb ur Rehman Khan",
    text: "Satisfied",
    color: "#B6B65C",
  },
  {
    name: "Fahad Farooq",
    text: "Five star HES Jazakallah",
    color: "#647DC0",
  },
  {
    name: "safdar rasheed",
    text: "I'm blown away by the professionalism and expertise of the team.",
    color: "#C16BA5",
  },
  {
    name: "Zimal Adnan",
    text: "Fast, friendly, and affordable! This company is the perfect choice for fence installation. Thanks for the great service!",
    color: "#68B6C7",
  },
  {
    name: "Usman Khan",
    text: "Excellent service! Their team installed my new fence quickly and efficiently. Highly recommend!",
    color: "#9DBF65",
  },
  {
    name: "Aziz Ahmad",
    text: "Electric Fence Team as well as Ggate motor team are professional",
    color: "#58BBA4",
  },
];

function GoogleIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-[19px] w-[19px] shrink-0">
      <path
        fill="#4285F4"
        d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.6c3.9-3.6 6.1-8.8 6.1-15Z"
      />
      <path
        fill="#34A853"
        d="M24 44c5.5 0 10.1-1.8 13.5-4.9l-6.6-5.1c-1.8 1.2-4.1 2-6.9 2-5.3 0-9.8-3.6-11.4-8.4H5.8v5.3A20.4 20.4 0 0 0 24 44Z"
      />
      <path
        fill="#FBBC05"
        d="M12.6 27.6a12.3 12.3 0 0 1 0-7.2v-5.3H5.8a20.3 20.3 0 0 0 0 17.8l6.8-5.3Z"
      />
      <path
        fill="#EA4335"
        d="M24 12c3 0 5.7 1 7.8 3.1l5.8-5.8C34.1 6 29.5 4 24 4A20.4 20.4 0 0 0 5.8 15.1l6.8 5.3C14.2 15.6 18.7 12 24 12Z"
      />
    </svg>
  );
}

function Avatar({ color, name }) {
  return (
    <div
      className="flex h-8 w-8 shrink-0 items-end justify-center overflow-hidden rounded-full sm:h-9 sm:w-9"
      style={{ backgroundColor: color }}
      title={name}
    >
      <svg viewBox="0 0 40 40" className="h-full w-full" fill="none">
        <circle cx="20" cy="13" r="7.5" fill="white" fillOpacity=".72" />
        <path
          d="M4 40c0-10 6.5-15 16-15s16 5 16 15"
          fill="white"
          fillOpacity=".72"
        />
      </svg>
    </div>
  );
}


function RatingAvatars() {
  const customerImages = [
    {
      image: "/unnamed-6.png",
      name: "Customer 1",
    },
    {
      image: "/unnamed.png",
      name: "Customer 2",
    },
    {
      image: "/unnamed-7.png",
      name: "Customer 3",
    },
    {
      image: "/unnamed-5.png",
      name: "Customer 4",
    },
  ];

  return (
    <div className="flex items-center justify-center pl-2">
      {customerImages.map((customer, index) => (
        <div
          key={index}
          className={`relative flex h-[80px] w-[80px] shrink-0 items-center justify-center overflow-hidden rounded-full border-[2px] border-[#F4B900] bg-[#F5F8EF] ${
            index !== 0 ? "-ml-[20px]" : ""
          }`}
          style={{
            zIndex: customerImages.length - index,
          }}
        >
          <img
            src={customer.image}
            alt={customer.name}
            title={customer.name}
            className="h-full w-full object-cover object-center"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}


export default function Testimonials() {
  const containerRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState(5);
  const [cardStep, setCardStep] = useState(0);
  const [index, setIndex] = useState(0);

  const gap = 14;
  const maxIndex = Math.max(0, reviews.length - visibleCards);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;

      if (width < 640) setVisibleCards(1);
      else if (width < 900) setVisibleCards(2);
      else if (width < 1150) setVisibleCards(3);
      else if (width < 1400) setVisibleCards(5);
      else setVisibleCards(5);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);

    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const measure = () => {
      const width = element.clientWidth;
      const cardWidth = (width - gap * (visibleCards - 1)) / visibleCards;
      setCardStep(cardWidth + gap);
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(element);

    return () => observer.disconnect();
  }, [visibleCards]);

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }, 3500);

    return () => window.clearInterval(timer);
  }, [maxIndex]);

  function next() {
    setIndex((current) => (current >= maxIndex ? 0 : current + 1));
  }

  return (
    <section
      className="w-full overflow-hidden bg-[#F5F8EF] py-[76px] sm:py-[82px] lg:min-h-[550px] lg:py-[88px]"
      aria-label="Customer reviews"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-9">
        {/* Section heading */}
        <div className="mb-[36px] flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-[720px]">
            <div className="mb-[8px] inline-flex items-center gap-2 rounded-full border border-[#D0D4C7] px-3 py-[5px] text-[12px] font-normal text-[#171717]">
              <span className="text-[#F5B900]">▤</span>
              OUR TESTIMONIALS
            </div>

            <h2 className="text-[32px] font-normal leading-[1.2] tracking-[0.2px] text-[#101010] sm:text-[38px] lg:text-[40px]">
              See What Our{" "}
              <span className="text-[#F5B900]">Clients Say</span>
            </h2>

            <p className="mt-[15px] max-w-[665px] text-[13px] leading-[1.55] text-[#687080]">
              At Hi Tech Engineering, we take pride in delivering automation
              solutions that make entry smarter, properties safer, and lives
              easier. Here’s what some of our valued clients have to say about
              their experience with our gate motor and electric fencing
              installations.
            </p>
          </div>

          {/* Right-side rating */}
          <div className="flex shrink-0 flex-col items-start lg:items-center lg:pt-2">
            <RatingAvatars />

            <div className="mt-[7px] flex items-center gap-[1px]">
              {[1, 2, 3, 4].map((star) => (
                <LuStar
                  key={star}
                  size={13}
                  fill="#F5B900"
                  color="#F5B900"
                  strokeWidth={1.5}
                />
              ))}
              <LuStar
                size={13}
                fill="#858585"
                color="#858585"
                strokeWidth={1.5}
              />
            </div>

            <p className="mt-[2px] text-[12px] text-black">
              (3,5K customer reviews)
            </p>
          </div>
        </div>

        {/* Five visible cards; one card moves on every slide */}
        <div ref={containerRef} className="relative w-full">
          <div className="overflow-hidden">
            <div
              className="flex items-stretch transition-transform duration-700 ease-in-out"
              style={{
                gap: `${gap}px`,
                transform: `translateX(-${index * cardStep}px)`,
              }}
            >
              {reviews.map((review) => (
                <article
                  key={review.name}
                  className="flex shrink-0 flex-col"
                  style={{
                    width: `calc((100% - ${
                      gap * (visibleCards - 1)
                    }px) / ${visibleCards})`,
                  }}
                >
                  <div className="min-h-[142px] flex-1 rounded-[11px] bg-[#F3F3F3] px-[15px] py-[14px] transition-colors duration-200 hover:bg-[#EEEEEE]">
                    <div className="mb-[5px] flex items-center justify-between gap-2">
                      <div className="flex items-center gap-[2px]">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <LuStar
                            key={star}
                            size={15}
                            fill="#F5B400"
                            color="#F5B400"
                            strokeWidth={1.5}
                          />
                        ))}

                        <span
                          className="ml-[3px] flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[#4285F4] text-[9px] font-bold leading-none text-white"
                          title="Verified review"
                        >
                          ✓
                        </span>
                      </div>

                      <GoogleIcon />
                    </div>

                    <p className="text-[12.5px] leading-[1.48] text-[#111111]">
                      {review.text}
                    </p>
                  </div>

                  <div className="flex min-h-[58px] items-center gap-[11px] px-[8px] pt-[10px]">
                    <Avatar color={review.color} name={review.name} />

                    <div className="min-w-0">
                      <p className="truncate text-[12px] font-bold leading-[1.35] text-[#111111] sm:text-[12.5px]">
                        {review.name}
                      </p>
                      <p className="mt-[2px] text-[10.5px] leading-[1.3] text-[#777777]">
                        1 year ago
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Same small circular next arrow as the reference */}
          <button
            type="button"
            onClick={next}
            aria-label="Next customer reviews"
            className="absolute right-[-12px] top-[40%] z-10 flex h-[29px] w-[29px] -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#777777] shadow-sm transition-colors duration-200 hover:bg-[#F5B900] hover:text-black sm:right-[-13px]"
          >
            <LuChevronRight size={19} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
