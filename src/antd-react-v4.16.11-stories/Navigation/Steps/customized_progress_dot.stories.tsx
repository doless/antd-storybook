import React from 'react';
import ReactDOM from 'react-dom';

import { Steps, Popover } from 'antd';

const { Step } = Steps;

const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);

/**
 * 
 * 为点状步骤条增加自定义展示。
 * 
 * 
 * 
 * You can customize the display for Steps with progress dot style.
 * 
 * 
 */
export const customized_progress_dot = () => {
	return ReactDOM.render(
	  <Steps current={1} progressDot={customDot}>
	    <Step title="Finished" description="You can hover on the dot." />
	    <Step title="In Progress" description="You can hover on the dot." />
	    <Step title="Waiting" description="You can hover on the dot." />
	    <Step title="Waiting" description="You can hover on the dot." />
	  </Steps>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Navigation/Steps',
	component: Steps,
}