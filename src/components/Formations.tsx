import React from 'react';
import { Code, Palette, Globe, Monitor, Languages } from 'lucide-react';

const formations = [
  {
    id: 1,
    title: "Initiation à l'informatique",
    description: "Maîtrisez les bases essentielles de l'informatique moderne et découvrez les outils numériques indispensables.",
    icon: <Monitor className="w-8 h-8" />,
    importance: "Fondamental pour tous les secteurs professionnels",
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "Programmation Web & Mobile",
    description: "Apprenez HTML, CSS, JavaScript, Python, SQL et React Native pour créer des applications complètes.",
    icon: <Code className="w-8 h-8" />,
    importance: "Compétences très demandées sur le marché",
    color: "bg-green-500"
  },
  
  {
    id: 3,
    title: "Marketing Digital & E-commerce",
    description: "Développez votre présence en ligne et maîtrisez les stratégies de vente digitale.",
    icon: <Globe className="w-8 h-8" />,
    importance: "Essentiel pour la croissance des entreprises",
    color: "bg-purple-500"
  },
  {
    id: 4,
    title: "Graphisme (Canva & Photoshop)",
    description: "Créez des visuels professionnels et développez votre créativité avec les outils de design.",
    icon: <Palette className="w-8 h-8" />,
    importance: "Indispensable pour la communication visuelle",
    color: "bg-pink-500"
  },
   {
    id: 5,
    title: "Maitrise de l'intelligence artificielle et ses applications",
    description: "Maîtrisez les bases essentielles de l'intelligence artificielle et découvrez comment vous en servir dans votre domaine.",
    icon: <Monitor className="w-8 h-8" />,
    importance: "Fondamental pour tous les domaines",
    color: "bg-blue-500"
  },
  {
    id: 6,
    title: "Langue Anglaise Professionnelle",
    description: "Améliorez votre anglais professionnel pour exceller dans un environnement international.",
    icon: <Languages className="w-8 h-8" />,
    importance: "Ouverture vers des opportunités globales",
    color: "bg-orange-500"
  }
];

const Formations = () => {
  return (
    <section id="formations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos <span className="text-orange-500">Formations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez notre gamme complète de formations professionnelles conçues pour vous préparer aux défis de demain
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {formations.map((formation) => (
            <div 
              key={formation.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 border-t-4 border-orange-500"
            >
              <div className={`${formation.color} w-16 h-16 rounded-lg flex items-center justify-center text-white mb-6`}>
                {formation.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {formation.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {formation.description}
              </p>
              
              <div className="border-t pt-4">
                <p className="text-sm text-orange-600 font-medium mb-4">
                  {formation.importance}
                </p>
                
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Formations;