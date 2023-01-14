import PropTypes from 'prop-types';

export const Contacts = ({ filteredContacts, deleteContact }) => {
  const clichHandler = ({ target: { name } }) => {
    const id = name;
    deleteContact(id);
  };

  return (
    <>
      <ul>
        {filteredContacts().map(contact => (
          <li key={contact.id}>
            <p>
              <b>{contact.name}:</b> {contact.number}
            </p>
            <button name={contact.id} onClick={clichHandler}>
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
