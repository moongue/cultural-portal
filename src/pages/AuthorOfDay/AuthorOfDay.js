import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { withTranslation, useTranslation } from 'react-i18next';
import './AuthorOfDay.scss';
import dataFilmDirectors from '../../data/dataFilmDirectors.json';
import TimelineOfAuthor from '../../components/Timeline/Timeline';
import MySlider from '../../components/Slider/Slider';
import MyMap from '../../components/Map/Map.js';
import Player from '../../components/Player/Player';
import MyCollapse from '../../components/Collapse/Collapse';

const InitAuthorOfDay = () => {
    const { t } = useTranslation();
    const authorOfDay = dataFilmDirectors[1];
    return (
        <div className="wrapper">
            <div className="author">
              <div className="author--short_description">
                <img src = { authorOfDay.photo } alt="author photo" className="author--short_description-img" />
                <div className="author--short_description-name">{t(authorOfDay.name)} ({t(authorOfDay.city)})</div>
                <div className="author--short_description-date">{authorOfDay.dateOfLife}</div>
                <div className="author--short_description-info">{t(authorOfDay.description)}</div>
              </div>
              <TimelineOfAuthor author = { authorOfDay } />
              <MySlider author = {authorOfDay }/>
              <MyCollapse list = { authorOfDay.works } tittle = {t('Works')} content = 'works' t = { t }/>
              {/* <MyCollapse list = { authorOfDay.awards } tittle = {t('Awards')} content = 'awards' t = { t }/> */}
              <Player youtube = { authorOfDay.youtube } />
              <MyMap map = {authorOfDay.map }/>
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
