import { useLayoutEffect, useState } from 'react';

import { LocalStorage } from '@/Utils';

function useLanguage() {
  const [language, setLanguage] = useState('en');

  useLayoutEffect(() => {
    const storedLanguage = LocalStorage.GET('language');
    if (!storedLanguage || storedLanguage !== language) LocalStorage.SET('language', language);
    else { setLanguage(storedLanguage); }
  }, [language]);

  return { language, setLanguage };
}

export default useLanguage;
