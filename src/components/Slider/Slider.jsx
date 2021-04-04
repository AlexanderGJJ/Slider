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
      carouselPosition: 0,
      carouselItemInView: {
        count: 5,
        itemOuterWidth: 85
      }
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
    //вызывать тут функцию карусели, если элемент больше 5; ..можно менять carouselPosition +-5 элементов
    //перематывать на 5шт стразу
    //при carouselPosition 0 блокировать левую кнопку и посчитать макс значение для правой и когда оно будет блокировать ее
  }

  modalHandler = (value) => {
    this.setState({
      isModalShow: value
    })
  };

  sliderCarouselHandler = (type) => {
    const imgOuterWidth = 85;
    const currentCarouselPosition = this.state.carouselPosition;
    let newCarouselPosition;

    if (type === 'prev') {
      newCarouselPosition = currentCarouselPosition + imgOuterWidth;
    } else {
      newCarouselPosition = currentCarouselPosition - imgOuterWidth;
    }

    this.setState({
      carouselPosition: newCarouselPosition
    })
  };

  render() {
    const imgData = {
      countItemsInView: this.state.carouselItemInView.count,
      imgWidth: this.state.carouselItemInView.itemOuterWidth,
      imagesCount: this.state.imagesColl.length
    };

    return (
        <div className="slider">
          <Gallery
              openModal={this.modalHandler}
              setActiveSlide={this.setActiveSlide}
              galeryImages={this.state.images}
              images={this.state.imagesColl}
          />
          <div className={classes.sliderContainer}>
            <Control
                carouselPosition={this.state.carouselPosition}
                type='prev'
                click={this.sliderCarouselHandler}
            />
            <div className={classes.sliderCarousel}>
              <SliderList
                  carouselPosition={this.state.carouselPosition}
                  images={this.state.imagesColl}
                  click={this.setActiveSlide}
                  itemsInView={this.state.carouselItemInView}
              />
            </div>
            <Control
                carouselPosition={this.state.carouselPosition}
                type='next'
                click={this.sliderCarouselHandler}
                data={imgData}
            />
          </div>
          <Modal
              currentImg={this.state.images.currentSlide?.src} // использовать src внутри
              show={this.state.isModalShow}
              closeModal={this.modalHandler}
          />
        </div>
    )
  }
}

export default Slider;
