import React from 'react';
import ReactDOM from 'react-dom';

import { Mentions } from 'antd';

const { Option } = Mentions;

/**
 * 
 * 向上展开建议。
 * 
 * 
 * 
 * Change the suggestions placement.
 * 
 * 
 */
export const placement_demo = () => {
	return ReactDOM.render(
	  <Mentions style={{ width: '100%' }} placement="top">
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