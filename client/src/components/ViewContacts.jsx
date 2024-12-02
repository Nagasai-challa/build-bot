import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ViewContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://contact-management-system-86q5.onrender.com/contacts', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setContacts(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch contacts');
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const handleEdit = (contact) => {
    
    navigate(`/edit-contact/${contact._id}`, { state: { contact } });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://contact-management-system-86q5.onrender.com/contacts/${id}`);
      setContacts((prevContacts) => prevContacts.filter((contact) => contact._id !== id));
      alert('Contact deleted successfully!');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to delete contact');
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Contact List</h1>

      {loading ? (
        <p className="text-center text-gray-600 text-lg">Loading contacts...</p>
      ) : error ? (
        <p className="text-center text-red-500 text-lg">{error}</p>
      ) : contacts.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">No contacts found.</p>
      ) : (
        <div className="space-y-4">
          {contacts.map((contact) => (
            <div
              key={contact._id}
              className="flex flex-col md:flex-row justify-between items-center 
                         bg-white p-4 rounded-lg shadow-lg 
                         space-y-3 md:space-y-0 md:space-x-4"
            >
              <div className="text-center md:text-left flex-grow">
                <h3 className="text-lg font-semibold text-gray-800">
                  {contact.firstName} {contact.lastName}
                </h3>
                <p className="text-gray-600">Email: {contact.email}</p>
                <p className="text-gray-600">Phone: {contact.phoneNumber}</p>
              </div>
              <div className="flex flex-row space-x-2">
                <button
                  className="px-3 py-2 bg-blue-500 text-white rounded 
                             hover:bg-blue-600 transition duration-300 
                             w-24 md:w-auto"
                  onClick={() => handleEdit(contact)}
                >
                  Edit
                </button>
                <button
                  className="px-3 py-2 bg-red-500 text-white rounded 
                             hover:bg-red-600 transition duration-300 
                             w-24 md:w-auto"
                  onClick={() => handleDelete(contact._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewContacts;
