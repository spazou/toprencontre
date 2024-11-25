import React, { useState, lazy, Suspense } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProfileCard } from './components/ProfileCard';
import { VideoPreview } from './components/VideoPreview';

const FAQ = lazy(() => import('./components/FAQ').then(module => ({ default: module.FAQ })));
const MobileApp = lazy(() => import('./components/MobileApp').then(module => ({ default: module.MobileApp })));
const Sidebar = lazy(() => import('./components/Sidebar').then(module => ({ default: module.Sidebar })));
const StickyBottomBar = lazy(() => import('./components/StickyBottomBar').then(module => ({ default: module.StickyBottomBar })));

const questions = [
  {
    question: "Est-ce que JM-Date est gratuit ?",
    answer: "Oui, l'inscription sur JM-Date est entièrement gratuite et sans frais cachés. Une fois inscrit, vous pouvez créer votre profil, explorer ceux d'autres membres et accéder à des fonctionnalités de base. Pour une expérience encore plus complète, l'offre d'essai abordable vous permet de découvrir les fonctionnalités premium, comme le tchat illimité et les webcams. C'est une option idéale pour tester le site sans engagement et vérifier s'il répond à vos attentes."
  },
  {
    question: "Comment fonctionne le swipe sur JM-Date ?",
    answer: "Le swipe, popularisé par des plateformes comme Tinder, est une fonctionnalité clé de JM-Date. Une fois votre géolocalisation renseignée, vous pouvez parcourir les profils situés à proximité (20, 30 ou 50 km). Si un profil vous plaît, un simple glissement vers la droite indique votre intérêt. Si l'autre personne manifeste également son intérêt, un « match » se crée, vous permettant de débuter une conversation instantanément. Ce système facilite des rencontres rapides et pertinentes."
  },
  {
    question: "Peut-on se connecter à JM-Date depuis un mobile ?",
    answer: "Absolument. JM-Date est entièrement responsive, ce qui signifie qu'il s'adapte parfaitement à tous les types d'écrans, que ce soit sur smartphone, tablette ou ordinateur. Aucune application supplémentaire n'est nécessaire : vous pouvez accéder à toutes les fonctionnalités directement depuis votre navigateur pour une expérience utilisateur optimale."
  },
  {
    question: "Les profils sont-ils authentiques ?",
    answer: "La vérification des profils est une priorité pour JM-Date. Chaque compte est soumis à un contrôle rigoureux afin de garantir l'authenticité des membres. L'équipe de modération s'assure également de supprimer rapidement les faux profils signalés. Cela permet de maintenir un environnement fiable et respectueux où chaque interaction repose sur la confiance et la transparence."
  },
  {
    question: "Quels types de relations peut-on rechercher sur JM-Date ?",
    answer: "JM-Date répond à une grande variété de besoins : rencontres légères, aventures libertines, relations sérieuses ou simples discussions sans engagement. Avec le système de badges, chaque utilisateur peut préciser ses intentions de manière claire, ce qui simplifie les recherches et améliore la compatibilité entre les membres, qu'ils soient célibataires ou en couple."
  },
  {
    question: "Puis-je choisir qui voit mon profil ?",
    answer: "Oui, JM-Date respecte votre vie privée et vous permet de configurer vos paramètres de confidentialité. Vous pouvez restreindre l'accès à vos informations personnelles et photos, par exemple en rendant vos albums visibles uniquement aux personnes avec qui vous avez établi une connexion. Cette fonctionnalité garantit une expérience sécurisée et adaptée à vos besoins."
  },
  {
    question: "Que se passe-t-il à la fin de l'offre d'essai ?",
    answer: "À la fin de l'offre d'essai, vous pouvez choisir de souscrire à un abonnement payant ou de ne rien faire. Dans ce dernier cas, votre compte sera automatiquement basculé vers un accès gratuit, sans engagement. Cette flexibilité vous permet de tester les fonctionnalités premium sans risque."
  },
  {
    question: "JM-Date est-il sécurisé ?",
    answer: "La sécurité et la confidentialité sont au cœur des préoccupations de JM-Date. Vos données personnelles sont protégées par des systèmes de sécurité avancés, et des outils de signalement sont disponibles pour signaler les comportements inappropriés ou les profils douteux. JM-Date garantit un espace respectueux et sûr, conforme aux conditions générales d'utilisation."
  },
  {
    question: "Pourquoi choisir JM-Date par rapport à d'autres sites de rencontre ?",
    answer: "JM-Date se distingue par son accessibilité, sa communauté active et ses fonctionnalités modernes, comme le swipe et la géolocalisation. Contrairement à d'autres plateformes, JM-Date vérifie les profils et offre un espace sûr et respectueux, composé majoritairement de profils authentiques. Que vous recherchiez une connexion légère ou une relation sérieuse, JM-Date s'adapte à toutes vos envies."
  },
  {
    question: "Peut-on utiliser JM-Date dans des petites villes ou zones rurales ?",
    answer: "Oui, grâce à son système de géolocalisation, JM-Date identifie les profils proches, même dans des zones moins peuplées. Avec de nouvelles inscriptions chaque jour, la diversité des profils continue de s'enrichir, offrant ainsi des opportunités de rencontre où que vous soyez."
  }
];

