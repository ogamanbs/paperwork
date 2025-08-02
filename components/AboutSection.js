import React from 'react';

const AboutSection = () => {
  return (
    <section className="h-[50vh] py-16 bg-slate-950 flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
          Built for Modern Law Firms
        </h2>
        <p className="text-xl text-slate-300 leading-relaxed text-center">
          Launching soon with top-tier firms.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;