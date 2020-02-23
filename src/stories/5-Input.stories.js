import React from 'react';
import Input from '../components/UI/Input/input';

const InputProps = () => {
  const callbackInput = () => <p>Hello</p>;
  return <Input callback={callbackInput} />;
};

export const InputSearch = () => <InputProps />;

export default {
  title: 'Input'
};
