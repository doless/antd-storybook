import React from 'react';
import ReactDOM from 'react-dom';

import { Checkbox, Radio, Space } from 'antd';

const sharedStyle: React.CSSProperties = {
  border: '1px solid red',
  marginBottom: 16,
};

/**
 * 
 * 同行布局
 * 
 * 
 * 
 * Same line
 * 
 * 
 */
export const debug_line = () => {
	return ReactDOM.render(
	  <div>
	    <Space style={sharedStyle} align="center">
	      <Checkbox value="light" />
	      <div>Bamboo</div>
	      <Checkbox value="little">Little</Checkbox>
	    </Space>
	
	    <Space style={sharedStyle} align="center">
	      <Radio value="light" />
	      <div>Bamboo</div>
	      <Radio value="little">Little</Radio>
	    </Space>
	
	    <div
	      style={{
	        ...sharedStyle,
	        display: 'flex',
	        alignItems: 'center',
	      }}
	    >
	      <Checkbox value="light" />
	      <div>Bamboo</div>
	      <Checkbox value="little">Little</Checkbox>
	    </div>
	
	    <div
	      style={{
	        ...sharedStyle,
	        display: 'flex',
	        alignItems: 'center',
	      }}
	    >
	      <Radio value="light" />
	      <div>Bamboo</div>
	      <Radio value="little">Little</Radio>
	    </div>
	  </div>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Checkbox',
	component: Checkbox,
}