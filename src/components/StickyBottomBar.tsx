import React from 'react';
import { Timer } from 'lucide-react';

export function StickyBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-pink-600 border-t border-pink-700 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 lg:hidden">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-white">
            <Timer className="w-5 h-5" />
            <span className="font-medium">
              3 essais gratuits restants aujourd'hui
            </span>
          </div>
          <button className="bg-white text-pink-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-full text-base uppercase whitespace-nowrap w-full sm:w-auto font-bold transition-colors duration-200">
            🎁 J'EN PROFITE MAINTENANT
          </button>
        </div>
      </div>
    </div>
  );
}