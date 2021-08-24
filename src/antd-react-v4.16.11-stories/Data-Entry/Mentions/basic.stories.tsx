import React from 'react';
import ReactDOM from 'react-dom';

import { Mentions } from 'antd';

const { Option } = Mentions;

function onChange(value) {
  console.log('Change:', value);
}

function onSelect(option) {
  console.log('select', option);
}

/**
 * 
 * 基本使用。
 * 
 * 
 * 
 * Basic usage.
 * 
 * 
 */
export const basic = () => {
	return ReactDOM.render(
	  <Mentions
	    style={{ width: '100%' }}
	    onChange={onChange}
	    onSelect={onSelect}
	    defaultValue="@afc163"
	  >
	    <Option value="afc163">afc163</Option>
	    <Option value="zombieJ">zombieJ</Option>
	    <Option value="yesmeck">yesmeck</Option>
	  </Mentions>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Mentions',
	component: Mentions,
}