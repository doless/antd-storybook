import React from 'react';
import ReactDOM from 'react-dom';

import { Select } from 'antd';

const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

/**
 * 
 * tags select，随意输入的内容（scroll the menu）。
 * 
 * 
 * 
 * Select with tags, transform input to tag (scroll the menu).
 * 
 * 
 */
export const tags_demo = () => {
	return ReactDOM.render(
	  <Select mode="tags" style={{ width: '100%' }} placeholder="Tags Mode" onChange={handleChange}>
	    {children}
	  </Select>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Select',
	component: Select,
}