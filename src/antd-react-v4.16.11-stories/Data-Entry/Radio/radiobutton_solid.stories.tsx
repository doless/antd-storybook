import React from 'react';
import ReactDOM from 'react-dom';

import { Radio } from 'antd';

/**
 * 
 * 实色填底的单选按钮样式。
 * 
 * 
 * 
 * Solid radio button style.
 * 
 * 
 */
export const radiobutton_solid = () => {
	return ReactDOM.render(
	  <>
	    <Radio.Group defaultValue="a" buttonStyle="solid">
	      <Radio.Button value="a">Hangzhou</Radio.Button>
	      <Radio.Button value="b">Shanghai</Radio.Button>
	      <Radio.Button value="c">Beijing</Radio.Button>
	      <Radio.Button value="d">Chengdu</Radio.Button>
	    </Radio.Group>
	    <Radio.Group defaultValue="c" buttonStyle="solid" style={{ marginTop: 16 }}>
	      <Radio.Button value="a">Hangzhou</Radio.Button>
	      <Radio.Button value="b" disabled>
	        Shanghai
	      </Radio.Button>
	      <Radio.Button value="c">Beijing</Radio.Button>
	      <Radio.Button value="d">Chengdu</Radio.Button>
	    </Radio.Group>
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Radio',
	component: Radio,
}