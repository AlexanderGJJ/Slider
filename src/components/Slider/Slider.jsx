import React from 'react';
import Control from '../Control/Control';
import SliderList from '../Slider/SliderList/SliderList';
import Gallery from './Gallery/Gallery';
import Modal from '../Modal/Modal';
import classes from './Slider.module.css';
import getImages from '../../api';
import images from '../../Images';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: {
        prevSlide: images[images.length - 1],
        currentSlide: images[4],
        nextSlide: images[1]
      },
      isModalShow: false,
      carouselPosition: 0
    };
  }

  componentDidMount() {
    // getImages(); fetch
  }

  setActiveSlide = (slideIndex) => {
    const prevSlide = images[slideIndex - 1] ? images[slideIndex - 1] : images[images.length - 1];
    const nextSlide = images[slideIndex + 1] ? images[slideIndex + 1] : images[0];
    this.setState({
      images: {
        prevSlide: prevSlide,
        currentSlide:  images[slideIndex],
        nextSlide: nextSlide
      }
    });
  }

  modalHandler = (value) => {
    this.setState({
      isModalShow: value
    })
  };

  sliderCarouselHandler = (controlSide) => {
    const imgOuterWidth = 85;
    // const maxLength = images.length * imgOuterWidth;
    const currentCarouselPosition = this.state.carouselPosition;
    let newCarouselPosition;

    if (controlSide === 'left') {
      newCarouselPosition = currentCarouselPosition + imgOuterWidth
    } else {
      newCarouselPosition = currentCarouselPosition - imgOuterWidth
    }

    this.setState({
      carouselPosition: newCarouselPosition
    })
  };

  render() {
    return (
        <div className='slider'>
          <Gallery
              openModal={this.modalHandler}
              setActiveSlide={this.setActiveSlide}
              galeryImages={this.state.images}
              images={images}
          />
          <div className={classes.sliderContainer}>
            <Control side='left' click={this.sliderCarouselHandler} />
            <div className={classes.sliderCarousel}>
              <SliderList carouselPosition={this.state.carouselPosition} images={images} click={this.setActiveSlide} />
            </div>
            <Control side='right' click={this.sliderCarouselHandler} />
          </div>
          <Modal
              currentImg={this.state.images.currentSlide.src}
              show={this.state.isModalShow}
              closeModal={this.modalHandler}
          />
        </div>
    )
  }
}

export default Slider;
