import React from 'react';
import ReactDOM from 'react-dom';
import './colorful.css';

import { Tooltip, Button, Divider } from 'antd';

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
const customColors = ['#f50', '#2db7f5', '#87d068', '#108ee9'];

/**
 * 
 * 我们添加了多种预设色彩的文字提示样式，用作不同场景使用。
 * 
 * 
 * 
 * We preset a series of colorful Tooltip styles for use in different situations.
 * 
 * 
 */
export const colorful = () => {
	return ReactDOM.render(
	  <>
	    <Divider orientation="left">Presets</Divider>
	    <div>
	      {colors.map(color => (
	        <Tooltip title="prompt text" color={color} key={color}>
	          <Button>{color}</Button>
	        </Tooltip>
	      ))}
	    </div>
	    <Divider orientation="left">Custom</Divider>
	    <div>
	      {customColors.map(color => (
	        <Tooltip title="prompt text" color={color} key={color}>
	          <Button>{color}</Button>
	        </Tooltip>
	      ))}
	    </div>
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Tooltip',
	component: Tooltip,
}