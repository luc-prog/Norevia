import React from 'react';
import { Users, BookOpen, Award, Clock } from 'lucide-react';

const features = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Formateurs Expérimentés",
    description: "Notre équipe de formateurs qualifiés vous accompagne avec expertise et pédagogie",
    color: "bg-blue-500"
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Méthode Pratique et Accessible",
    description: "Apprentissage concret avec des projets réels et une approche adaptée à tous les niveaux",
    color: "bg-green-500"
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Certification Garantie",
    description: "Obtenez votre certificat reconnu à la fin de chaque formation pour valoriser vos compétences",
    color: "bg-orange-500"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Horaires Flexibles",
    description: "Formations adaptées à votre emploi du temps avec des options en présentiel et en ligne",
    color: "bg-purple-500"
  }
];

const WhyChooseUs = () => {
  return (
    <>
      <section id="apropos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir <span className="text-orange-500">NOREVIA</span> ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nous nous engageons à vous offrir une expérience de formation exceptionnelle avec des résultats concrets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className={`${feature.color} w-20 h-20 rounded-full flex items-center justify-center text-white mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-orange-500 mb-2">150+</div>
                <p className="text-gray-600">Étudiants formés</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-500 mb-2">95%</div>
                <p className="text-gray-600">Taux de satisfaction</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-500 mb-2">2+</div>
                <p className="text-gray-600">Années d'expérience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Politique de confidentialité intégrée */}
      <section className="bg-gray-900 text-white px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-orange-500">
            Politique de confidentialité
          </h2>
          <p className="text-sm text-gray-400 mb-10">
            Dernière mise à jour : 7 août 2025
          </p>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Nous respectons votre vie privée. Cette politique explique comment vos données sont collectées et utilisées.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nom, e-mail ou téléphone si fournis volontairement</li>
              <li>Données de géolocalisation (avec votre autorisation)</li>
              <li>Messages échangés via le chat ou le support</li>
              <li>Informations techniques (type d’appareil, OS, etc.)</li>
            </ul>
            <p>
              Nous n'utilisons vos données que pour améliorer nos services, personnaliser votre expérience, ou assurer la sécurité.
            </p>
            <p>
              Pour toute demande liée à vos données ou pour exercer vos droits, contactez-nous à : <strong>contact@tonsite.com</strong>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
