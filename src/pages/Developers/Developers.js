import React, { Suspense } from 'react';
import { withTranslation, useTranslation } from 'react-i18next';
import CardGallery from '../../components/UI/Cards/Card-gallery';
import data from '../../data/dataDevelopers.json';
//import './FilmDirectorsList.scss';

export const DevelopersListEl = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="Directors-list">
        {data.map(card => (
          <CardGallery
            key={card.id}
            id={card.id}
            img={card.photo}
            name={t(card.name)}
            city={t(card.city)}
          />
        ))}
      </div>
    </>
  );
};

const DevelopersListComponent = withTranslation()(DevelopersListEl);

export default function DevelopersList() {
  return (
    <Suspense fallback="loading">
      <DevelopersListComponent />
    </Suspense>
  );
}
