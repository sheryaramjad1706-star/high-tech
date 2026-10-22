
"use client";

import { LuFacebook, LuTwitter, LuYoutube, LuArrowUpRight } from "react-icons/lu";

const teamMembers = [
  {
    name: "Muhammad Umair Tahir",
    role: "Chairman",
    image: "/2-1024x1024.png",
    facebook: "#",
    twitter: "#",
    youtube: "#",
  },
  {
    name: "Sheraz Ashraf",
    role: "General Manager",
    image: "/1-1-1024x1024.png",
    facebook: "#",
    twitter: "#",
    youtube: "#",
  },
  {
    name: "Osama",
    role: "Sales Manager",
    image: "/3-1-1024x1024.png",
    facebook: "#",
    twitter: "#",
    youtube: "#",
  },
  {
    name: "Mr Ali",
    role: "Supervisor",
    image: "/6-1024x1024.png",
    facebook: "#",
    twitter: "#",
    youtube: "#",
  },
];

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ffc20e] text-white shadow-sm transition-all duration-300 hover:scale-110 hover:bg-black hover:text-white"
    >
      {children}
    </a>
  );
}

export default function OurTeam() {
  return (
    <section
      id="team"
      className="w-full overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-[1180px] xl:max-w-[1240px]">

        {/* HEADER */}
        <div className="mb-12 grid grid-cols-1 items-start gap-8 md:grid-cols-[1.15fr_0.85fr] lg:mb-16 lg:gap-16">

          {/* LEFT CONTENT */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d5d5d5] bg-white px-4 py-1.5">
              <span className="text-[12px] text-[#ffc20e]">▦</span>
              <span className="text-[12px] font-medium tracking-[0.4px] text-[#222]">
                OUR TEAM
              </span>
            </div>

            <h2 className="max-w-[650px] text-[34px] font-normal leading-[1.18] tracking-[0.1px] text-[#111] sm:text-[42px] lg:text-[44px]">
              Dedicated Professionals For{" "}
              <span className="text-[#ffc20e]">
                Automation &amp; Security Excellence
              </span>
            </h2>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col items-start md:pt-1">
            <p className="text-[14px] leading-[1.75] tracking-[0.1px] text-[#70777a] sm:text-[14px]">
              Our experienced engineers, technicians, and support staff work
              together to bring you cutting-edge gate automation and electric
              fencing solutions. Each project we undertake is backed by
              technical precision, customer focus, and industry-standard
              practices. Whether it’s a small residential gate or a large
              industrial setup, our team ensures seamless performance and
              top-notch safety.
            </p>

            <a
              href="#team-members"
              className="group mt-6 inline-flex min-h-[46px] items-center gap-3 rounded-full bg-[#ffc20e] px-6 py-3 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:shadow-[0_8px_20px_rgba(0,0,0,0.16)]"
            >
              <span>View All</span>
              <LuArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        {/* TEAM MEMBER CARDS */}
        <div
          id="team-members"
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3"
        >
          {teamMembers.map((member, index) => (
            <article
              key={member.name}
              style={{ animationDelay: `${index * 120}ms` }}
              className="team-card group overflow-hidden rounded-[10px] border border-[#cecec7] bg-white transition-all duration-300 hover:-translate-y-2 hover:border-[#ffc20e] hover:shadow-[0_12px_28px_rgba(0,0,0,0.09)]"
            >
              {/* IMAGE AREA */}
              <div className="relative h-[260px] overflow-hidden bg-[#f3f7ed] sm:h-[280px] lg:h-[285px]">

                {/* Decorative fallback background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    viewBox="0 0 300 280"
                    className="h-full w-full"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M150 280C144 220 80 185 20 125C10 190 50 255 150 280Z"
                      fill="white"
                    />
                    <path
                      d="M150 280C160 210 230 155 280 115C295 205 240 265 150 280Z"
                      fill="white"
                    />
                    <path
                      d="M150 280C130 215 85 165 35 130C105 155 155 200 150 280Z"
                      fill="#f3f7ed"
                    />
                    <path
                      d="M150 280C170 220 220 170 270 125C230 185 195 235 150 280Z"
                      fill="#f3f7ed"
                    />
                  </svg>
                </div>

                {/* Replace image paths with your actual team photos */}
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                  className="absolute inset-0 z-[1] h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                {/* SOCIAL ICONS */}
                <div className="absolute right-5 top-5 z-[2] flex flex-col gap-2">
                  <SocialLink href={member.facebook} label={`${member.name} Facebook`}>
                    <LuFacebook className="h-4 w-4" />
                  </SocialLink>

                  <SocialLink href={member.twitter} label={`${member.name} Twitter`}>
                    <LuTwitter className="h-4 w-4" />
                  </SocialLink>

                  <SocialLink href={member.youtube} label={`${member.name} YouTube`}>
                    <LuYoutube className="h-4 w-4" />
                  </SocialLink>
                </div>
              </div>

              {/* MEMBER DETAILS */}
              <div className="relative z-[3] min-h-[94px] rounded-t-[10px] bg-white px-4 py-4 transition-colors duration-300 group-hover:bg-[#fffdf5]">
                <h3 className="text-[19px] font-medium leading-[1.35] tracking-[0.1px] text-[#111] sm:text-[20px]">
                  {member.name}
                </h3>

                <p className="mt-2 text-[13px] font-medium text-[#333]">
                  {member.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ENTRY ANIMATION */}
      <style jsx>{`
        .team-card {
          animation: teamFadeUp 0.65s ease-out both;
        }

        @keyframes teamFadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .team-card {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
