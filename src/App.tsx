import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Routes from './routes';

import { AuthProvider } from './hooks/auth';
import { FilterProvider } from './hooks/filter';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <FilterProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </FilterProvider>
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
