import React from 'react';

const SliderItem = (props) => {
    const setActiveSlide = () => props.click(props.index, 'setActive');
    return (
        <li onClick={setActiveSlide}>
            <img src={props.src} width={props.height} height={props.height} alt=""/>
        </li>
    );
};

export default SliderItem;
