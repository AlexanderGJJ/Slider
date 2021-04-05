import React from 'react';

const SliderItem = (props) => (
    <li onClick={() => props.click(props.index, 'setActive')}>
      <img src={props.src} width={props.height} height={props.height} alt=""/>
    </li>
);

export default SliderItem;
