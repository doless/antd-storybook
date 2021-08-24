import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Input, Tooltip } from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';

/**
 * 
 * 在输入框上添加前缀或后缀图标。
 * 
 * 
 * 
 * Add a prefix or suffix icons inside input.
 * 
 * 
 */
export const presuffix = () => {
	return ReactDOM.render(
	  <>
	    <Input
	      placeholder="Enter your username"
	      prefix={<UserOutlined className="site-form-item-icon" />}
	      suffix={
	        <Tooltip title="Extra information">
	          <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
	        </Tooltip>
	      }
	    />
	    <br />
	    <br />
	    <Input prefix="￥" suffix="RMB" />
	    <br />
	    <br />
	    <Input prefix="￥" suffix="RMB" disabled />
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Input',
	component: Input,
}