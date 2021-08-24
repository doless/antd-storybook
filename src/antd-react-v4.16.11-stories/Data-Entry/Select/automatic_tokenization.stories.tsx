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
 * 试下复制 `露西,杰克` 并粘贴到输入框里。只在 tags 和 multiple 模式下可用。
 * 
 * 
 * 
 * Try to copy `Lucy,Jack` and paste to the input. Only available in tags and multiple mode.
 * 
 * 
 */
export const automatic_tokenization = () => {
	return ReactDOM.render(
	  <Select mode="tags" style={{ width: '100%' }} onChange={handleChange} tokenSeparators={[',']}>
	    {children}
	  </Select>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Select',
	component: Select,
}