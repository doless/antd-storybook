import React from 'react';
import ReactDOM from 'react-dom';

import { Tree } from 'antd';

function dig(path = '0', level = 3) {
  const list = [];
  for (let i = 0; i < 10; i += 1) {
    const key = `${path}-${i}`;
    const treeNode = {
      title: key,
      key,
    };

    if (level > 0) {
      treeNode.children = dig(key, level - 1);
    }

    list.push(treeNode);
  }
  return list;
}

const treeData = dig();

/**
 * 
 * 使用 `height` 属性则切换为虚拟滚动。
 * 
 * 
 * 
 * Use virtual list through `height` prop.
 * 
 * 
 */
export const virtual_scroll = () => {
	return ReactDOM.render(<Tree treeData={treeData} height={233} defaultExpandAll />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Display/Tree',
	component: Tree,
}