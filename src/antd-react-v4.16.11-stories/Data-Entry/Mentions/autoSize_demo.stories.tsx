import React from 'react';
import ReactDOM from 'react-dom';

import { Mentions } from 'antd';

const { Option } = Mentions;

/**
 * 
 * 自适应内容高度。
 * 
 * 
 * 
 * Height autoSize.
 * 
 * 
 */
export const autoSize_demo = () => {
	return ReactDOM.render(
	  <Mentions autoSize style={{ width: '100%' }}>
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