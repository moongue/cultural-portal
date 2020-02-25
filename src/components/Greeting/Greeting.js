import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withTranslation, useTranslation } from 'react-i18next';
import SmallButton from '../UI/Buttons/Small-button';
import './Greeting.scss';
import img from '../../assets/header-bg.jpg';

const GreetingEl = () => {
  const { t } = useTranslation();
  return (
    <div className="Greeting">
      <div className="Description">
        <h1>{t('Filmmaker')}</h1>
        <p>{t('DescriptionMainPage')}</p>
        <Link to="/film-directors">
          <SmallButton onClick={() => false} text={t("Let's go")} />
        </Link>
      </div>
      <div className="Wrap-img">
        <img src={img} alt="Welcome" />
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
