import { createContext } from 'react';

const LANGUAGE_CONTEXT = createContext('en');
const STORE_CONTEXT = createContext({});

export default {
  LANGUAGE_CONTEXT,
  STORE_CONTEXT,
};
