import React from 'react';
import Overlay from '../Overlay/Overlay';
import classes from './Modal.module.css';

const modal = (props) => (
    <Overlay show={props.show} click={props.closeModal}>
      <div className={classes.modal}>
        <div className={classes.wrapper}  style={{ backgroundImage: `url(${props.currentImg})`}} />
        <img src={props.currentImg} alt=""/>
      </div>
    </Overlay>
);

export default modal;
