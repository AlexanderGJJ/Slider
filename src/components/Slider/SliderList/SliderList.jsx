import React from 'react';
import SliderItem from '../SliderItem/SliderItem';
import classes from './SliderList.module.css';

const sliderList = (props) => {
  const slides = props.images.map((img) =>
      <SliderItem
          key={img.id}
          id={img.id}
          src={img.src}
          width='70' height='70'
          click={props.click}
      />);
  return (
      <ul className={classes.sliderList}>
        {slides}
      </ul>
  )
};

export default sliderList;
