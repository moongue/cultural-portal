import React from 'react';
import FilmmakerCardProfile from '../components/UI/Card/CardProfile';
import image from './inkognito.jpg';

const FilmmakerCardProps = () => {
  const name = 'Filmmaker';
  const city = 'city';
  const years = '(02.06.1968 - 06.09.1995)';
  const description =
    'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet';
  const nameButton = 'Learn More';
  return (
    <div style={{ marginTop: 20 }}>
      <FilmmakerCardProfile
        img={image}
        name={name}
        city={city}
        years={years}
        description={description}
        nameButton={nameButton}
      />
    </div>
  );
};

export const FilmmakerCardTemplate = () => <FilmmakerCardProps />;

export default {
  title: 'Card Example'
};
