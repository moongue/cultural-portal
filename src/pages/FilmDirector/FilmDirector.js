import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import Bounce from 'react-reveal/Bounce';
import { withRouter } from 'react-router-dom';
import { withTranslation, useTranslation } from 'react-i18next';
import './FilmDirector.scss';
import dataFilmDirectors from '../../data/dataFilmDirectors.json';
import TimelineOfAuthor from '../../components/Timeline/Timeline';
import MySlider from '../../components/Slider/Slider';
import MyMap from '../../components/Map/Map';
import Player from '../../components/Player/Player';
import MyCollapse from '../../components/Collapse/Collapse';

const InitAuthorOfDay = props => {
  const { t } = useTranslation();
  const id = props.match.params.id - 1;
  const authorOfDay = dataFilmDirectors[id];
  return (
    <div className="author">
      <div className="author-top">
        <Bounce left>
          <div className="author--short_description">
            <img
              src={authorOfDay.photo}
              alt="author"
              className="author--short_description-img"
            />
            <p className="author--short_description-name">
              {t(authorOfDay.name)} ({t(authorOfDay.city)})
            </p>
            <p className="author--short_description-date">
              {authorOfDay.dateOfLife}
            </p>
            <p className="author--short_description-info">
              {t(authorOfDay.description)}
            </p>
          </div>
        </Bounce>
        <TimelineOfAuthor author={authorOfDay} />
      </div>
      <MySlider author={authorOfDay} />
      <MyCollapse
        list={authorOfDay.works}
        tittle={t('Works')}
        content="works"
        t={t}
      />
      <MyCollapse
        list={authorOfDay.awards}
        tittle={t('Awards')}
        content="awards"
        t={t}
      />
      <Player youtube={authorOfDay.youtube} />
      <MyMap map={authorOfDay.map} />
    </div>
  );
};

InitAuthorOfDay.propsTypes = {
  children: PropTypes.node
};

const AuthorOfDayComponent = withTranslation()(withRouter(InitAuthorOfDay));

export default function AuthorOfDay() {
  return (
    <Suspense fallback="loading">
      <AuthorOfDayComponent />
    </Suspense>
  );
}
