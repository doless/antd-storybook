import React from 'react';
import ReactDOM from 'react-dom';

import { Steps } from 'antd';

const { Step } = Steps;

/**
 * 
 * 简单的竖直方向的小型步骤条。
 * 
 * 
 * 
 * A simple mini version step bar in the vertical direction.
 * 
 * 
 */
export const vertical_small = () => {
	return ReactDOM.render(
	  <Steps direction="vertical" size="small" current={1}>
	    <Step title="Finished" description="This is a description." />
	    <Step title="In Progress" description="This is a description." />
	    <Step title="Waiting" description="This is a description." />
	  </Steps>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Navigation/Steps',
	component: Steps,
}