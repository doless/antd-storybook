import React from 'react';
import ReactDOM from 'react-dom';

import { Steps, Divider } from 'antd';

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
        <Steps current={current} onChange={this.onChange}>
          <Step title="Step 1" description="This is a description." />
          <Step title="Step 2" description="This is a description." />
          <Step title="Step 3" description="This is a description." />
        </Steps>

        <Divider />

        <Steps current={current} onChange={this.onChange} direction="vertical">
          <Step title="Step 1" description="This is a description." />
          <Step title="Step 2" description="This is a description." />
          <Step title="Step 3" description="This is a description." />
        </Steps>
      </>
    );
  }
}

/**
 * 
 * 设置 `onChange` 后，Steps 变为可点击状态。
 * 
 * 
 * 
 * Setting `onChange` makes Steps clickable.
 * 
 * 
 */
export const clickable = () => {
	return ReactDOM.render(<Demo />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Navigation/Steps',
	component: Steps,
}