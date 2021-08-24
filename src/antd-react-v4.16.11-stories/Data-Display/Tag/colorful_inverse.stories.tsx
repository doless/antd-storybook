import React from 'react';
import ReactDOM from 'react-dom';

import { Tag, Divider } from 'antd';

/**
 * 
 * 内部反色标签
 * 
 * 
 * 
 * Internal inverse color tag
 * 
 * 
 */
export const colorful_inverse = () => {
	return ReactDOM.render(
	  <>
	    <Divider orientation="left">Presets Inverse</Divider>
	    <div>
	      <Tag color="magenta-inverse">magenta</Tag>
	      <Tag color="red-inverse">red</Tag>
	      <Tag color="volcano-inverse">volcano</Tag>
	      <Tag color="orange-inverse">orange</Tag>
	      <Tag color="gold-inverse">gold</Tag>
	      <Tag color="lime-inverse">lime</Tag>
	      <Tag color="green-inverse">green</Tag>
	      <Tag color="cyan-inverse">cyan</Tag>
	      <Tag color="blue-inverse">blue</Tag>
	      <Tag color="geekblue-inverse">geekblue</Tag>
	      <Tag color="purple-inverse">purple</Tag>
	    </div>
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Tag',
	component: Tag,
}