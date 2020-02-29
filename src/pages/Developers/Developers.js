import React, { Suspense } from 'react';
import { withTranslation, useTranslation } from 'react-i18next';
import CardGalleryFlip from '../../components/Developers/Card-gallery-flip';
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
            github={card.github}
            description={t(card.description)}
            contrib={t('contrib')}
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
