import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[450px] md:min-h-[500px] flex items-center justify-center overflow-hidden bg-black text-white">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          // Apni background image ka path yahan replace karein
          backgroundImage: "url('/your-background-image.jpg')", 
        }}
      />

      {/* Dark Overlay for contrast */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Yellow Radial Glow from Top */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(234, 179, 8, 0.45) 0%, rgba(0, 0, 0, 0) 70%)',
        }}
      />

      {/* Content Container */}
      <div className="relative z-30 max-w-4xl mx-auto px-4 text-center flex flex-col items-center justify-center">
        
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-bold tracking-tight text-white mb-4 drop-shadow-md">
          Electric Fence
        </h1>

        {/* Subtitle Text */}
        <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl font-normal leading-relaxed mb-8">
          Secure your home or business with our advanced electric fencing
          systems — built for strength, safety, and lasting performance.
        </p>

        {/* Breadcrumb / Navigation Badge */}
        <div className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-white/30 bg-black/30 backdrop-blur-sm text-xs sm:text-sm font-semibold tracking-wider text-white uppercase space-x-2.5 transition hover:border-yellow-500/50">
          
          {/* Home Icon */}
          <Link href="/" className="inline-flex items-center text-yellow-500 hover:text-yellow-400">
            <svg 
              className="w-4 h-4 mr-1.5 fill-current" 
              viewBox="0 0 24 24"
            >
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
            <span className="text-white hover:text-yellow-400">HOME</span>
          </Link>

          <span className="text-gray-400 font-normal">/</span>

          {/* Projects Link */}
          <Link href="/projects" className="text-white hover:text-yellow-400 transition-colors">
            PROJECTS
          </Link>
        </div>

      </div>
    </section>
  );
}