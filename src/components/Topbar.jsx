
const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-[13px] w-[13px] shrink-0"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-[13px] w-[13px] shrink-0"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[14px] w-[14px]">
    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.4Z" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[14px] w-[14px]">
    <path d="M19.6 7.1a6.7 6.7 0 0 1-4.1-1.4v8.1a5.7 5.7 0 1 1-5-5.7v3.3a2.5 2.5 0 1 0 1.7 2.4V2.5h3.3c.2 2.1 1.9 3.8 4.1 4v.6Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-[14px] w-[14px]">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
  </svg>
);

export default function TopBar() {
  return (
    <div className="w-full bg-[#ffc20e] text-white">
      <div className="mx-auto flex min-h-[40px] max-w-[1200px] flex-col items-center justify-between gap-2 px-4 py-2 sm:flex-row sm:gap-3 sm:px-5 sm:py-0 lg:px-0">

        {/* Left side: Support and emergency number */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:justify-start sm:gap-x-4">
          <a
            href="tel:03339129936"
            className="inline-flex items-center gap-[6px] whitespace-nowrap text-[11px] font-medium sm:text-[12px] lg:text-[13px]"
          >
            <ClockIcon />
            <span>Available 24/7 Support</span>
          </a>

          <a
            href="tel:03339129936"
            className="inline-flex items-center gap-[6px] whitespace-nowrap text-[11px] font-medium sm:text-[12px] lg:text-[13px]"
          >
            <PhoneIcon />
            <span>Emergency Line: 0333-9129936</span>
          </a>
        </div>

        {/* Right side: Social media */}
        <div className="flex items-center justify-center gap-4 sm:justify-end sm:gap-5">
          <span className="whitespace-nowrap text-[11px] font-medium sm:text-[12px] lg:text-[13px]">
            Follow Us -
          </span>

          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/hightechengineeringsolution?mibextid=wwXIfr&rdid=NjkzpU0Pm3U6ulMp&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17Ugo8F4jX%2F%3Fmibextid%3DwwXIfr#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="transition-opacity hover:opacity-70"
            >
              <FacebookIcon />
            </a>

            <a
              href="https://www.instagram.com/hes_electric_fencing?igsh=azZ0dTdnZGRtYW5w&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="transition-opacity hover:opacity-70"
            >
              <TikTokIcon />
            </a>

            <a
              href="https://www.tiktok.com/@umair5163?_t=ZS-90XPTsM9YIL&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-opacity hover:opacity-70"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
