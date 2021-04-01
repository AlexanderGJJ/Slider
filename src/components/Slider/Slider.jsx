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
        prevSlide: images[images.length - 1].src,
        currentSlide: images[4].src,
        nextSlide: images[1].src
      },
      isModalShow: false
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
        prevSlide: prevSlide.src,
        currentSlide:  images[slideIndex].src,
        nextSlide: nextSlide.src
      }
    });
  }

  openModalHandler = () => {
    this.setState({
      isModalShow: true
    })
  };

  closeModalHandler = () => {
    this.setState({
      isModalShow: false
    })
  }

  render() {
    return (
        <div className='slider'>
          <Gallery
              openModal={this.openModalHandler}
              setActiveSlide={() => 1}
              images={this.state.images}
          />
          <div className={classes.sliderContainer}>
            <Control left click={this.click}/>
            <SliderList images={images} click={this.setActiveSlide} />
            <Control click={this.click} />
          </div>
          <Modal
              currentImg={this.state.images.currentSlide}
              show={this.state.isModalShow}
              closeModal={this.closeModalHandler}
          />
        </div>
    )
  }
}

export default Slider;
