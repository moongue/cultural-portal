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
import FilmmakerCardProfile from '../../components/UI/Card/CardProfile';

const InitAuthorOfDay = props => {
  const { t } = useTranslation();
  const id = props.match.params.id - 1;
  const authorOfDay = dataFilmDirectors[id];
  return (
    <div className="author">
      <div className="author-top">
        <Bounce left>
          <FilmmakerCardProfile
            img={authorOfDay.photo}
            name={t(authorOfDay.name)}
            city={t(authorOfDay.city)}
            years={authorOfDay.dateOfLife}
            description={t(authorOfDay.description)}
          />
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
