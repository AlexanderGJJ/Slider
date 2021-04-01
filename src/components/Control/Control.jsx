import React from 'react';
import classes from './Control.module.css';

const control = (props) => {
    const btnClasses = [classes.controlBtn, props.side === 'left' ? classes.controlBtnLeft : null].join(' ');
    return (
        <button
            className={btnClasses}
            aria-label='Переключение слайда'
            onClick={() => props.click(props.side)}
        />
    )
};

export default control;
