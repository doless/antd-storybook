import React from 'react';
import ReactDOM from 'react-dom';
import './colorful.css';

import { Badge, Divider } from 'antd';

const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
];

/**
 * 
 * 我们添加了多种预设色彩的徽标样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。
 * 
 * 
 * 
 * We preset a series of colorful Badge styles for use in different situations. You can also set it to a hex color string for custom color.
 * 
 * 
 */
export const colorful = () => {
	return ReactDOM.render(
	  <>
	    <Divider orientation="left">Presets</Divider>
	    <div>
	      {colors.map(color => (
	        <div key={color}>
	          <Badge color={color} text={color} />
	        </div>
	      ))}
	    </div>
	    <Divider orientation="left">Custom</Divider>
	    <>
	      <Badge color="#f50" text="#f50" />
	      <br />
	      <Badge color="#2db7f5" text="#2db7f5" />
	      <br />
	      <Badge color="#87d068" text="#87d068" />
	      <br />
	      <Badge color="#108ee9" text="#108ee9" />
	    </>
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Badge',
	component: Badge,
}