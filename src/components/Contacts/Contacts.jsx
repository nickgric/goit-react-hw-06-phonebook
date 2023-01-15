import PropTypes from 'prop-types';
import Avatar from 'react-avatar';

export const Contacts = ({ filteredContacts, deleteContact }) => {
  const clickHandler = ({ target: { name } }) => {
    const id = name;
    deleteContact(id);
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
