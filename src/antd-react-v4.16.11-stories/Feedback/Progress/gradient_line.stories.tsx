import React from 'react';
import ReactDOM from 'react-dom';

import { Progress } from 'antd';

const Demo = () => (
  <>
    <Progress
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }}
      percent={99.9}
    />
    <Progress
      strokeColor={{
        from: '#108ee9',
        to: '#87d068',
      }}
      percent={99.9}
      status="active"
    />
    <Progress
      type="circle"
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }}
      percent={90}
    />
    <Progress
      type="circle"
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }}
      percent={100}
    />
  </>
);

/**
 * 
 * `linear-gradient` 的封装。推荐只传两种颜色。
 * 
 * 
 * 
 * A package of `linear-gradient`. It is recommended to only pass two colors.
 * 
 * 
 */
export const gradient_line = () => {
	return ReactDOM.render(<Demo />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Feedback/Progress',
	component: Progress,
}