import React from 'react';

const sliderItem = (props) => (
    <li onClick={props.click(props.id)}>
      <img src={props.src} width={props.height} height={props.height} alt=""/>
    </li>
);
//дописать размеры через стили
export default sliderItem;
