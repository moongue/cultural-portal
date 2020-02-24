import React from 'react';
import SelectTemplate from '../components/UI/Select/Select';

const SelectTemplateProps = () => {
  const array = ['en', 'ru', 'by'];
  const value = 'en';
  const callback = () => <p>Hello</p>;
  return <SelectTemplate array={array} value={value} callback={callback} />;
};

export const Select = () => <SelectTemplateProps />;

export default {
  title: 'Select'
};
