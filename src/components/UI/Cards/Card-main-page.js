import React from 'react';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import './Card.scss';
import '../../../index.scss';

const MyButton = styled(Button)({
  fontFamily: 'Roboto, sans-serif',
  background: '#808080',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 1px 4px 1px #000000',
  color: 'white',
  height: 40,
  width: 204,
  margin: '5px auto 0 auto',
  padding: '0 30px',

  '&:hover': {
    background: '#585454'
  }
});

const FilmmakerCardMainPage = props => {
  return (
    <div className="Filmmaker-card-main-page">
      <img alt={props.name} src={props.img} className="Photo-filmmaker" />
      <div className="Filmmaker-info-container">
        <h4 className="Name-filmmaker">{props.name}</h4>
        <p className="Yaers-life-filmmaker">{props.years}</p>
        <p className="Description-filmmaker">{props.description}</p>
        <MyButton onClick={e => this.props.onClick(e)}>
          {props.nameButton}
        </MyButton>
      </div>
    </div>
  );
};

export default FilmmakerCardMainPage;
