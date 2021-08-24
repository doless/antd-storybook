import ReactDOM from 'react-dom';

import React, { useState } from 'react';
import { Affix, Button } from 'antd';

const Demo: React.FC = () => {
  const [top, setTop] = useState(10);
  return (
    <div style={{ height: 10000 }}>
      <div>Top</div>
      <Affix offsetTop={top}>
        <div style={{ background: 'red' }}>
          <Button type="primary" onClick={() => setTop(top + 10)}>
            Affix top
          </Button>
        </div>
      </Affix>
      <div>Bottom</div>
    </div>
  );
};

/**
 * 
 * DEBUG
 * 
 * 
 * 
 * DEBUG
 * 
 * 
 */
export const debug = () => {
	return ReactDOM.render(<Demo />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Navigation/Affix',
	component: Affix,
}