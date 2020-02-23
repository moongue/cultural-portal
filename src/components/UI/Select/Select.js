import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import '../../../index.scss';

const SelectTemplate = props => {
  const { array } = props;
  const { value } = props;
  const { callback } = props;
  const menuItem = array.map(item => <MenuItem value={item}>{item}</MenuItem>);
  return (
    <FormControl>
      <Select
        labelId="demo-simple-select-placeholder-label-label"
        id="demo-simple-select-placeholder-label"
        value={value}
        onChange={callback}
        displayEmpty
      >
        {menuItem}
      </Select>
    </FormControl>
  );
};

export default SelectTemplate;
