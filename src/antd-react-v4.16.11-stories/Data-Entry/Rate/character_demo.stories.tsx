import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Rate } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

/**
 * 
 * 可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。
 * 
 * 
 * 
 * Replace the default star to other character like alphabet, digit, iconfont or even Chinese word.
 * 
 * 
 */
export const character_demo = () => {
	return ReactDOM.render(
	  <>
	    <Rate character={<HeartOutlined />} allowHalf />
	    <br />
	    <Rate character="A" allowHalf style={{ fontSize: 36 }} />
	    <br />
	    <Rate character="好" allowHalf />
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Rate',
	component: Rate,
}