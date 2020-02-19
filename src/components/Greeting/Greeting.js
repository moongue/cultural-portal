import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { withTranslation, useTranslation } from 'react-i18next';
import './Greeting.scss';
import img from '../../assets/header-bg.jpg';

const GreetingEl = () => {
  const { t } = useTranslation();
  return (
    <div className="wrapper">
      <div className="Greeting">
        <div className="Description">
          <h1>{t('Filmmaker')}</h1>
          <p>{t('DescriptionMainPage')}</p>
        </div>
        <div className="Wrap-img">
          <img src={img} alt="Welcome" />
        </div>
      </div>
    </div>
  );
};

GreetingEl.propsTypes = {
  children: PropTypes.node
};

const GreetingComponent = withTranslation()(GreetingEl);

export default function Greeting() {
  return (
    <Suspense fallback="loading">
      <GreetingComponent />
    </Suspense>
  );
}
