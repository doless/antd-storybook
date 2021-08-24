import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

/**
 * 
 * 我们为 `<Input />` 输入框定义了三种尺寸（大、默认、小），高度分别为 `40px`、`32px` 和 `24px`。
 * 
 * 
 * 
 * There are three sizes of an Input box: `large` (40px), `default` (32px) and `small` (24px).
 * 
 * 
 */
export const size_demo = () => {
	return ReactDOM.render(
	  <>
	    <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
	    <br />
	    <br />
	    <Input placeholder="default size" prefix={<UserOutlined />} />
	    <br />
	    <br />
	    <Input size="small" placeholder="small size" prefix={<UserOutlined />} />
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Input',
	component: Input,
}