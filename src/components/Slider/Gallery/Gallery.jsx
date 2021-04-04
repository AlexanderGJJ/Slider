import React from 'react';
import classes from './Gallery.module.css';

const Gallery = (props) => {
  const { prevSlide, currentSlide, nextSlide } = props.galeryImages;
  const prevGalleryItemIndex = props.images.findIndex((item) => item.id === prevSlide.id);
  const nextGalleryItemIndex = props.images.findIndex((item) => item.id === nextSlide.id);
  return (
      <ul className={classes.gallery}>
        <li className={classes.galleryItem} onClick={() => props.setActiveSlide(prevGalleryItemIndex)}>
          <img src={prevSlide?.src} width="200" height="200" alt=""/>
        </li>
        <li className={[classes.galleryItem, 'active'].join(' ')} onClick={() => props.openModal(true)}>
          <img src={currentSlide?.src} width="250" height="250" alt=""/>
        </li>
        <li className={classes.galleryItem} onClick={() => props.setActiveSlide(nextGalleryItemIndex)}>
          <img src={nextSlide?.src} width="200" height='200' alt=""/>
        </li>
      </ul>
  );
};

export default Gallery;
