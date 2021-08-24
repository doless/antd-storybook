import React from 'react';
import ReactDOM from 'react-dom';

import { Slider } from 'antd';

const style = {
  display: 'inline-block',
  height: 300,
  marginLeft: 70,
};

const marks = {
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>100°C</strong>,
  },
};

/**
 * 
 * 垂直方向的 Slider。
 * 
 * 
 * 
 * The vertical Slider.
 * 
 * 
 */
export const vertical_demo = () => {
	return ReactDOM.render(
	  <>
	    <div style={style}>
	      <Slider vertical defaultValue={30} />
	    </div>
	    <div style={style}>
	      <Slider vertical range step={10} defaultValue={[20, 50]} />
	    </div>
	    <div style={style}>
	      <Slider vertical range marks={marks} defaultValue={[26, 37]} />
	    </div>
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Slider',
	component: Slider,
}