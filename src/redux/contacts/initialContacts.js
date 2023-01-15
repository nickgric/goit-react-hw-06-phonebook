import { generateName } from './randomNamer';
import { nanoid } from 'nanoid';

const exampleContact = ' (example)';

export const initialContacts = [
  {
    id: nanoid(),
    name: generateName() + exampleContact,
    number: '096-12345678',
  },
  {
    id: nanoid(),
    name: generateName() + exampleContact,
    number: '097-12345678',
  },
  {
    id: nanoid(),
    name: generateName() + exampleContact,
    number: '098-12345678',
  },
  {
    id: nanoid(),
    name: generateName() + exampleContact,
    number: '099-12345678',
  },
  {
    id: nanoid(),
    name: generateName() + exampleContact,
    number: '099-12345678',
  },
  {
    id: nanoid(),
    name: generateName() + exampleContact,
    number: '099-12345678',
  },
  {
    id: nanoid(),
    name: generateName() + exampleContact,
    number: '099-12345678',
  },
  {
    id: nanoid(),
    name: generateName() + exampleContact,
    number: '099-12345678',
  },
  {
    id: nanoid(),
    name: generateName() + exampleContact,
    number: '099-12345678',
  },
  {
    id: nanoid(),
    name: generateName() + exampleContact,
    number: '099-12345678',
  },
];
