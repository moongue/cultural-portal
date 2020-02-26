import React from 'react';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import '../../../index.scss';

const MyButton = styled(Button)({
  fontFamily: 'Roboto, sans-serif',
  fontSize: 13,
  color: '#000',
  border: '1px solid #000',
  borderRadius: 3,
  boxShadow: '0 0 9px rgba(0, 0, 0, 0.2)',
  width: 141,
  margin: 'auto',
  transition: 'all .2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.03)',
  }
});

const SmallButton = props => {
  return <MyButton onClick={e => props.onClick(e)}>{props.text}</MyButton>;
};

export default SmallButton;