const topProfiles = [
  { name: 'Sophie', age: 28, city: 'Paris', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&q=60' },
  { name: 'Julie', age: 24, city: 'Lyon', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&q=60' },
  { name: 'Marie', age: 26, city: 'Marseille', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&q=60' },
  { name: 'Claire', age: 29, city: 'Bordeaux', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&q=60' }
];

const firstProfiles = [
  { name: 'Emma', age: 25, city: 'Nice', image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&q=60' },
  { name: 'Laura', age: 27, city: 'Toulouse', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=300&q=60' },
  { name: 'Léa', age: 23, city: 'Nantes', image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=300&h=300&q=60' },
  { name: 'Alice', age: 26, city: 'Lille', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&q=60' }
];

const secondProfiles = [
  { name: 'Sarah', age: 24, city: 'Strasbourg', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=300&q=60' },
  { name: 'Chloé', age: 28, city: 'Rennes', image: 'https://images.unsplash.com/photo-1514315384763-ba401779410f?w=300&h=300&q=60' },
  { name: 'Manon', age: 25, city: 'Montpellier', image: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=300&h=300&q=60' },
  { name: 'Camille', age: 27, city: 'Reims', image: 'https://images.unsplash.com/photo-1496440737103-cd596325d314?w=300&h=300&q=60' }
];

function App() {
  const [count] = useState(6297);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [userCity] = useState('Paris');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-6 lg:py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-2/3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Avis JM Date : Le meilleur site pour faire des rencontres libertines
              </h1>

              <div className="lg:hidden">
                <button className="btn-primary w-full py-4 rounded-xl text-[1.5rem] font-bold uppercase mb-6">
                  🟢 {count} LIBERTINES EN LIGNE
                </button>
              </div>

              <VideoPreview />

              <div className="hidden lg:block">
                <button className="btn-primary w-full py-4 rounded-xl text-[1.5rem] font-bold uppercase my-6">
                  🟢 {count} LIBERTINES EN LIGNE
                </button>
              </div>

              <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-xl" />}>
                <div className="lg:hidden mt-8">
                  <Sidebar />
                </div>
              </Suspense>

              <div className="bg-[#111827] text-white rounded-xl p-8 my-12">
                <h2 className="text-3xl font-bold mb-4 text-center">Rencontrez des libertines près de chez vous</h2>
                <p className="text-lg mb-6">
                  Avec plus de 3 millions d'inscrites, JM Date est la plus grande communauté de libertines et femmes libérées en France. 
                  Grâce à la fonctionnalité Swipe & Match, connectez-vous instantanément avec des milliers de profils dans votre région 
                  pour des rencontres sans tabous et sans perdre de temps.
                </p>
                <img
                  src="https://wend.fr/todelete/rencontres-jm-date-local.png"
                  alt="Rencontres localisées"
                  className="w-full rounded-lg mb-6"
                  loading="lazy"
                  width={800}
                  height={400}
                />
                <button className="btn-primary w-full py-4 rounded-xl text-[1.5rem] font-bold uppercase">
                  🌍 Je rencontre des femmes de ma ville
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                {topProfiles.map((profile, index) => (
                  <ProfileCard key={`top-${index}`} {...profile} />
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
                {firstProfiles.map((profile, index) => (
                  <ProfileCard key={`first-${index}`} {...profile} />
                ))}
              </div>

              <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-xl" />}>
                <MobileApp />
              </Suspense>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
                {secondProfiles.map((profile, index) => (
                  <ProfileCard key={`second-${index}`} {...profile} />
                ))}
              </div>

              <h2 className="text-4xl font-bold mb-8 text-center">Questions à propos de JM Date</h2>
              
              <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-xl" />}>
                <FAQ questions={questions} openFaq={openFaq} setOpenFaq={setOpenFaq} />
              </Suspense>

              <button className="btn-primary w-full py-4 rounded-xl text-[1.5rem] font-bold uppercase mt-8">
                🎁 PROFITEZ DE L'OFFRE D'ESSAI GRATUIT
              </button>
            </div>

            <div className="hidden lg:block lg:w-1/3">
              <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-xl" />}>
                <div className="sticky top-8">
                  <Sidebar />
                </div>
              </Suspense>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      
      <Suspense fallback={null}>
        <StickyBottomBar />
      </Suspense>
    </div>
  );
}

export default App;