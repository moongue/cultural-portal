import React, { Suspense } from 'react';
import { withTranslation, useTranslation } from 'react-i18next';
import CardGalleryFlip from '../../components/UI/Cards/Card-gallery-flip';
import data from '../../data/dataDevelopers.json';
import './Developers.scss';

export const DevelopersListEl = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="developers-list">
        {data.map(card => (
          <CardGalleryFlip
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
