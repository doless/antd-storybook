import React from 'react';
import ReactDOM from 'react-dom';

import { Steps } from 'antd';

const { Step } = Steps;

/**
 * 
 * 带有进度的步骤。
 * 
 * 
 * 
 * Steps with progress.
 * 
 * 
 */
export const progress = () => {
	return ReactDOM.render(
	  <Steps current={1} percent={60}>
	    <Step title="Finished" description="This is a description." />
	    <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
	    <Step title="Waiting" description="This is a description." />
	  </Steps>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Navigation/Steps',
	component: Steps,
}