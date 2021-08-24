import React from 'react';
import ReactDOM from 'react-dom';

import { Slider } from 'antd';

function formatter(value) {
  return `${value}%`;
}

/**
 * 
 * 使用 `tipFormatter` 可以格式化 `Tooltip` 的内容，设置 `tipFormatter={null}`，则隐藏 `Tooltip`。
 * 
 * 
 * 
 * Use `tipFormatter` to format content of `Tooltip`. If `tipFormatter` is null, hide it.
 * 
 * 
 */
export const tip_formatter = () => {
	return ReactDOM.render(
	  <>
	    <Slider tipFormatter={formatter} />
	    <Slider tipFormatter={null} />
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Slider',
	component: Slider,
}