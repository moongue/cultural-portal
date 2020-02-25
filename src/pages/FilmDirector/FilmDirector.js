import React, { Suspense } from 'react';
import { withRouter } from 'react-router-dom';
import { withTranslation, useTranslation } from 'react-i18next';
import data from '../../data/dataFilmDirectors.json';

const FilmDirectorEl = props => {
  const id = props.match.params.id - 1;
  const { t } = useTranslation();

  return <h1>Hello {data[id].name}</h1>;
};

const FilmDirectorComponent = withTranslation()(withRouter(FilmDirectorEl));

export default function FilmDirector() {
  return (
    <Suspense fallback="loading">
      <FilmDirectorComponent />
    </Suspense>
  );
}
