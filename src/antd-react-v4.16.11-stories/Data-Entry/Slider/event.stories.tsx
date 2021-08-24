import React from 'react';
import ReactDOM from 'react-dom';

import { Slider } from 'antd';

function onChange(value) {
  console.log('onChange: ', value);
}

function onAfterChange(value) {
  console.log('onAfterChange: ', value);
}

/**
 * 
 * 当 Slider 的值发生改变时，会触发 `onChange` 事件，并把改变后的值作为参数传入。在 `onmouseup` 时，会触发 `onAfterChange` 事件，并把当前值作为参数传入。
 * 
 * 
 * 
 * The `onChange` callback function will fire when the user changes the slider's value. The `onAfterChange` callback function will fire when `onmouseup` fired.
 * 
 * 
 */
export const event = () => {
	return ReactDOM.render(
	  <>
	    <Slider defaultValue={30} onChange={onChange} onAfterChange={onAfterChange} />
	    <Slider
	      range
	      step={10}
	      defaultValue={[20, 50]}
	      onChange={onChange}
	      onAfterChange={onAfterChange}
	    />
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Slider',
	component: Slider,
}