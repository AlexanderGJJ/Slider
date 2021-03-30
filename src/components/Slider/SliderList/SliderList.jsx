import React from 'react';
import SliderItem from '../SliderItem/SliderItem';
import classes from './SliderList.module.css';

const sliderList = (props) => {
  const slides = 2312; //тут map  + key
  return (
      <ul className={classes.sliderList}>
        {slides}
      </ul>
  )
};

export default sliderList;
