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
      currentSlide: 0
    };
  }

  componentDidMount() {
    getImages();
  }

  click = () => {
    console.log('click');
  }

  render() {
    return (
        <div className='slider'>
          <Gallery />
          <div className={classes.sliderContainer}>
            <Control left click={this.click}/>
            <SliderList />
            <Control click={this.click} />
          </div>
          <Modal />
        </div>
    )
  }
}

export default Slider;
