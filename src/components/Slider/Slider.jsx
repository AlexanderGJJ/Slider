import React from 'react';
import Control from '../Control/Control';
import SliderList from '../Slider/SliderList/SliderList';
import Gallery from './Gallery/Gallery';
import Modal from '../Modal/Modal';
import getImages from '../../api';
import classes from './Slider.module.css';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesColl: [],
      galleryImages: {
        prevSlide: null,
        currentSlide: null,
        nextSlide: null
      },
      isModalShow: false,
      carouselPosition: 0,
      carouselItemsInView: {
        count: 5,
        itemOuterWidth: 85
      }
    };
  }

  async componentDidMount() {
    const imagesColl = await getImages();
    this.setState({
      imagesColl,
      galleryImages: {
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
      galleryImages: {
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

  carouselHandler = (type) => {
    const { itemOuterWidth } = this.state.carouselItemsInView;
    const currentCarouselPosition = this.state.carouselPosition;
    let newCarouselPosition;

    if (type === 'prev') {
      newCarouselPosition = currentCarouselPosition + itemOuterWidth;
    } else {
      newCarouselPosition = currentCarouselPosition - itemOuterWidth;
    }

    this.setState({
      carouselPosition: newCarouselPosition
    })
  };

  render() {
    const imgData = {
      countItemsInView: this.state.carouselItemsInView.count,
      imgWidth: this.state.carouselItemsInView.itemOuterWidth,
      imagesCount: this.state.imagesColl.length
    };

    return (
        <div className={classes.slider}>
          <Gallery
              openModal={this.modalHandler}
              setActiveSlide={this.setActiveSlide}
              galleryImages={this.state.galleryImages}
              images={this.state.imagesColl}
          />
          <div className={classes.sliderContainer}>
            <Control
                carouselPosition={this.state.carouselPosition}
                type='prev'
                click={this.carouselHandler}
            />
            <div className={classes.sliderCarousel}>
              <SliderList
                  carouselPosition={this.state.carouselPosition}
                  images={this.state.imagesColl}
                  click={this.setActiveSlide}
                  itemsInView={this.state.carouselItemsInView}
              />
            </div>
            <Control
                carouselPosition={this.state.carouselPosition}
                type='next'
                click={this.carouselHandler}
                data={imgData}
            />
          </div>
          <Modal
              currentImg={this.state.galleryImages.currentSlide?.src}
              show={this.state.isModalShow}
              closeModal={this.modalHandler}
          />
        </div>
    )
  }
}

export default Slider;
