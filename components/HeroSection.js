'use client'
import React from 'react';

const HeroSection = () => {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    waitlistSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Reimagining Law Firm
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Operations.
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Paperwork is your all-in-one operating system for law firms. From document and client management to payments and internal workflows — built for speed, security, and scale.
        </p>
        
        <button
          onClick={scrollToWaitlist}
          className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg hover:from-blue-700 hover:to-purple-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Join the Waitlist
        </button>
      </div>
    </section>
  );
};

export default HeroSection;