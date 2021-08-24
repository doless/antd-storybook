import React from 'react';
import ReactDOM from 'react-dom';

import { Grid, Tag } from 'antd';

const { useBreakpoint } = Grid;

function UseBreakpointDemo() {
  const screens = useBreakpoint();
  return (
    <>
      Current break point:{' '}
      {Object.entries(screens)
        .filter(screen => !!screen[1])
        .map(screen => (
          <Tag color="blue" key={screen[0]}>
            {screen[0]}
          </Tag>
        ))}
    </>
  );
}

/**
 * 
 * 使用 `useBreakpoint` Hook 个性化布局。
 * 
 * 
 * 
 * Use `useBreakpoint` Hook provide personalized layout.
 * 
 * 
 */
export const useBreakpoint_demo = () => {
	return ReactDOM.render(<UseBreakpointDemo />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Layout/Grid',
	component: Grid,
}