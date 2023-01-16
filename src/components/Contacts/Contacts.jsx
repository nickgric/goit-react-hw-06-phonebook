import PropTypes from 'prop-types';
import Avatar from 'react-avatar';

import { deleteContact } from 'redux/contacts/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

import { getContacts } from 'redux/contacts/contactsSelector';
import { getFilter } from 'redux/filter/filterSelector';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const clickHandler = ({ target: { name } }) => {
    const id = name;
    dispatch(deleteContact(id));
  };

  return (
    <>
      <ul>
        {filteredContacts().map(contact => (
          <li key={contact.id}>
            <Avatar
              name={contact.name}
              maxInitials={2}
              size={30}
              round={true}
            />
            <p>
              <b>
                {contact.name.length < 35
                  ? contact.name
                  : contact.name.substr(0, 35) + '...'}
                :
              </b>{' '}
              {contact.number}
            </p>
            <button name={contact.id} onClick={clickHandler}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

Contacts.propTypes = {
  filteredContacts: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
