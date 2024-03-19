import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import i18nextXhrBackend from 'i18next-xhr-backend';

i18n
  .use(initReactI18next)
  .use(i18nextXhrBackend)
  .init({
    lng: 'fr',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false, // react echappe déjà
    },
  });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
