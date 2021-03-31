import React from 'react';
import classes from './Gallery.module.css';


const gallery = (props) => {
  return (
      <ul className={classes.gallery}>
        <li className={classes.galleryItem}>
          <img src={props.images.prevSlide} width='200' height='200' alt=""/>
        </li>
        <li className={classes.galleryItem} onClick={props.openModal}>
          <img src={props.images.currentSlide} width='200' height='200' alt=""/>
        </li>
        <li className={classes.galleryItem}>
          <img src={props.images.nextSlide} width='200' height='200' alt=""/>
        </li>
      </ul>
  )
};

export default gallery;
