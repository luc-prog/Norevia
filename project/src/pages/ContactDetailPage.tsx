import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, User } from 'lucide-react';
import ContactForm from '../components/contacts/ContactForm';

interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const ContactDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [contact, setContact] = useState<Contact | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/contacts/${id}`);
        
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Contact not found');
          }
          throw new Error('Failed to fetch contact');
        }
        
        const data = await response.json();
        setContact(data);
      } catch (err) {
        console.error('Error fetching contact:', err);
        setError((err as Error).message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchContact();
    }
  }, [id]);

  const handleUpdateContact = async (updatedData: Omit<Contact, 'id'>) => {
    if (!id || !contact) return;

    try {
      const response = await fetch(`http://localhost:3000/api/contacts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error('Failed to update contact');
      }

      const data = await response.json();
      setContact(data);
      navigate('/contacts');
    } catch (err) {
      console.error('Error updating contact:', err);
      setError('Failed to update contact. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded">
        <p className="font-bold">Error</p>
        <p>{error}</p>
        <button
          onClick={() => navigate('/contacts')}
          className="mt-4 text-indigo-600 hover:text-indigo-800 transition-colors flex items-center"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Contacts
        </button>
      </div>
    );
  }

  if (!contact) {
    return (
      <div className="text-center p-6">
        <p className="text-gray-700 mb-4">Contact not found</p>
        <button
          onClick={() => navigate('/contacts')}
          className="text-indigo-600 hover:text-indigo-800 transition-colors flex items-center mx-auto"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Contacts
        </button>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => navigate('/contacts')}
        className="mb-6 text-indigo-600 hover:text-indigo-800 transition-colors flex items-center"
      >
        <ArrowLeft size={16} className="mr-2" />
        Back to Contacts
      </button>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-6">
          <div className="bg-indigo-100 text-indigo-700 rounded-full p-3 mr-4">
            <User size={24} />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">
            Edit Contact
          </h1>
        </div>

        <ContactForm
          initialData={{
            firstName: contact.firstName,
            lastName: contact.lastName,
            email: contact.email,
            phone: contact.phone
          }}
          onSubmit={handleUpdateContact}
          onCancel={() => navigate('/contacts')}
        />
      </div>
    </div>
  );
};

export default ContactDetailPage;