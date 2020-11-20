import React from 'react';
import { Container } from './styles';

interface Props {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: Function;
}

function InputFilter(props: Props) {
  const { type, name, value, placeholder, onChange } = props;

  return (
    <Container>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={event => onChange(event.target.value)}
      />
    </Container>
  );
}

export default InputFilter;
