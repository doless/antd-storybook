import React from 'react';
import ReactDOM from 'react-dom';

import { Radio } from 'antd';

/**
 * 
 * 大中小三种组合，可以和表单输入框进行对应配合。
 * 
 * 
 * 
 * There are three sizes available: large, medium, and small. It can coordinate with input box.
 * 
 * 
 */
export const size_demo = () => {
	return ReactDOM.render(
	  <>
	    <Radio.Group defaultValue="a" size="large">
	      <Radio.Button value="a">Hangzhou</Radio.Button>
	      <Radio.Button value="b">Shanghai</Radio.Button>
	      <Radio.Button value="c">Beijing</Radio.Button>
	      <Radio.Button value="d">Chengdu</Radio.Button>
	    </Radio.Group>
	    <Radio.Group defaultValue="a" style={{ marginTop: 16 }}>
	      <Radio.Button value="a">Hangzhou</Radio.Button>
	      <Radio.Button value="b">Shanghai</Radio.Button>
	      <Radio.Button value="c">Beijing</Radio.Button>
	      <Radio.Button value="d">Chengdu</Radio.Button>
	    </Radio.Group>
	    <Radio.Group defaultValue="a" size="small" style={{ marginTop: 16 }}>
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