import React from 'react';
import ReactDOM from 'react-dom';

import { Carousel } from 'antd';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

/**
 * 
 * 定时切换下一张。
 * 
 * 
 * 
 * Timing of scrolling to the next card/picture.
 * 
 * 
 */
export const autoplay_demo = () => {
	return ReactDOM.render(
	  <Carousel autoplay>
	    <div>
	      <h3 style={contentStyle}>1</h3>
	    </div>
	    <div>
	      <h3 style={contentStyle}>2</h3>
	    </div>
	    <div>
	      <h3 style={contentStyle}>3</h3>
	    </div>
	    <div>
	      <h3 style={contentStyle}>4</h3>
	    </div>
	  </Carousel>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Carousel',
	component: Carousel,
}