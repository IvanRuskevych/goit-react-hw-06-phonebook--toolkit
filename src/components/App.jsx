// import { useState } from 'react';
// import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import Section from './Section/Section ';

// import { useLocalStorage } from 'hooks/useLocalStorage';

// const initialContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

export default function App() {
  // const [contacts, setContacts] = useLocalStorage('contacts', initialContacts);
  // console.log(contacts);

  // const addContact = (name, number) => {
  //   const newContact = {
  //     id: nanoid(5),
  //     name,
  //     number,
  //   };

  //   setContacts(prev => [...prev, newContact]);
  // };

  return (
    <Section>
      <h1>Phonebook</h1>
      <ContactForm
      // addContact={addContact}
      />

      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </Section>
  );
}
