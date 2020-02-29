import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import AwsSliderStyles from './Slider.scss';

const Slider = props => {
  const { gallery } = props.author;
  return (
    <AwesomeSlider className="slider" cssModule={AwsSliderStyles}>
      {gallery.map((e, i) => (
        <div
          data-src={e}
          alt="img"
          key={i}
          style={{ filter: 'grayscale(1)' }}
        />
      ))}
    </AwesomeSlider>
  );
};

export default Slider;
