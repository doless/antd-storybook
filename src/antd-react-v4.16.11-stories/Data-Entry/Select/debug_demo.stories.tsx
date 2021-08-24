import React from 'react';
import ReactDOM from 'react-dom';

import { Select, Input, Button } from 'antd';

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
export const debug_demo = () => {
	return ReactDOM.render(
	  <div
	    style={{
	      width: 500,
	      position: 'relative',
	      zIndex: 1,
	      border: '1px solid red',
	      background: '#FFF',
	    }}
	  >
	    <Input style={{ width: 100 }} value="222" />
	    <Select style={{ width: 120 }} onChange={handleChange} showSearch placeholder="233">
	      <Option value="jack">Jack</Option>
	      <Option value="lucy">Lucy</Option>
	      <Option value="disabled" disabled>
	        Disabled
	      </Option>
	      <Option value="Yiminghe">yiminghe</Option>
	      <Option value="long">I am super super long!</Option>
	    </Select>
	    <Select
	      mode="multiple"
	      style={{ width: 120 }}
	      defaultValue={['lucy']}
	      onChange={handleChange}
	      showSearch
	      placeholder="233"
	    >
	      <Option value="jack">Jack</Option>
	      <Option value="lucy">Lucy</Option>
	      <Option value="disabled" disabled>
	        Disabled
	      </Option>
	      <Option value="Yiminghe">yiminghe</Option>
	      <Option value="long">I am super super long!</Option>
	    </Select>
	    <span className="debug-align">AntDesign</span>
	    <Button>222</Button>
	  </div>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Select',
	component: Select,
}