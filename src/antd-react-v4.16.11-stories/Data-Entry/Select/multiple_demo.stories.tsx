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
 * 多选，从已有条目中选择。
 * 
 * 
 * 
 * Multiple selection, selecting from existing items.
 * 
 * 
 */
export const multiple_demo = () => {
	return ReactDOM.render(
	  <>
	    <Select
	      mode="multiple"
	      allowClear
	      style={{ width: '100%' }}
	      placeholder="Please select"
	      defaultValue={['a10', 'c12']}
	      onChange={handleChange}
	    >
	      {children}
	    </Select>
	    <br />
	    <Select
	      mode="multiple"
	      disabled
	      style={{ width: '100%' }}
	      placeholder="Please select"
	      defaultValue={['a10', 'c12']}
	      onChange={handleChange}
	    >
	      {children}
	    </Select>
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Select',
	component: Select,
}