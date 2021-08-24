import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { SmileTwoTone, HeartTwoTone, CheckCircleTwoTone } from '@ant-design/icons';

/**
 * 
 * 双色图标可以通过 `twoToneColor` 属性设置主题色。
 * 
 * 
 * 
 * You can set `twoToneColor` prop to specific primary color for two-tone icons.
 * 
 * 
 */
export const two_tone = () => {
	return ReactDOM.render(
	  <div className="icons-list">
	    <SmileTwoTone />
	    <HeartTwoTone twoToneColor="#eb2f96" />
	    <CheckCircleTwoTone twoToneColor="#52c41a" />
	  </div>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/General/Icon',
	component: Icon,
}