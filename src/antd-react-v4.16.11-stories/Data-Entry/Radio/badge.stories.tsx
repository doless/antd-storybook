import React from 'react';
import ReactDOM from 'react-dom';

import { Radio, Badge } from 'antd';

/**
 * 
 * 测试 Badge 的样式。
 * 
 * 
 * 
 * Test Badge style.
 * 
 * 
 */
export const badge = () => {
	return ReactDOM.render(
	  <Radio.Group buttonStyle="solid">
	    <Badge count={1}>
	      <Radio.Button value={1}>Click Me</Radio.Button>
	    </Badge>
	    <Badge count={2}>
	      <Radio.Button value={2}>Not Me</Radio.Button>
	    </Badge>
	  </Radio.Group>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Radio',
	component: Radio,
}