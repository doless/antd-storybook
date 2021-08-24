import React from 'react';
import ReactDOM from 'react-dom';

import { Select } from 'antd';

const { Option, OptGroup } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

/**
 * 
 * 用 `OptGroup` 进行选项分组。
 * 
 * 
 * 
 * Using `OptGroup` to group the options.
 * 
 * 
 */
export const optgroup = () => {
	return ReactDOM.render(
	  <Select defaultValue="lucy" style={{ width: 200 }} onChange={handleChange}>
	    <OptGroup label="Manager">
	      <Option value="jack">Jack</Option>
	      <Option value="lucy">Lucy</Option>
	    </OptGroup>
	    <OptGroup label="Engineer">
	      <Option value="Yiminghe">yiminghe</Option>
	    </OptGroup>
	  </Select>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Select',
	component: Select,
}