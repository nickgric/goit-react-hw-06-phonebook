import { Section } from './Section';
import { AddContact } from './AddContact';
import { Filter } from './Filter';
import { Contacts } from './Contacts';

export const App = () => {
  return (
    <>
      <h1>React-HW06 'Redux' @nickgric</h1>
      <Section title="Phonebook">
        <AddContact />
      </Section>
      <Section title="Contacts">
        <Filter />
        <Contacts />
      </Section>
    </>
  );
};
