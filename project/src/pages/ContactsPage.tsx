import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search, User, Phone, Mail, Trash2, Edit } from 'lucide-react';
import ContactForm from '../components/contacts/ContactForm';

interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const ContactsPage: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddingContact, setIsAddingContact] = useState(false);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/contacts');
        
        if (!response.ok) {
          throw new Error('Failed to fetch contacts');
        }
        
        const data = await response.json();
        setContacts(data);
      } catch (err) {
        console.error('Error fetching contacts:', err);
        setError('Failed to load contacts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const handleAddContact = async (newContact: Omit<Contact, 'id'>) => {
    try {
      const response = await fetch('http://localhost:3000/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newContact),
      });

      if (!response.ok) {
        throw new Error('Failed to add contact');
      }

      const data = await response.json();
      setContacts(prevContacts => [...prevContacts, data]);
      setIsAddingContact(false);
    } catch (err) {
      console.error('Error adding contact:', err);
      setError('Failed to add contact. Please try again.');
    }
  };

  const handleDeleteContact = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this contact?')) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/api/contacts/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete contact');
      }

      setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
    } catch (err) {
      console.error('Error deleting contact:', err);
      setError('Failed to delete contact. Please try again.');
    }
  };

  const filteredContacts = contacts.filter(contact => {
    const fullName = `${contact.firstName} ${contact.lastName}`.toLowerCase();
    const query = searchQuery.toLowerCase();
    return (
      fullName.includes(query) ||
      contact.email.toLowerCase().includes(query) ||
      contact.phone.includes(query)
    );
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Contacts</h1>
        <button
          onClick={() => setIsAddingContact(true)}
          className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <Plus size={18} className="mr-2" />
          Add Contact
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded">
          <p>{error}</p>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search contacts..."
              className="pl-10 pr-4 py-2 w-full border rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-600 transition-colors"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {filteredContacts.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            No contacts found. {contacts.length === 0 ? 'Add your first contact!' : 'Try a different search term.'}
          </div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {filteredContacts.map(contact => (
              <li key={contact.id} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex items-center mb-2 md:mb-0">
                    <div className="bg-indigo-100 text-indigo-700 rounded-full p-2 mr-4">
                      <User size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">
                        {contact.firstName} {contact.lastName}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:space-x-4 text-sm text-gray-600 mt-1">
                        <span className="flex items-center">
                          <Mail size={14} className="mr-1" /> {contact.email}
                        </span>
                        <span className="flex items-center mt-1 sm:mt-0">
                          <Phone size={14} className="mr-1" /> {contact.phone}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2 md:ml-4">
                    <Link
                      to={`/contacts/${contact.id}`}
                      className="p-2 text-sky-600 hover:text-sky-800 transition-colors"
                      aria-label="Edit contact"
                    >
                      <Edit size={18} />
                    </Link>
                    <button
                      onClick={() => handleDeleteContact(contact.id)}
                      className="p-2 text-red-600 hover:text-red-800 transition-colors"
                      aria-label="Delete contact"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {isAddingContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 m-4 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Add New Contact</h2>
            <ContactForm 
              onSubmit={handleAddContact} 
              onCancel={() => setIsAddingContact(false)} 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactsPage;