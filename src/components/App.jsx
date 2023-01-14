import { useState, useEffect } from 'react';

import { nanoid } from 'nanoid';
import { generateName } from './utils/randomname';

import { Section } from './Section';
import { AddContact } from './AddContact';
import { Filter } from './Filter';
import { Contacts } from './Contacts';

export const App = () => {
  const initialContacts = [
    {
      id: nanoid(),
      name: `${generateName()} (example contact)`,
      number: '096-12345678',
    },
    {
      id: nanoid(),
      name: `${generateName()} (example contact)`,
      number: '097-12345678',
    },
    {
      id: nanoid(),
      name: `${generateName()} (example contact)`,
      number: '098-12345678',
    },
    {
      id: nanoid(),
      name: `${generateName()} (example contact)`,
      number: '099-12345678',
    },
    {
      id: nanoid(),
      name: `${generateName()} (example contact)`,
      number: '099-12345678',
    },
    {
      id: nanoid(),
      name: `${generateName()} (example contact)`,
      number: '099-12345678',
    },
    {
      id: nanoid(),
      name: `${generateName()} (example contact)`,
      number: '099-12345678',
    },
    {
      id: nanoid(),
      name: `${generateName()} (example contact)`,
      number: '099-12345678',
    },
    {
      id: nanoid(),
      name: `${generateName()} (example contact)`,
      number: '099-12345678',
    },
    {
      id: nanoid(),
      name: `${generateName()} (example contact)`,
      number: '099-12345678',
    },
  ];

  const [contacts, setContacts] = useState(
    localStorage.getItem('contacts')
      ? JSON.parse(localStorage.getItem('contacts'))
      : initialContacts
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filterContacts = input => {
    setFilter(input);
  };

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const addContact = newContact => {
    if (contacts.find(contact => contact.name === newContact.name)) {
      return alert(`${newContact.name} is already in contacts!`);
    }

    setContacts(prevState => {
      const newState = [newContact, ...prevState];
      return newState;
    });
  };

  const deleteContact = id => {
    setContacts(prevState => {
      const newContacts = prevState.filter(contact => contact.id !== id);
      return newContacts;
    });
  };

  return (
    <>
      <h1>React-HW04_02 @nickgric</h1>
      <Section title="Phonebook">
        <AddContact addContact={addContact} />
      </Section>
      <Section title="Contacts">
        <Filter filterContacts={filterContacts} />
        <Contacts
          filteredContacts={filteredContacts}
          deleteContact={deleteContact}
        />
      </Section>
    </>
  );
};
