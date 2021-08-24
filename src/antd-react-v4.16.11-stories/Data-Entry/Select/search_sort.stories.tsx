import React from 'react';
import ReactDOM from 'react-dom';

import { Select } from 'antd';

const { Option } = Select;

/**
 * 
 * 在搜索模式下对过滤结果项进行排序。
 * 
 * 
 * 
 * Search the options with sorting.
 * 
 * 
 */
export const search_sort = () => {
	return ReactDOM.render(
	  <Select
	    showSearch
	    style={{ width: 200 }}
	    placeholder="Search to Select"
	    optionFilterProp="children"
	    filterOption={(input, option) =>
	      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
	    }
	    filterSort={(optionA, optionB) =>
	      optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
	    }
	  >
	    <Option value="1">Not Identified</Option>
	    <Option value="2">Closed</Option>
	    <Option value="3">Communicated</Option>
	    <Option value="4">Identified</Option>
	    <Option value="5">Resolved</Option>
	    <Option value="6">Cancelled</Option>
	  </Select>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Select',
	component: Select,
}