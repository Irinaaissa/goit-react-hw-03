
import { useState, useEffect } from 'react';
import initialContacts from "../Data/initialContacts.json";
import ContactForm from '../ContactForm/ContactForm';
import './App.css'
import SearchBox from '../SearchBox/SearchBox';
 import ContactList from '../ContactList/ContactList';

const getInitialContacts = () => {
  const savedContacts = window.localStorage.getItem('contacts');
  return savedContacts !== null ? JSON.parse(savedContacts) : initialContacts;
};
// 
export default function App() {
  const [contacts, setContacts] = useState(getInitialContacts); 
  const [filter, setFilter] = useState(''); 

  // 
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );



  const addContact = newContact => {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

 
  const deleteContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

 
  useEffect(() => {
    try {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } catch (error) {
      console.error('Error storing contacts or filter in localStorage:', error);
    }
  }, [contacts]);

  return (
    <div >
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onChange={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}