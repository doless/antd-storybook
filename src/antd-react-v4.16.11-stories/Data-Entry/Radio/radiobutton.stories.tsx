import React from 'react';
import ReactDOM from 'react-dom';

import { Radio } from 'antd';

function onChange(e) {
  console.log(`radio checked:${e.target.value}`);
}

/**
 * 
 * 按钮样式的单选组合。
 * 
 * 
 * 
 * The combination of radio button style.
 * 
 * 
 */
export const radiobutton = () => {
	return ReactDOM.render(
	  <>
	    <Radio.Group onChange={onChange} defaultValue="a">
	      <Radio.Button value="a">Hangzhou</Radio.Button>
	      <Radio.Button value="b">Shanghai</Radio.Button>
	      <Radio.Button value="c">Beijing</Radio.Button>
	      <Radio.Button value="d">Chengdu</Radio.Button>
	    </Radio.Group>
	    <Radio.Group onChange={onChange} defaultValue="a" style={{ marginTop: 16 }}>
	      <Radio.Button value="a">Hangzhou</Radio.Button>
	      <Radio.Button value="b" disabled>
	        Shanghai
	      </Radio.Button>
	      <Radio.Button value="c">Beijing</Radio.Button>
	      <Radio.Button value="d">Chengdu</Radio.Button>
	    </Radio.Group>
	    <Radio.Group disabled onChange={onChange} defaultValue="a" style={{ marginTop: 16 }}>
	      <Radio.Button value="a">Hangzhou</Radio.Button>
	      <Radio.Button value="b">Shanghai</Radio.Button>
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