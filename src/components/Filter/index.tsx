import React, { useEffect } from 'react';

import { useFilter } from '../../hooks/filter';

import Input from '../InputFilter';
import Select from '../SelectFilter';

import { apiMocky } from '../../services/api';

import {
  Container,
  ContainerInside,
  SelectContainer,
  InputContainer,
  Title,
} from './styles';

const Filter: React.FC = () => {
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
  } = useFilter();

  const limitIsValid = (number: string, validation: any) => {
    if (Math.sign(Number(number)) !== 1) return;

    if (number < validation.min || number > validation.max) return;

    return true;
  };

  const offsetIsValid = (number: string) => {
    if (Math.sign(Number(number)) !== 1) return;

    return true;
  };

  useEffect(() => {
    const apiFilters = async () => {
      if (!localStorage.getItem('@spotifood:filters')) {
        const { data } = await apiMocky.get('/');
        const { filters } = data;

        localStorage.setItem('@spotifood:filters', JSON.stringify(filters));
      }

      const localFilters = localStorage.getItem('@spotifood:filters') || '';

      if (localFilters) {
        const filters = JSON.parse(localFilters);

        setLocale(filters[0]);
        setCountry(filters[1]);
        setTimestamp(filters[2]);
        setLimit(filters[3]);
        setOffset(filters[4]);
      }
    };

    apiFilters();
  }, [setCountry, setLimit, setLocale, setOffset, setTimestamp]);

  return (
    <Container>
      <Title>Peça sua playlist pelo filtro do Spotify:</Title>
      <ContainerInside>
        <SelectContainer>
          <Select
            name={country.id}
            value={country.value}
            options={country.values}
            onChange={(value: string) => setCountry({ ...country, value })}
          />
          <Select
            name={locale.id}
            value={locale.value}
            options={locale.values}
            onChange={(value: string) => setLocale({ ...locale, value })}
          />
          <Input
            type="date"
            name={timestamp.id}
            placeholder={timestamp.name}
            value={timestamp.value}
            onChange={(value: string) => setTimestamp({ ...timestamp, value })}
          />
        </SelectContainer>
        <InputContainer>
          <Input
            type="number"
            name={limit.id}
            placeholder={limit.name}
            value={limit.value}
            onChange={(value: string) => {
              if (limitIsValid(value, limit.validation)) {
                setLimit({ ...limit, value });
              }
            }}
          />
          <Input
            type="number"
            name={offset.id}
            placeholder={offset.name}
            value={offset.value}
            onChange={(value: string) => {
              if (offsetIsValid(value)) {
                setOffset({ ...offset, value });
              }
            }}
          />
        </InputContainer>
      </ContainerInside>
    </Container>
  );
};
export default Filter;
