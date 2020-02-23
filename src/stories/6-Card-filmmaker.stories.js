import React from 'react';
import FilmmakerCardGallery from '../components/UI/Cards/Card-gallery';
import FilmmakerCardMainPage from '../components/UI/Cards/Card-main-page';
import image from './inkognito.jpg';

const FilmmakerCardGalleryProps = () => {
  const name = 'Filmmaker';
  const years = '(02.06.1968 - 06.09.1995)';
  const description =
    'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet';
  const nameButton = 'Learn More';
  return (
    <FilmmakerCardGallery
      img={image}
      name={name}
      years={years}
      description={description}
      nameButton={nameButton}
    />
  );
};

const FilmmakerCardMainPageProps = () => {
  const name = 'Filmmaker';
  const years = '(02.06.1968 - 06.09.1995)';
  const description =
    'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet';
  const nameButton = 'Learn More';
  return (
    <FilmmakerCardMainPage
      img={image}
      name={name}
      years={years}
      description={description}
      nameButton={nameButton}
    />
  );
};

export const FilmmakerCardTemplate = () => <FilmmakerCardGalleryProps />;
export const FilmmakerCardMainPageTemplate = () => (
  <FilmmakerCardMainPageProps />
);

export default {
  title: 'Card Examples'
};
