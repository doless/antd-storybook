import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Select } from 'antd';
import { SmileOutlined, MehOutlined } from '@ant-design/icons';

const smileIcon = <SmileOutlined />;
const mehIcon = <MehOutlined />;
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
export const suffix_demo = () => {
	return ReactDOM.render(
	  <>
	    <Select
	      suffixIcon={smileIcon}
	      defaultValue="lucy"
	      style={{ width: 120 }}
	      onChange={handleChange}
	    >
	      <Option value="jack">Jack</Option>
	      <Option value="lucy">Lucy</Option>
	      <Option value="disabled" disabled>
	        Disabled
	      </Option>
	      <Option value="Yiminghe">yiminghe</Option>
	    </Select>
	    <Select suffixIcon={mehIcon} defaultValue="lucy" style={{ width: 120 }} disabled>
	      <Option value="lucy">Lucy</Option>
	    </Select>
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Select',
	component: Select,
}