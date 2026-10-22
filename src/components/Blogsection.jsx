
"use client";

import { LuArrowUpRight } from "react-icons/lu";

const blogPosts = [
  {
    title: "Secure Your Home: Why Professional Gate...",
    description:
      "In an age of smart technology and rising security concerns, automatic gate...",
    href: "/",
  },
  {
    title: "Why Electric Fences Are Your Best...",
    description:
      "In today’s fast-paced world, security has become more than just a need...",
    href: "/",
  },
];

export default function BlogSection() {
  return (
    <section className="w-full bg-white py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        {/* Heading and button */}
        <div className="mb-8 flex flex-col items-start justify-between gap-5 sm:mb-9 sm:flex-row sm:items-center md:mb-10">
          <div className="min-w-0">
            <div className="mb-2 inline-flex h-[27px] items-center gap-[7px] rounded-full border border-[#D6D3D3] px-3 text-xs font-normal leading-none text-[#111111]">
              <span className="text-[13px] text-[#F5B900]">▤</span>
              OUR BLOG
            </div>

            <h2 className="text-[29px] font-normal leading-tight tracking-[0.2px] text-[#080808] sm:text-[34px] md:text-[38px] lg:text-[40px]">
              Latest Post{" "}
              <span className="text-[#F5B900]">The Blog</span>
            </h2>
          </div>

          <a
            href="/"
            className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-[#F8C20B] px-5 text-[13px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E8AE00] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B900] focus-visible:ring-offset-2"
          >
            Visit Blog
            <LuArrowUpRight size={17} strokeWidth={1.7} />
          </a>
        </div>

        {/* Responsive blog cards */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:gap-7 xl:gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="group flex min-h-[185px] min-w-0 flex-col rounded-xl border border-[#D4D0D0] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#F5B900] hover:shadow-[0_8px_25px_rgba(0,0,0,0.05)] sm:min-h-[195px] sm:p-6 md:min-h-[205px] md:p-6 lg:min-h-[220px] lg:p-7"
            >
              <h3 className="line-clamp-2 text-[17px] font-medium leading-[1.5] tracking-[0.1px] text-[#090909] sm:text-[18px] lg:text-[19px]">
                {post.title}
              </h3>

              <p className="mt-3 line-clamp-2 text-[12px] font-normal leading-[1.7] tracking-[0.05px] text-[#777777] sm:mt-4 sm:text-[13px]">
                {post.description}
              </p>

              <a
                href={post.href}
                className="mt-auto inline-flex w-fit items-center gap-1 pt-5 text-[16px] font-normal text-[#080808] transition-colors duration-200 hover:text-[#E6AD00] sm:text-[17px]"
              >
                Learn More
                <LuArrowUpRight
                  size={19}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
