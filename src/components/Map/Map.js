import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import './Map.scss';

const MyMap = ({ map }) => {
  const { t } = useTranslation();
  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoibGFuc3lmb25zZWthIiwiYSI6ImNrNzRrNjJ1MTBta3UzZ3QwMHpienluYWIifQ.Pyvr3AoV8mZB0_FgLwF28Q'
  });
  return (
    <div className="map">
      <div className="map--title">{t('Map')}</div>
      <Map
        style="mapbox://styles/mapbox/dark-v10"
        center={map.center}
        zoom={[10]}
        className="map--content"
      />
    </div>
  );
};

export default MyMap;
