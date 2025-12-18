import React from 'react';
import { ChevronLeft, ChevronRight, Zap, TrendingUp, Layout, Database, Plus, Minus, X } from 'lucide-react';

export const CaseStudy: React.FC = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 block">Case Studies</span>
        <h2 className="text-4xl md:text-5xl font-sans font-light text-white mx-auto max-w-3xl">
          See How Smart AI Automation Transforms Businesses
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Visual: Abstract Control Interface */}
        <div className="relative aspect-square w-full bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center shadow-2xl">
             {/* Gradient Shine */}
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]"></div>
             
             {/* Central Knob UI Illustration */}
             <div className="relative w-64 h-64 rounded-full border border-white/10 flex items-center justify-center bg-black/20 backdrop-blur-md shadow-2xl">
                <div className="absolute inset-0 rounded-full border border-white/5 scale-125 opacity-30"></div>
                <div className="absolute inset-0 rounded-full border border-white/5 scale-150 opacity-10"></div>
                
                {/* Icons around circle */}
                <div className="absolute top-1/2 left-4 -translate-y-1/2 p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/5"><div className="w-2 h-2 bg-gray-400 rounded-full"></div></div>
                <div className="absolute top-1/2 right-4 -translate-y-1/2 p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/5"><X size={12} className="text-gray-400" /></div>

                {/* Center Button */}
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-lg border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-shadow cursor-pointer">
                   <Plus size={24} className="text-white" />
                </div>

                {/* Floating labels */}
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10 shadow-lg">
                   <Minus size={16} className="text-gray-400" />
                </div>
             </div>
        </div>

        {/* Right Content */}
        <div className="space-y-10">
          <div>
            <h3 className="text-2xl md:text-3xl font-sans font-light text-white mb-6 leading-tight">
              "AI-driven forecasting cut inventory waste by 40% for TrailForge"
            </h3>
            <p className="text-gray-400 leading-relaxed mb-8 text-sm">
              ScaleByte's sales team struggled with follow-up delays. Our AI sales assistant automated outreach, lead scoring, and CRM updates—resulting in faster responses and more closed deals.
            </p>
            
            <div className="flex gap-4">
              <button className="p-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <ChevronLeft size={20} />
              </button>
              <button className="p-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded bg-white/5 backdrop-blur-sm border border-white/5 text-white"><Zap size={16} /></div>
              <span className="text-gray-300 text-xs tracking-wide">3x More Deals</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded bg-white/5 backdrop-blur-sm border border-white/5 text-white"><TrendingUp size={16} /></div>
              <span className="text-gray-300 text-xs tracking-wide">40% Faster Responses</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded bg-white/5 backdrop-blur-sm border border-white/5 text-white"><Layout size={16} /></div>
              <span className="text-gray-300 text-xs tracking-wide">95% Lead Accuracy</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded bg-white/5 backdrop-blur-sm border border-white/5 text-white"><Database size={16} /></div>
              <span className="text-gray-300 text-xs tracking-wide">CRM Fully Synced</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};