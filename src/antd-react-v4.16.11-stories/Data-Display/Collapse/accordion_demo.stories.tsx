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
 * 手风琴，每次只打开一个 tab。
 * 
 * 
 * 
 * In accordion mode, only one panel can be expanded at a time.
 * 
 * 
 */
export const accordion_demo = () => {
	return ReactDOM.render(
	  <Collapse accordion>
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