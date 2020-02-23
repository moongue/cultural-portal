import React from 'react';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import '../../../index.scss';

const MyButton = styled(Button)({
  fontFamily: 'Roboto, sans-serif',
  fontSize: 11,
  background: '#808080',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 1px 4px 1px #000000',
  color: 'white',
  height: 30,
  width: 141,
  margin: 'auto',
  padding: '0 30px',

  '&:hover': {
    background: '#585454'
  }
});

const SmallButton = props => {
  return <MyButton onClick={e => this.props.onClick(e)}>{props.text}</MyButton>;
};

export default SmallButton;
