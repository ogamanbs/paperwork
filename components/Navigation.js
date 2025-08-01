import React from 'react';
import { Scale } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-sm border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-semibold text-white">Paperwork</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;