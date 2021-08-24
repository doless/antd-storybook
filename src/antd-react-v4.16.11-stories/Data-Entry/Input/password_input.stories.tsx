import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

/**
 * 
 * 密码框。
 * 
 * 
 * 
 * Input type of password.
 * 
 * 
 */
export const password_input = () => {
	return ReactDOM.render(
	  <Space direction="vertical">
	    <Input.Password placeholder="input password" />
	    <Input.Password
	      placeholder="input password"
	      iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
	    />
	  </Space>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Input',
	component: Input,
}