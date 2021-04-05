import React from 'react';
import Overlay from '../Overlay/Overlay';
import classes from './Modal.module.css';

const Modal = (props) => (
    <Overlay show={props.show} click={props.closeModal}>
      <div className={classes.modal}>
        <div className={classes.wrapper}  style={{ backgroundImage: `url(${props.currentImg})`}} />
        <img width="700" src={props.currentImg} alt=""/>
      </div>
    </Overlay>
);

export default Modal;
