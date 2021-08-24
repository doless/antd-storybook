import React from 'react';
import ReactDOM from 'react-dom';

import { Select } from 'antd';

const { Option } = Select;

/**
 * 
 * 无边框样式。
 * 
 * 
 * 
 * Bordered-less style component.
 * 
 * 
 */
export const bordered_demo = () => {
	return ReactDOM.render(
	  <>
	    <Select defaultValue="lucy" style={{ width: 120 }} bordered={false}>
	      <Option value="jack">Jack</Option>
	      <Option value="lucy">Lucy</Option>
	      <Option value="Yiminghe">yiminghe</Option>
	    </Select>
	    <Select defaultValue="lucy" style={{ width: 120 }} disabled bordered={false}>
	      <Option value="lucy">Lucy</Option>
	    </Select>
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Select',
	component: Select,
}