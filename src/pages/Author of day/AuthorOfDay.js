import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { withTranslation, useTranslation } from 'react-i18next';
import './AuthorOfDay.scss';
import dataFilmDirectors from '../../data/dataFilmDirectors.json';
import Timeline from '../../components/Timeline/Timeline';

const InitAuthorOfDay = () => {
    const { t } = useTranslation();
    const authorOfDay = dataFilmDirectors[0];
    // console.log(authorOfDay);
    return (
        <div className="wrapper">
            <div className="author">
              <div className="author--short_description">
                <img src={authorOfDay.photo} alt="author photo" className="author--short_description-img"></img>
                <div className="author--short_description-name">{t('Khashchavatski name')} ({t('Khashchavatski city')})</div>
                <div className="author--short_description-date">{authorOfDay.dateOfLife}</div>
                <div className="author--short_description-info">{t('Khashchavatski description')}</div>
              </div>
              <Timeline author={authorOfDay} />
            </div>
        </div>
    );
  };

InitAuthorOfDay.propsTypes = {
    children: PropTypes.node
};

const AuthorOfDayComponent = withTranslation()(InitAuthorOfDay);

export default function AuthorOfDay() {
    return (
        <Suspense fallback="loading">
          <AuthorOfDayComponent />
        </Suspense>
      );
}
