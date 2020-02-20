import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

export const select = () => (
  <FormControl>
    <Select
      labelId="demo-simple-select-placeholder-label-label"
      id="demo-simple-select-placeholder-label"
      value="en"
      displayEmpty
    >
      <MenuItem value="en">en</MenuItem>
      <MenuItem value="ru">ru</MenuItem>
      <MenuItem value="by">by</MenuItem>
    </Select>
  </FormControl>
);

export default {
  title: 'Select'
};
