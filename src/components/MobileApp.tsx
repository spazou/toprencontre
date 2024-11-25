import React from 'react';
import { Search, Zap, Activity, Smartphone, MapPin } from 'lucide-react';

export function MobileApp() {
  return (
    <div className="mb-12">
      <h2 className="text-4xl font-bold text-center mb-12">Des outils puissants pour des connexions directes</h2>
      <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
        <img
          src="https://wend.fr/todelete/screendialr.png"
          alt="Application mobile"
          className="rounded-xl w-full md:w-1/2"
        />
        <div className="space-y-8 w-full md:w-1/2">
          <div>
            <h3 className="font-semibold text-3xl mb-2 flex items-center gap-4">
              <Smartphone className="w-12 h-12 text-pink-600 flex-shrink-0" />
              Application Mobile
            </h3>
            <p className="text-gray-600 text-xl">Profitez d'une expérience fluide grâce à une application mobile optimisée.</p>
          </div>
          <div>
            <h3 className="font-semibold text-3xl mb-2 flex items-center gap-4">
              <Search className="w-12 h-12 text-pink-600 flex-shrink-0" />
              Recherche avancée
            </h3>
            <p className="text-gray-600 text-xl">Affinez vos critères pour des rencontres sur mesure.</p>
          </div>
          <div>
            <h3 className="font-semibold text-3xl mb-2 flex items-center gap-4">
              <Zap className="w-12 h-12 text-pink-600 flex-shrink-0" />
              Speedflirt et Swipe
            </h3>
            <p className="text-gray-600 text-xl">Multipliez les connexions en un clin d'œil.</p>
          </div>
          <div>
            <h3 className="font-semibold text-3xl mb-2 flex items-center gap-4">
              <Activity className="w-12 h-12 text-pink-600 flex-shrink-0" />
              Fil d'actualité
            </h3>
            <p className="text-gray-600 text-xl">Partagez et découvrez plus avec vos matches.</p>
          </div>
          <div>
            <h3 className="font-semibold text-3xl mb-2 flex items-center gap-4">
              <MapPin className="w-12 h-12 text-pink-600 flex-shrink-0" />
              Localisation performante
            </h3>
            <p className="text-gray-600 text-xl">Connectez-vous facilement avec des libertines près de chez vous.</p>
          </div>
        </div>
      </div>
    </div>
  );
}