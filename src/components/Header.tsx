import React from 'react';

export function Header() {
  return (
    <header className="bg-[#111827] shadow-md w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-center lg:justify-between items-center">
        <img 
          src="https://wend.fr/todelete/logo-dialrencontre.png"
          alt="DIAL RENCONTRE"
          className="h-8"
        />
        <button className="btn-primary px-8 py-2 rounded-full text-lg uppercase hidden lg:block">
          INSCRIPTION GRATUITE
        </button>
      </div>
    </header>
  );
}