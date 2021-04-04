import React from 'react';
import classes from './Control.module.css';

const isDisabled = (type, currentPosition, maxPosition) => {
    if (type === 'prev') {
        return currentPosition === 0;
    } else {
        return currentPosition === maxPosition;
    }
};

const Control = (props) => {
    const carouselWidthInView = props.data?.countItemsInView * props.data?.imgWidth;
    const maxCarouselPosition = -Math.abs((props.data?.imagesCount * props.data?.imgWidth) - carouselWidthInView);
    const btnClasses = [classes.controlBtn, props.type === 'prev' ? classes.controlBtnPrev : null].join(' ');
    return (
        <button
            disabled={isDisabled(props.type, props.carouselPosition, maxCarouselPosition)}
            className={btnClasses}
            aria-label='Переключение слайда'
            onClick={() => props.click(props.type)}
        />
    )
};

export default Control;
