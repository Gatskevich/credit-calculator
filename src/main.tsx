import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { CreditProvider } from './utils/context/CreditContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <CreditProvider>
      <App />
    </CreditProvider>
  </StrictMode>
);
