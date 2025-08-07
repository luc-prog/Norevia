import React from 'react';
import { Link } from 'react-router-dom';
import { BookUser, Phone, Database, Users } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col space-y-16">
      {/* Hero Section */}
      <section className="text-center py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Manage Your Contacts <span className="text-indigo-600">Smarter</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Organize, track, and connect with your contacts effortlessly.
          SmartContact makes managing your network simple and efficient.
        </p>
        <Link
          to="/contacts"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          Get Started
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Key Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Users size={48} className="text-indigo-600" />}
            title="Contact Management"
            description="Easily add, edit, and organize all your contacts in one place with powerful management tools."
          />
          <FeatureCard
            icon={<Phone size={48} className="text-sky-600" />}
            title="Quick Access"
            description="Find and connect with your contacts instantly with our intuitive search and filtering features."
          />
          <FeatureCard
            icon={<Database size={48} className="text-amber-500" />}
            title="Secure Storage"
            description="Keep your contacts safe with our secure database and reliable backup systems."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get organized?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Start managing your contacts more efficiently today with SmartContact.
        </p>
        <Link
          to="/contacts"
          className="inline-block bg-white text-indigo-600 font-medium px-6 py-3 rounded-lg shadow hover:shadow-lg hover:bg-gray-100 transition-all duration-300"
        >
          View Contacts
        </Link>
      </section>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default HomePage;