import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

/**
 * 
 * 带有文字和图标。
 * 
 * 
 * 
 * With text and icon.
 * 
 * 
 */
export const text = () => {
	return ReactDOM.render(
	  <>
	    <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked />
	    <br />
	    <Switch checkedChildren="1" unCheckedChildren="0" />
	    <br />
	    <Switch
	      checkedChildren={<CheckOutlined />}
	      unCheckedChildren={<CloseOutlined />}
	      defaultChecked
	    />
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Switch',
	component: Switch,
}