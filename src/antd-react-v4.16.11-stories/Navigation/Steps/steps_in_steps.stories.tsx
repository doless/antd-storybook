import ReactDOM from 'react-dom';

import React, { useState } from 'react';
import { Steps, Radio, Card } from 'antd';

const { Step } = Steps;

const App = () => {
  const [size, setSize] = useState('default');
  const horizontalSteps = (
    <Card>
      <Steps size={size}>
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>
    </Card>
  );
  return (
    <>
      <Radio.Group
        style={{ marginBottom: 16 }}
        value={size}
        onChange={e => setSize(e.target.value)}
      >
        <Radio value="small">Small</Radio>
        <Radio value="default">Default</Radio>
      </Radio.Group>
      <Steps size={size} direction="vertical">
        <Step title="Finished" description={horizontalSteps} />
        <Step title="In Progress" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>
    </>
  );
};

/**
 * 
 * 测试 Steps 嵌套 Steps 的样式。
 * 
 * 
 * 
 * Test style of Steps inside Steps.
 * 
 * 
 */
export const steps_in_steps = () => {
	return ReactDOM.render(<App />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Navigation/Steps',
	component: Steps,
}