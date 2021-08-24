import React from 'react';
import ReactDOM from 'react-dom';
import './nav_demo.css';

import { Steps } from 'antd';

const { Step } = Steps;

class Demo extends React.Component {
  state = {
    current: 0,
  };

  onChange = current => {
    console.log('onChange:', current);
    this.setState({ current });
  };

  render() {
    const { current } = this.state;
    return (
      <>
        <Steps
          type="navigation"
          size="small"
          current={current}
          onChange={this.onChange}
          className="site-navigation-steps"
        >
          <Step
            title="Step 1"
            subTitle="00:00:05"
            status="finish"
            description="This is a description."
          />
          <Step
            title="Step 2"
            subTitle="00:01:02"
            status="process"
            description="This is a description."
          />
          <Step
            title="Step 3"
            subTitle="waiting for longlong time"
            status="wait"
            description="This is a description."
          />
        </Steps>
        <Steps
          type="navigation"
          current={current}
          onChange={this.onChange}
          className="site-navigation-steps"
        >
          <Step status="finish" title="Step 1" />
          <Step status="process" title="Step 2" />
          <Step status="wait" title="Step 3" />
          <Step status="wait" title="Step 4" />
        </Steps>
        <Steps
          type="navigation"
          size="small"
          current={current}
          onChange={this.onChange}
          className="site-navigation-steps"
        >
          <Step status="finish" title="finish 1" />
          <Step status="finish" title="finish 2" />
          <Step status="process" title="current process" />
          <Step status="wait" title="wait" disabled />
        </Steps>
      </>
    );
  }
}

/**
 * 
 * 导航类型的步骤条。
 * 
 * 
 * 
 * Navigation steps.
 * 
 * 
 */
export const nav_demo = () => {
	return ReactDOM.render(<Demo />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Navigation/Steps',
	component: Steps,
}