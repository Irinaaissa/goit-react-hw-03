
 import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

export default function ContactList(contacts) {
  return (
    <div className={css.contactList}>
      {contacts.map(({ id, name, number,onDelete }) => (
        <Contact
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