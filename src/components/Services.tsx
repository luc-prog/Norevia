import React from 'react';
import { Smartphone, GraduationCap, RefreshCw } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Conception d’applications Web & Mobile",
    description:
      "Nous concevons des solutions digitales performantes, modernes et adaptées à vos besoins, du site vitrine à l’application mobile multiplateforme.",
    icon: <Smartphone className="w-8 h-8" />,
    importance: "Pour booster votre visibilité et automatiser vos processus",
    color: "bg-indigo-500"
  },
  {
    id: 2,
    title: "Formations Professionnelles",
    description:
      "Formez-vous aux compétences les plus recherchées : développement, marketing digital, bureautique, design graphique, et bien plus.",
    icon: <GraduationCap className="w-8 h-8" />,
    importance: "Investissez dans votre avenir professionnel",
    color: "bg-green-600"
  },
  {
    id: 3,
    title: "Digitalisation & Transformation Numérique",
    description:
      "Accompagne les entreprises dans leur transition digitale : numérisation des processus, automatisation, outils collaboratifs, cybersécurité.",
    icon: <RefreshCw className="w-8 h-8" />,
    importance: "Accélérez votre croissance grâce au numérique",
    color: "bg-orange-500"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nous proposons des services innovants pour accompagner votre transformation digitale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 border-t-4 border-orange-500"
            >
              <div className={`${service.color} w-16 h-16 rounded-lg flex items-center justify-center text-white mb-6`}>
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              <div className="border-t pt-4">
                <p className="text-sm text-orange-600 font-medium">
                  {service.importance}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
