import React from 'react';
import classes from './Control.module.css';

const control = (props) => {
    const btnClasses = [classes.controlBtn, props.left ? classes.controlBtnLeft : null].join(' ');
    //добавить onClick -> props.click
    return (
        <button
            className={btnClasses}
            aria-label='Переключение слайда'
            onClick={props.click}
        />
    )
};

export default control;
