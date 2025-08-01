import React from 'react';
import { FileText, Users, TrendingUp, Building2 } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: "Organize Case Documents Effortlessly",
    description: "Smart document management with AI-powered categorization and instant search capabilities."
  },
  {
    icon: Users,
    title: "Streamline Client Communication & Payments",
    description: "Integrated client portal with secure messaging, billing, and payment processing."
  },
  {
    icon: TrendingUp,
    title: "Track Earnings, Schedules & Team Progress",
    description: "Real-time analytics and reporting for better business insights and team coordination."
  },
  {
    icon: Building2,
    title: "Manage All Offices in Real-Time, Seamlessly",
    description: "Centralized platform for multi-location firms with unified workflows and data."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;