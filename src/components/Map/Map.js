import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';
import './Map.scss';

const MyMap = ( {map} ) => {
  return (
    <div className='map'>
      <div className='map--title'>Map</div>
      <YMaps enterprise
        query={{
          apikey: '771966d7-3137-43b4-bb31-c414aaac9510',
        }}
      >
      <Map 
        state={ map } 
        style={ {width: '100%', height: '30vw'} }
      >
      </Map>
      </YMaps>
    </div>
  )
};

export default MyMap;
