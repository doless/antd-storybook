import React from 'react';
import ReactDOM from 'react-dom';

import { Slider } from 'antd';

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
 * 使用 `marks` 属性标注分段式滑块，使用 `value` / `defaultValue` 指定滑块位置。当 `included=false` 时，表明不同标记间为并列关系。当 `step=null` 时，Slider 的可选值仅有 `marks` 标出来的部分。
 * 
 * 
 * 
 * Using `marks` property to mark a graduated slider, use `value` or `defaultValue` to specify the position of thumb. When `included` is false, means that different thumbs are coordinative. when `step` is null, users can only slide the thumbs onto marks.
 * 
 * 
 */
export const mark_demo = () => {
	return ReactDOM.render(
	  <>
	    <h4>included=true</h4>
	    <Slider marks={marks} defaultValue={37} />
	    <Slider range marks={marks} defaultValue={[26, 37]} />
	
	    <h4>included=false</h4>
	    <Slider marks={marks} included={false} defaultValue={37} />
	
	    <h4>marks & step</h4>
	    <Slider marks={marks} step={10} defaultValue={37} />
	
	    <h4>step=null</h4>
	    <Slider marks={marks} step={null} defaultValue={37} />
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Slider',
	component: Slider,
}