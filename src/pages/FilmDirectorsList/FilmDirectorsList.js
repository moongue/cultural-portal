import React, { Suspense, useState } from 'react';
import { withTranslation, useTranslation } from 'react-i18next';
import FilmmakerCardGallery from '../../components/CardFilmmaker/CardGallery';
import Input from '../../components/UI/Input/input';
import data from '../../data/dataFilmDirectors.json';
import './FilmDirectorsList.scss';

export const FilmDirectorsListEl = () => {
  const [value, setValue] = useState('');
  const { t } = useTranslation();

  // eslint-disable-next-line consistent-return,array-callback-return
  const directorsInfo = data.filter(elem => {
    if (
      t(elem.name)
        .toLowerCase()
        .indexOf(value.toLowerCase()) !== -1 ||
      t(elem.city)
        .toLowerCase()
        .indexOf(value.toLowerCase()) !== -1
    )
      return elem;
  });

  return (
    <>
      <Input value={value} callback={e => setValue(e.target.value)} />
      <div className="Directors-list">
        {directorsInfo.map(card => (
          <FilmmakerCardGallery
            key={card.id}
            id={card.id}
            img={card.photo}
            name={t(card.name)}
            city={t(card.city)}
            years={card.dateOfLife}
          />
        ))}
      </div>
    </>
  );
};

const FilmDirectorsListComponent = withTranslation()(FilmDirectorsListEl);

export default function FilmDirectorsList() {
  return (
    <Suspense fallback="loading">
      <FilmDirectorsListComponent />
    </Suspense>
  );
}
