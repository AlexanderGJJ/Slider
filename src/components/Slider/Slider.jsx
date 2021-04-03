import React from 'react';
import Control from '../Control/Control';
import SliderList from '../Slider/SliderList/SliderList';
import Gallery from './Gallery/Gallery';
import Modal from '../Modal/Modal';
import classes from './Slider.module.css';
import getImages from '../../api';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesColl: [],
      images: {
        prevSlide: null,
        currentSlide: null,
        nextSlide: null
      },
      isModalShow: false,
      carouselPosition: 0
    };
  }

  async componentDidMount() {
    const imagesColl = await getImages();
    this.setState({
      imagesColl,
      images: {
        prevSlide: imagesColl[imagesColl.length - 1],
        currentSlide: imagesColl[0],
        nextSlide: imagesColl[1]
      }
    })
  }

  setActiveSlide = (slideIndex) => {
    const { imagesColl } = this.state;
    const prevSlide = imagesColl[slideIndex - 1] ? imagesColl[slideIndex - 1] : imagesColl[imagesColl.length - 1];
    const nextSlide = imagesColl[slideIndex + 1] ? imagesColl[slideIndex + 1] : imagesColl[0];
    this.setState({
      images: {
        prevSlide: prevSlide,
        currentSlide:  imagesColl[slideIndex],
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
    const currentCarouselPosition = this.state.carouselPosition;
    let newCarouselPosition;

    if (controlSide === 'left') { //лучше через пропс prev next
      newCarouselPosition = currentCarouselPosition + imgOuterWidth //перемотка на n элементов
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
              images={this.state.imagesColl}
          />
          <div className={classes.sliderContainer}>
            <Control side='left' click={this.sliderCarouselHandler} />
            <div className={classes.sliderCarousel}>
              <SliderList
                  carouselPosition={this.state.carouselPosition}
                  images={this.state.imagesColl}
                  click={this.setActiveSlide}
              />
            </div>
            <Control side='right' click={this.sliderCarouselHandler} />
          </div>
          <Modal
              currentImg={this.state.images.currentSlide?.src}
              show={this.state.isModalShow}
              closeModal={this.modalHandler}
          />
        </div>
    )
  }
}

export default Slider;
