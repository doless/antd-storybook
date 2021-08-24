import React from 'react';
import ReactDOM from 'react-dom';

import { Select } from 'antd';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

/**
 * 
 * 基本使用。
 * 
 * 
 * 
 * Basic Usage.
 * 
 * 
 */
export const basic = () => {
	return ReactDOM.render(
	  <>
	    <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
	      <Option value="jack">Jack</Option>
	      <Option value="lucy">Lucy</Option>
	      <Option value="disabled" disabled>
	        Disabled
	      </Option>
	      <Option value="Yiminghe">yiminghe</Option>
	    </Select>
	    <Select defaultValue="lucy" style={{ width: 120 }} disabled>
	      <Option value="lucy">Lucy</Option>
	    </Select>
	    <Select defaultValue="lucy" style={{ width: 120 }} loading>
	      <Option value="lucy">Lucy</Option>
	    </Select>
	    <Select defaultValue="lucy" style={{ width: 120 }} allowClear>
	      <Option value="lucy">Lucy</Option>
	    </Select>
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Select',
	component: Select,
}