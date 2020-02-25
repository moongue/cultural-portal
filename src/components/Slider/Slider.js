import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import AwsSliderStyles from './Slider.scss';

const Slider = (props) => {
  const { galery } = props.author;
  return (
    <AwesomeSlider className='slider' cssModule={AwsSliderStyles}>
      {galery.map( (e, i) => <div data-src={e} alt='img' key={i}/>)}
    </AwesomeSlider>
  )
}

export default Slider;
