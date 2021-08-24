import React from 'react';
import ReactDOM from 'react-dom';

import { Input } from 'antd';

const { TextArea } = Input;

/**
 * 
 * Buggy!
 * 
 * 
 * 
 * Buggy!
 * 
 * 
 */
export const borderless_debug = () => {
	return ReactDOM.render(
	  <div style={{ backgroundColor: 'rgba(0, 0, 128, .2)' }}>
	    <Input placeholder="Unbordered" bordered={false} />
	    <Input placeholder="Unbordered" bordered={false} size="large" />
	    <TextArea placeholder="Unbordered" bordered={false} />
	    <TextArea placeholder="Unbordered" bordered={false} allowClear />
	    <Input placeholder="Unbordered" bordered={false} allowClear />
	    <Input prefix="￥" suffix="RMB" bordered={false} />
	    <Input prefix="￥" suffix="RMB" disabled bordered={false} />
	  </div>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Input',
	component: Input,
}