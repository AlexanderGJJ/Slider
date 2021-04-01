import React from 'react';
import classes from './Overlay.module.css';

const overlay = (props) => (
    <div
        className={classes.overlay}
        onClick={() => props.click(false)}
        style={{ display: props.show ? 'block' : 'none' }}>
      {props.children}
    </div>
);

export default overlay;
