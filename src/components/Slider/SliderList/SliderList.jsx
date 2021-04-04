import React from 'react';
import SliderItem from '../SliderItem/SliderItem';
import classes from './SliderList.module.css';

const sliderList = (props) => {
  const slidesCount = props.itemsInView.count;
  const outerImgWidth = props.itemsInView.itemOuterWidth;
  const carouselPosition = props.carouselPosition;
  const lastMarginInView = 15;

  const slides = props.images.map((img, index) =>
      <SliderItem
          key={img.id}
          index={index}
          src={img.src}
          width="70" height="70"
          click={props.click}
      />);
  return (
      <ul
          className={classes.sliderList}
          style={{
            transform: `translateX(${carouselPosition}px)`,
            width: `${(slidesCount * outerImgWidth) - lastMarginInView}px`
          }}>
        {slides}
      </ul>
  );
};

export default sliderList;
