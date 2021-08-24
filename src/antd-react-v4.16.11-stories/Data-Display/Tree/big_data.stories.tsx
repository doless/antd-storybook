import React from 'react';
import ReactDOM from 'react-dom';

import { Tree } from 'antd';

const treeData = [];

for (let i = 0; i < 100; i += 1) {
  const children = [];

  for (let j = 0; j < 100; j += 1) {
    children.push({
      title: `child ${i}-${j}`,
      key: `l-${i}-${j}`,
    });
  }

  treeData.push({
    title: `parent ${i}`,
    key: `l-${i}`,
    children,
  });
}

const Demo = () => <Tree defaultExpandAll height={400} treeData={treeData} />;

/**
 * 
 * 大数据展示。
 * 
 * 
 * 
 * Plenty of tree nodes.
 * 
 * 
 */
export const big_data = () => {
	return ReactDOM.render(<Demo />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Display/Tree',
	component: Tree,
}