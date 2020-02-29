import React from 'react';
import './CardProfile.scss';

const FilmmakerCardProfile = props => {
  return (
    <div className="author--short_description">
      <img
        src={props.img}
        alt={props.name}
        className="author--short_description-img"
      />
      <p className="author--short_description-name">
        {props.name} ({props.city})
      </p>
      <p className="author--short_description-date">{props.years}</p>
      <p className="author--short_description-info">{props.description}</p>
    </div>
  );
};

export default FilmmakerCardProfile;
