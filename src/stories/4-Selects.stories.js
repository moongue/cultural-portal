import React from 'react';
import SelectTemplate from '../components/UI/Select/Select';

const SelectTemplateProps = () => {
  const array = ['en', 'ru', 'by'];
  const value = 'en';
  const callback = () => <p>Hello</p>;
  return (
    <div style={{ margin: 20 }}>
      <SelectTemplate array={array} value={value} callback={callback} />
    </div>
  );
};

export const Select = () => <SelectTemplateProps />;

export default {
  title: 'Select'
};
