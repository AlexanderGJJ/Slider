import React from 'react';
import classes from './Gallery.module.css';

const Gallery = (props) => {
  const { prevSlide, currentSlide, nextSlide } = props.galleryImages;
  const prevGalleryItemIndex = props.images.findIndex((item) => item.id === prevSlide.id);
  const nextGalleryItemIndex = props.images.findIndex((item) => item.id === nextSlide.id);

  const setPrevSlideActive = () => props.setActiveSlide(prevGalleryItemIndex, 'prev');
  const setNextSlideActive = () => props.setActiveSlide(nextGalleryItemIndex, 'next');
  const openModal = () => props.openModal(true);

  return (
      <ul className={classes.gallery}>
        <li className={classes.galleryItem} onClick={setPrevSlideActive}>
          <img src={prevSlide?.src} width="200" height="200" alt=""/>
        </li>
        <li className={[classes.galleryItem, 'active'].join(' ')} onClick={openModal}>
          <img src={currentSlide?.src} width="250" height="250" alt=""/>
        </li>
        <li className={classes.galleryItem} onClick={setNextSlideActive}>
          <img src={nextSlide?.src} width="200" height='200' alt=""/>
        </li>
      </ul>
  );
};

export default Gallery;
