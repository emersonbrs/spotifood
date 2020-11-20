import React, { createContext, useContext } from 'react';

export interface SearchContextData {
  searchName: string;
}

const SearchContext = createContext<SearchContextData>({} as SearchContextData);

export const SearchProvider: React.FC = ({ children }) => {
  const searchName = 'sa';

  return (
    <SearchContext.Provider value={{ searchName }}>
      {children}
    </SearchContext.Provider>
  );
};

export function useSearch(): string {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('useAuth needs AuthProvider');
  }

  return context.searchName;
}
