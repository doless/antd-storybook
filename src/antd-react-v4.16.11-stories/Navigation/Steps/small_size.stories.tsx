import React from 'react';
import ReactDOM from 'react-dom';

import { Steps } from 'antd';

const { Step } = Steps;

/**
 * 
 * 迷你版的步骤条，通过设置 `<Steps size="small">` 启用.
 * 
 * 
 * 
 * By setting like this: `<Steps size="small">`, you can get a mini version.
 * 
 * 
 */
export const small_size = () => {
	return ReactDOM.render(
	  <Steps size="small" current={1}>
	    <Step title="Finished" />
	    <Step title="In Progress" />
	    <Step title="Waiting" />
	  </Steps>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Navigation/Steps',
	component: Steps,
}