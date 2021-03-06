import React from 'react';
import ReactDOM from 'react-dom';

import { Collapse } from 'antd';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

/**
 * 
 * 可以同时展开多个面板，这个例子默认展开了第一个。
 * 
 * 
 * 
 * By default, any number of panels can be expanded at a time. The first panel is expanded in this example.
 * 
 * 
 */
export const basic = () => {
	return ReactDOM.render(
	  <Collapse defaultActiveKey={['1']} onChange={callback}>
	    <Panel header="This is panel header 1" key="1">
	      <p>{text}</p>
	    </Panel>
	    <Panel header="This is panel header 2" key="2">
	      <p>{text}</p>
	    </Panel>
	    <Panel header="This is panel header 3" key="3">
	      <p>{text}</p>
	    </Panel>
	  </Collapse>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Collapse',
	component: Collapse,
}