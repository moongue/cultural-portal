import React from 'react';
import { useTranslation } from 'react-i18next';
import { YMaps, Map } from 'react-yandex-maps';
import './Map.scss';

const MyMap = ({ map }) => {
  const { t } = useTranslation();
  return (
    <div className="map">
      <div className="map--title">{t('Map')}</div>
      <YMaps
        enterprise
        query={{
          apikey: '771966d7-3137-43b4-bb31-c414aaac9510'
        }}
      >
        <Map state={map} className="map--content" />
      </YMaps>
    </div>
  );
};

export default MyMap;
