import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-[#b3b3b3] font-sans pt-16 pb-8 border-t border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12">
          
          {/* Column 1: About & Info */}
          <div className="lg:col-span-5 pr-0 lg:pr-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-7 bg-yellow-500 inline-block rounded-sm"></span>
            </div>
            
            {/* Font size slightly increased (15.5px) */}
            <p className="text-[#a0a0a0] text-[15.5px] leading-relaxed mb-8 font-normal">
              Hi Tech Engineering provides advanced gate automation and electric fencing solutions designed for safety, convenience, and reliability. From residential security to industrial automation, we deliver professional installation, maintenance, and support services you can trust.
            </p>

            {/* Social Icons (Slightly Larger w-10 h-10) */}
            <div className="flex items-center gap-3.5">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/hightechengineeringsolution?mibextid=wwXIfr&rdid=NjkzpU0Pm3U6ulMp&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17Ugo8F4jX%2F%3Fmibextid%3DwwXIfr#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-[#facc15] text-[#121212] flex items-center justify-center hover:bg-yellow-400 hover:text-black hover:scale-110 transition-all duration-300 shadow-md"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/hes_electric_fencing?igsh=azZ0dTdnZGRtYW5w&utm_source=qr"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[#facc15] text-[#121212] flex items-center justify-center hover:bg-yellow-400 hover:text-black hover:scale-110 transition-all duration-300 shadow-md"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@umair5163?_t=ZS-90XPTsM9YIL&_r=1"
                aria-label="TikTok"
                className="w-10 h-10 rounded-full bg-[#facc15] text-[#121212] flex items-center justify-center hover:bg-yellow-400 hover:text-black hover:scale-110 transition-all duration-300 shadow-md"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.56-1.31 1.56-1.32 2.56-.01.8.31 1.6.89 2.15.65.6 1.57.88 2.45.8 1.15-.05 2.19-.73 2.66-1.78.33-.7.42-1.5.41-2.27V.02z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Main Pages */}
          <div className="lg:col-span-2">
            {/* Header font size increased (19px) */}
            <h3 className="text-white text-[19px] font-bold mb-6 tracking-tight">Main Pages</h3>
            {/* List text size increased to text-base (16px) */}
            <ul className="space-y-4 text-base">
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 hover:text-yellow-400 transition-colors duration-200"
                >
                  <span className="text-sm text-yellow-500 transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200">
                    ↗
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Gate Motor
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 hover:text-yellow-400 transition-colors duration-200"
                >
                  <span className="text-sm text-yellow-500 transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200">
                    ↗
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Our Blog
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 hover:text-yellow-400 transition-colors duration-200"
                >
                  <span className="text-sm text-yellow-500 transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200">
                    ↗
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Contact
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-[19px] font-bold mb-6 tracking-tight">Useful Links</h3>
            <ul className="space-y-4 text-base">
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 hover:text-yellow-400 transition-colors duration-200"
                >
                  <span className="text-sm text-yellow-500 transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200">
                    ↗
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Sliding Gate Motors
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 hover:text-yellow-400 transition-colors duration-200"
                >
                  <span className="text-sm text-yellow-500 transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200">
                    ↗
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Swing Gate Motors
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 hover:text-yellow-400 transition-colors duration-200"
                >
                  <span className="text-sm text-yellow-500 transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200">
                    ↗
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Electric Fence
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Now */}
          <div className="lg:col-span-3">
            <h3 className="text-white text-[19px] font-bold mb-6 tracking-tight">Contact Now</h3>
            
            {/* Text size increased to text-sm */}
            <div className="space-y-4 text-sm font-medium">
              {/* Email */}
              <div className="flex items-center gap-3 pb-3 border-b border-zinc-800">
                <svg className="w-5 h-5 text-yellow-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:htechesolutions@gmail.com" className="text-white hover:text-yellow-400 transition-colors">
                  htechesolutions@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 pb-3 border-b border-zinc-800">
                <svg className="w-5 h-5 text-yellow-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:03339129936" className="text-white hover:text-yellow-400 transition-colors">
                  0333-9129936
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 pt-1">
                <svg className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-[#a0a0a0] leading-relaxed">
                  Office No. 9, First Floor, New Commercial Plaza, Main East Avenue, Fazaia Housing Scheme, Tarnol Islamabad
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-zinc-800/80 text-center text-sm text-[#a0a0a0]">
          <p>
            © 2025 High Tech Engineering. All Rights Reserved | Powered by Oxmite Digital LTD
          </p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/923339129936"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-[#25d366] text-white p-4 rounded-full shadow-lg hover:bg-[#20ba5a] hover:scale-110 transition-all duration-300 animate-bounce"
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.205 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>
    </footer>
  );
}