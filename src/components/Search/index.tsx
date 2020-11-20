import React, { useEffect, useRef, useState } from 'react';

import { FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';

import { api } from '../../services/api';

import { Container, Title, TitleSearch, TitleName } from './styles';
import Input from '../Input';

interface PropsSearch {
  nameSearch: React.SetStateAction<any>;
}

const Search: React.FC<PropsSearch> = ({ nameSearch }) => {
  const [userName, setUserName] = useState('');
  const formRef = useRef(null);

  useEffect(() => {
    const getUser = async () => {
      const response = await api.get('/me');
      const { data } = response;

      setUserName(data.display_name);
    };

    getUser();
  }, []);

  return (
    <Container>
      <Form ref={formRef} onSubmit={() => true}>
        <TitleSearch>
          <Title>Olá</Title>
          <TitleName>{userName}</TitleName>
          <Title>enquanto espera seu pedido chegar...</Title>
        </TitleSearch>
        <Input
          onChange={evt => {
            nameSearch(evt.target.value.toLowerCase());
          }}
          // onChange={() => nameSearch(event.target.value)}
          name="name"
          icon={FiMail}
          placeholder="Qual playlist você quer ouvir?"
        />
      </Form>
    </Container>
  );
};

export default Search;
