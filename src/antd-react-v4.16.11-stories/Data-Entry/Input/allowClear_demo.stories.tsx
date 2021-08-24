import React from 'react';
import ReactDOM from 'react-dom';

import { Input } from 'antd';

const { TextArea } = Input;

const onChange = e => {
  console.log(e);
};

/**
 * 
 * 带移除图标的输入框，点击图标删除所有内容。
 * 
 * 
 * 
 * Input box with the remove icon, click the icon to delete everything.
 * 
 * 
 */
export const allowClear_demo = () => {
	return ReactDOM.render(
	  <>
	    <Input placeholder="input with clear icon" allowClear onChange={onChange} />
	    <br />
	    <br />
	    <TextArea placeholder="textarea with clear icon" allowClear onChange={onChange} />
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Input',
	component: Input,
}