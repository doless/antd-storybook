import React from 'react';
import ReactDOM from 'react-dom';

import { Steps, Divider } from 'antd';

const { Step } = Steps;

/**
 * 
 * 包含步骤点的进度条。
 * 
 * 
 * 
 * Steps with progress dot style.
 * 
 * 
 */
export const progress_dot = () => {
	return ReactDOM.render(
	  <>
	    <Steps progressDot current={1}>
	      <Step title="Finished" description="This is a description." />
	      <Step title="In Progress" description="This is a description." />
	      <Step title="Waiting" description="This is a description." />
	    </Steps>
	    <Divider />
	    <Steps progressDot current={1} direction="vertical">
	      <Step title="Finished" description="This is a description. This is a description." />
	      <Step title="Finished" description="This is a description. This is a description." />
	      <Step title="In Progress" description="This is a description. This is a description." />
	      <Step title="Waiting" description="This is a description." />
	      <Step title="Waiting" description="This is a description." />
	    </Steps>
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Navigation/Steps',
	component: Steps,
}