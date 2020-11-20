import React, { createContext, useContext, useState } from 'react';

interface IOption {
  value: string;
  name: string;
}
interface ISelect {
  id: string;
  name: string;
  value: string;
  values: IOption[];
}
interface IInput {
  id: string;
  name: string;
  value: string;
  validation: object;
}
interface IContext {
  locale: ISelect;
  setLocale: Function;
  country: ISelect;
  setCountry: Function;
  timestamp: IInput;
  setTimestamp: Function;
  limit: IInput;
  setLimit: Function;
  offset: IInput;
  setOffset: Function;
  query: string;
  setQuery: Function;
}

const FilterContext = createContext<IContext>({} as IContext);

export const FilterProvider: React.FC = ({ children }) => {
  const [locale, setLocale] = useState<ISelect>({} as ISelect);
  const [country, setCountry] = useState<ISelect>({} as ISelect);

  const [timestamp, setTimestamp] = useState<IInput>({} as IInput);
  const [limit, setLimit] = useState<IInput>({} as IInput);
  const [offset, setOffset] = useState<IInput>({} as IInput);

  const [query, setQuery] = useState<string>('');

  return (
    <FilterContext.Provider
      value={{
        locale,

        setLocale,
        country,

        setCountry,
        timestamp,

        setTimestamp,
        limit,

        setLimit,
        offset,

        setOffset,
        query,
        setQuery,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export function useQuery() {
  const context = useContext(FilterContext);
  const { query, setQuery } = context;

  return { query, setQuery };
}

export function useFilter() {
  const context = useContext(FilterContext);
  const {
    locale,
    setLocale,
    country,
    setCountry,
    timestamp,
    setTimestamp,
    limit,
    setLimit,
    offset,
    setOffset,
  } = context;

  return {
    locale,

    setLocale,
    country,

    setCountry,
    timestamp,

    setTimestamp,
    limit,

    setLimit,
    offset,
    setOffset,
  };
}
