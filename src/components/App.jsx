import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/contactsSelector';
import { getFilter } from 'redux/filter/filterSelector';

import { Section } from './Section';
import { AddContact } from './AddContact';
import { Filter } from './Filter';
import { Contacts } from './Contacts';

import { changeFilter } from 'redux/filter/filterSlice';
import { addContact, deleteContact } from 'redux/contacts/contactsSlice';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filterContacts = input => {
    dispatch(changeFilter(input));
  };

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const addNewContact = newContact => {
    if (contacts.find(contact => contact.name === newContact.name)) {
      return alert(`${newContact.name} is already in contacts!`);
    }

    dispatch(addContact(newContact));
  };

  const deleteSomeContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <h1>React-HW06 'Redux' @nickgric</h1>
      <Section title="Phonebook">
        <AddContact addContact={addNewContact} />
      </Section>
      <Section title="Contacts">
        <Filter filterContacts={filterContacts} />
        <Contacts
          filteredContacts={filteredContacts}
          deleteContact={deleteSomeContact}
        />
      </Section>
    </>
  );
};
