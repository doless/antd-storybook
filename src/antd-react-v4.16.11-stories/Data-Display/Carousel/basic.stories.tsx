import React from 'react';
import ReactDOM from 'react-dom';

import { Carousel } from 'antd';

function onChange(a, b, c) {
  console.log(a, b, c);
}

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

/**
 * 
 * 最简单的用法。
 * 
 * 
 * 
 * Basic usage.
 * 
 * 
 */
export const basic = () => {
	return ReactDOM.render(
	  <Carousel afterChange={onChange}>
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