import React from 'react';

export function Sidebar() {
  return (
    <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] p-8">
      <img
        src="https://img001.prntscr.com/file/img001/GgT09XrCQny8oZMMqqiGHw.png"
        alt="JM Date Logo"
        className="w-32 mx-auto mb-8"
      />
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold mb-3">Note globale</h3>
        <div className="text-5xl font-bold text-pink-600">9.6</div>
      </div>

      <div className="space-y-5 mb-8">
        <div className="flex items-center text-lg justify-between px-6">
          <span>Ergonomie</span>
          <span className="font-semibold">9.4</span>
        </div>
        <div className="flex items-center text-lg justify-between px-6">
          <span>Qualité</span>
          <span className="font-semibold">9.5</span>
        </div>
        <div className="flex items-center text-lg justify-between px-6">
          <span>Communauté</span>
          <span className="font-semibold">9.6</span>
        </div>
        <div className="flex items-center text-lg justify-between px-6">
          <span>Géocalisation</span>
          <span className="font-semibold">9.7</span>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        <div className="text-center text-2xl font-bold">
          🔥 OFFRE LIMITÉE 🔥
        </div>
        <div className="text-lg text-gray-600 text-center">
          3 essais gratuits aujourd'hui
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div 
            className="bg-pink-600 h-2.5 rounded-full transition-all duration-500" 
            style={{ width: '85%' }}
          ></div>
        </div>
      </div>

      <button className="btn-primary w-full py-4 rounded-full text-lg uppercase shadow-lg hover:shadow-xl font-bold">
        🎁 JE PROFITE DE L'ESSAI GRATUIT
      </button>
    </div>
  );
}