import React from 'react';
import ReactDOM from 'react-dom';

import { useState } from 'react';
import { Timeline, Radio } from 'antd';

function TimelimeLabelDemo() {
  const [mode, setMode] = useState('left');

  const onChange = e => {
    setMode(e.target.value);
  };

  return (
    <>
      <Radio.Group
        onChange={onChange}
        value={mode}
        style={{
          marginBottom: 20,
        }}
      >
        <Radio value="left">Left</Radio>
        <Radio value="right">Right</Radio>
        <Radio value="alternate">Alternate</Radio>
      </Radio.Group>
      <Timeline mode={mode}>
        <Timeline.Item label="2015-09-01">Create a services</Timeline.Item>
        <Timeline.Item label="2015-09-01 09:12:11">Solve initial network problems</Timeline.Item>
        <Timeline.Item>Technical testing</Timeline.Item>
        <Timeline.Item label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
      </Timeline>
    </>
  );
}

/**
 * 
 * 使用 `label` 标签单独展示时间。
 * 
 * 
 * 
 * Use `label` show time alone.
 * 
 * 
 */
export const label_demo = () => {
	return ReactDOM.render(<TimelimeLabelDemo />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Display/Timeline',
	component: Timeline,
}