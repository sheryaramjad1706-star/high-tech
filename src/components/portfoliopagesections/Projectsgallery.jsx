
"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsGallery() {
  // ======================================
  // 1. ALL PROJECT CATEGORIES
  // ======================================

  const categories = [
    { id: "all", name: "ALL" },
    { id: "corps-house", name: "CORPS HOUSE PESHAWAR" },
    { id: "corps-hq", name: "CORPS HEADQUARTERS PESHAWAR" },
    { id: "misrial-road", name: "62 SIGNAL MISRIAL ROAD RAWALPINDI" },
    { id: "mangla", name: "MANGLA CORPS HOUSE" },
    { id: "petrosin-lahore", name: "PETROSIN PRIVATE LIMITED RAVI RIYAN LAHORE" },
    { id: "petrosin-hattar", name: "PETROSIN PRIVATE LIMITED HATTAR" },
    { id: "economic-zone", name: "PESHAWAR ECONOMIC ZONE HEADQUARTERS" },
    { id: "army-school", name: "ARMY PUBLIC SCHOOL DHA 5 ISLAMABAD" },
    { id: "telenor", name: "TELENOR MSC (ALL OVER PAKISTAN)" },
  ];

  // ======================================
  // 2. ALL 27 PROJECT IMAGES
  // ======================================
  // Replace example filenames with your
  // actual files inside the public folder.

  const projects = [
    // CORPS HOUSE PESHAWAR
    {
      id: 1,
      category: "corps-house",
      title: "Corps House Peshawar",
      image: "/WhatsApp-Image-2025-10-20-at-11.15.47_46070dfc-600x800.jpg",
    },
    {
      id: 2,
      category: "corps-house",
      title: "Corps House Peshawar",
      image: "/WhatsApp-Image-2025-10-20-at-11.15.47_9e5cbb4e-575x1024.jpg",
    },
     // CORPS HEADQUARTERS PESHAWAR
    {
      id: 3,
       category: "corps-hq",
      title: "Corps Headquarters Peshawar",
      image: "/WhatsApp-Image-2025-10-20-at-11.18.25_3a05166d-600x800.jpg",
    },

   
    {
      id: 4,
      category: "corps-hq",
      title: "Corps Headquarters Peshawar",
      image: "/WhatsApp-Image-2025-10-20-at-11.18.25_f0b07f42-600x800.jpg",
    },
    {
      id: 5,
      category: "corps-hq",
      title: "Corps Headquarters Peshawar",
      image: "/WhatsApp-Image-2025-10-20-at-11.18.26_d2fcea91-600x800.jpg",
    },
    {
      id: 6,
      category: "corps-hq",
      title: "Corps Headquarters Peshawar",
      image: "/WhatsApp-Image-2025-10-20-at-11.18.25_f0b07f42-600x800.jpg",
    },

    // 62 SIGNAL MISRIAL ROAD
    {
      id: 7,
      category: "misrial-road",
      title: "62 Signal Misrial Road Rawalpindi",
      image: "/WhatsApp-Image-2025-10-20-at-11.21.11_3c1235ee-600x800.jpg",
    },
    {
      id: 8,
      category: "misrial-road",
      title: "62 Signal Misrial Road Rawalpindi",
      image: "/WhatsApp-Image-2025-10-20-at-11.21.12_7cfac4fe-600x800.jpg",
    },
    {
      id: 9,
      category: "misrial-road",
      title: "62 Signal Misrial Road Rawalpindi",
      image: "/WhatsApp-Image-2025-10-20-at-11.21.12_25c2e040-600x800.jpg",
    },
    {
      id: 10,
      category: "misrial-road",
      title: "62 Signal Misrial Road Rawalpindi",
      image: "/WhatsApp-Image-2025-10-20-at-11.21.17_12c0eb24-600x800.jpg",
    },
    // MANGLA CORPS HOUSE
    {
      id: 11,
      category: "mangla",
      title: "Mangla Corps House",
      image: "/WhatsApp-Image-2025-10-20-at-11.38.15_56d00caf-600x800.jpg",
    },
    {
      id: 12,
      category: "mangla",
      title: "Mangla Corps House",
      image: "/WhatsApp-Image-2025-10-20-at-11.38.16_b41edc79-600x800.jpg",
    },

    
    {
      id: 13,
      category: "mangla",
      title: "Mangla Corps House",
      image: "/WhatsApp-Image-2025-10-20-at-11.38.16_9f44eb3f-600x800.jpg",
    },
    // PETROSIN LAHORE
    {
      id: 14,
      category: "petrosin-lahore",
      title: "Petrosin Private Limited Ravi Riyan Lahore",
      image: "/WhatsApp-Image-2025-10-20-at-11.42.24_9c7f2477-600x800.jpg",
    },
    {
      id: 15,
      category: "petrosin-lahore",
      title: "Petrosin Private Limited Ravi Riyan Lahore",
      image: "/WhatsApp-Image-2025-10-20-at-11.42.24_68d54543-600x800.jpg",
    },

   
    {
      id: 16,
       category: "petrosin-lahore",
      title: "Petrosin Private Limited Ravi Riyan Lahore",
      image: "/WhatsApp-Image-2025-10-20-at-11.42.25_50481ba5-576x1024.jpg",
    },
     // PETROSIN HATTAR
    {
      id: 17,
      category: "petrosin-hattar",
      title: "Petrosin Private Limited Hattar",
      image: "/WhatsApp-Image-2025-10-20-at-11.43.58_b2882614-600x800.jpg",
    },
    {
      id: 18,
      category: "petrosin-hattar",
      title: "Petrosin Private Limited Hattar",
      image: "/WhatsApp-Image-2025-10-20-at-11.43.59_5ffc0052-600x800.jpg",
    },

    
    {
      id: 19,
       category: "petrosin-hattar",
      title: "Petrosin Private Limited Hattar",
      image: "/WhatsApp-Image-2025-10-20-at-11.43.59_8df80656-600x800.jpg",
    },

    // PESHAWAR ECONOMIC ZONE
    {
      id: 20,
      category: "economic-zone",
      title: "Peshawar Economic Zone Headquarters",
      image: "/WhatsApp-Image-2025-10-20-at-11.46.56_7d399603-600x800.jpg",
    },
    {
      id: 21,
      category: "economic-zone",
      title: "Peshawar Economic Zone Headquarters",
      image: "/WhatsApp-Image-2025-10-20-at-11.46.57_79bd6d31-600x800.jpg",
    },

      // ARMY PUBLIC SCHOOL
    {
      id: 22,
      category: "army-school",
      title: "Army Public School DHA 5 Islamabad",
      image: "/WhatsApp-Image-2025-10-20-at-11.49.08_047a7ecb-600x450.jpg",
    },
    {
      id: 23,
      category: "army-school",
      title: "Army Public School DHA 5 Islamabad",
      image: "/WhatsApp-Image-2025-10-20-at-11.49.08_4957b7f3-600x450.jpg",
    },
  
    {
      id: 24,
      category: "army-school",
      title: "Army Public School DHA 5 Islamabad",
      image: "/WhatsApp-Image-2025-10-20-at-11.49.09_2cd76c93-600x800.jpg",
    },

    // TELENOR MSC
    {
      id: 25,
      category: "telenor",
      title: "Telenor MSC (All Over Pakistan)",
      image: "/WhatsApp-Image-2025-10-20-at-11.52.33_1a4ab50a-600x800.jpg",
    },
    {
      id: 26,
      category: "telenor",
      title: "Telenor MSC (All Over Pakistan)",
      image: "/WhatsApp-Image-2025-10-20-at-11.52.46_98682a4d-600x800.jpg",
    },
    {
      id: 27,
      category: "telenor",
      title: "Telenor MSC (All Over Pakistan)",
      image: "/WhatsApp-Image-2025-10-20-at-11.52.46_ac16e342-576x1024.jpg",
    },
  ];

  // ======================================
  // 3. CATEGORY FILTERING
  // ======================================

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  // ======================================
  // 4. GALLERY DESIGN
  // ======================================

  return (
    <section className="w-full bg-white py-10 md:py-14">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">

        {/* CATEGORY FILTER */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              aria-pressed={activeCategory === category.id}
              className={`px-4 py-3 text-[12px] font-medium uppercase tracking-[0.4px] transition-all duration-300 sm:text-[13px] ${
                activeCategory === category.id
                  ? "bg-[#333333] text-white"
                  : "bg-transparent text-[#333333] hover:bg-[#333333] hover:text-white"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* PROJECT CARDS */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {filteredProjects.map((project) => (
            <article
              key={project.id}
              tabIndex={0}
              className="group relative h-[260px] overflow-hidden bg-[#eaeaea] outline-none sm:h-[290px] lg:h-[328px]"
            >
              {/* IMAGE */}
              <Image
                src={project.image}
                alt={`${project.title} - Image ${project.id}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110 group-focus:scale-110"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/65 group-focus:bg-black/65" />

              {/* PROJECT TITLE */}
              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-5 text-center opacity-0 transition-all duration-500 group-hover:opacity-100 group-focus:opacity-100">

                <h3 className="translate-y-4 text-[22px] font-semibold leading-tight text-white transition-transform duration-500 group-hover:translate-y-0 group-focus:translate-y-0 sm:text-[26px]">
                  {project.title}
                </h3>

                <span className="mt-4 h-[3px] w-0 bg-[#fac609] transition-all duration-500 group-hover:w-[65px] group-focus:w-[65px]" />

                <ArrowUpRight
                  size={25}
                  className="mt-4 text-[#fac609]"
                />
              </div>
            </article>
          ))}
        </div>

        {/* IMAGE COUNT */}
        <p className="mt-7 text-center text-sm text-[#777]">
          Showing {filteredProjects.length} of {projects.length} images
        </p>

      </div>
    </section>
  );
}
