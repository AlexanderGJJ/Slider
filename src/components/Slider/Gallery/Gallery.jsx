import React from 'react';
import classes from './Gallery.module.css';

const gallery = (props) => {
  return (
      <ul className={classes.gallery}>
        <li className={classes.galleryItem}>
          <img src="" alt=""/>
        </li>
        <li className={classes.galleryItem}>
          <img src="" alt=""/>
        </li>
        <li className={classes.galleryItem}>
          <img src="" alt=""/>
        </li>
      </ul>
  )
};

export default gallery;
