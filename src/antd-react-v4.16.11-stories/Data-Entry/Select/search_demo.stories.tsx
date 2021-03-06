import React from 'react';
import ReactDOM from 'react-dom';

import { Select } from 'antd';

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}

/**
 * 
 * 展开后可对选项进行搜索。
 * 
 * 
 * 
 * Search the options while expanded.
 * 
 * 
 */
export const search_demo = () => {
	return ReactDOM.render(
	  <Select
	    showSearch
	    style={{ width: 200 }}
	    placeholder="Select a person"
	    optionFilterProp="children"
	    onChange={onChange}
	    onFocus={onFocus}
	    onBlur={onBlur}
	    onSearch={onSearch}
	    filterOption={(input, option) =>
	      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
	    }
	  >
	    <Option value="jack">Jack</Option>
	    <Option value="lucy">Lucy</Option>
	    <Option value="tom">Tom</Option>
	  </Select>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Select',
	component: Select,
}