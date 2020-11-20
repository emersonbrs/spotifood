import React from 'react';
import { Container } from './styles';

interface Option {
  value: string;
  name: string;
}

interface Props {
  name: string;
  value: string;
  options: Option[];
  onChange: Function;
}

function Select(props: Props) {
  const { name, value, options, onChange } = props;
  return (
    <Container>
      <select
        name={name}
        value={value}
        onChange={event => onChange(event.target.value)}
      >
        <option value="" selected>
          {name}
        </option>
        {options?.map(item => (
          <option value={item.value} key={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </Container>
  );
}

export default Select;
