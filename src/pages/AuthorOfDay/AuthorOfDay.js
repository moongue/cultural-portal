import React, { Suspense } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { withTranslation, useTranslation } from 'react-i18next';
import './AuthorOfDay.scss';
import data from '../../data/dataFilmDirectors.json';
import SmallButton from '../../components/UI/Buttons/Small-button';

const FilmDirectorEl = () => {
  const id = 4;
  const { t } = useTranslation();

  return (
    <div className="author-day">
      <h2>{t('Author of the day')}</h2>
      <div className="wrap-author-day">
        <img
          className="img-author-day"
          src={data[id].photo}
          alt={data[id].name}
        />
        <div className="description-author-day">
          <h2 style={{ textAlign: 'left' }}>{t(data[id].name)}</h2>
          <p>{data[id].dateOfLife}</p>
          <p>{t(data[id].description)}</p>
          <Link to={`film-directors/${id}`}>
            <SmallButton onClick={() => false} text={t('More')}/>
          </Link>
        </div>
      </div>
    </div>
  );
};

const AuthorOfDayComponent = withTranslation()(withRouter(FilmDirectorEl));

export default function AuthorOfDay() {
  return (
    <Suspense fallback="loading">
      <AuthorOfDayComponent />
    </Suspense>
  );
};
