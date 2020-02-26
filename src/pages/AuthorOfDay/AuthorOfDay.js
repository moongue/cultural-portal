import React, { Suspense } from 'react';
import Bounce from 'react-reveal/Bounce';
import Flip from 'react-reveal/Flip';
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
      <Flip top>
        <h2>{t('Author of the day')}</h2>
      </Flip>
      <div className="wrap-author-day">
        <Bounce left>
          <img
            className="img-author-day"
            src={data[id].photo}
            alt={data[id].name}
          />
        </Bounce>
        <Bounce right>
          <div className="description-author-day">
            <h2 style={{ textAlign: 'left' }}>{t(data[id].name)}</h2>
            <p>{data[id].dateOfLife}</p>
            <p>{t(data[id].description)}</p>
            <Link to={`film-directors/${id + 1}`}>
              <SmallButton onClick={() => false} text={t('More')}/>
            </Link>
          </div>
        </Bounce>
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
