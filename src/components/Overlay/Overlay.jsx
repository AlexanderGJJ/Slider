import React from 'react';
import classes from './Overlay.module.css';

const Overlay = (props) => {
    const closeModalHandler = () => props.click(false);

    return (
        <div
            className={classes.overlay}
            onClick={closeModalHandler}
            style={{display: props.show ? 'block' : 'none'}}>
            {props.children}
        </div>
    )
};

export default Overlay;
