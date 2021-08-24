import React from 'react';
import ReactDOM from 'react-dom';

import { Collapse } from 'antd';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

/**
 * 
 * 将折叠面板的背景变成透明。
 * 
 * 
 * 
 * Making collapse's background to transparent.
 * 
 * 
 */
export const ghost_demo = () => {
	return ReactDOM.render(
	  <Collapse defaultActiveKey={['1']} ghost>
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