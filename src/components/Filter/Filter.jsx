import PropTypes from 'prop-types';

export const Filter = ({ filterContacts }) => {
  const filterHandler = ({ target: { value } }) => {
    filterContacts(value);
  };

  return (
    <>
      <p>Find contacts by name:</p>
      <input
        onInput={filterHandler}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </>
  );
};

Filter.propTypes = {
  filterContacts: PropTypes.func.isRequired,
};
