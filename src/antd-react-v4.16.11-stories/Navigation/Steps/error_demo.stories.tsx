import React from 'react';
import ReactDOM from 'react-dom';

import { Steps } from 'antd';

const { Step } = Steps;

/**
 * 
 * 使用 Steps 的 `status` 属性来指定当前步骤的状态。
 * 
 * 
 * 
 * By using `status` of `Steps`, you can specify the state for current step.
 * 
 * 
 */
export const error_demo = () => {
	return ReactDOM.render(
	  <Steps current={1} status="error">
	    <Step title="Finished" description="This is a description" />
	    <Step title="In Process" description="This is a description" />
	    <Step title="Waiting" description="This is a description" />
	  </Steps>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Navigation/Steps',
	component: Steps,
}