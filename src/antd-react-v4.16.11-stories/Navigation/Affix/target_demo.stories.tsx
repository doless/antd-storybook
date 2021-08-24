import ReactDOM from 'react-dom';

import React, { useState } from 'react';
import { Affix, Button } from 'antd';

const Demo: React.FC = () => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  return (
    <div className="scrollable-container" ref={setContainer}>
      <div className="background">
        <Affix target={() => container}>
          <Button type="primary">Fixed at the top of container</Button>
        </Affix>
      </div>
    </div>
  );
};

/**
 * 
 * 用 `target` 设置 `Affix` 需要监听其滚动事件的元素，默认为 `window`。
 * 
 * 
 * 
 * Set a `target` for 'Affix', which is listen to scroll event of target element (default is `window`).
 * 
 * 
 */
export const target_demo = () => {
	return ReactDOM.render(<Demo />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Navigation/Affix',
	component: Affix,
}