// import css from './ContactList.module.css';

import ContactForm from '../ContactForm/ContactForm';

export default function ContactList({ contacts, onDelete }) {
  return (
    <div >
      {contacts.map(({ id, name, number }) => (
        <ContactForm
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}