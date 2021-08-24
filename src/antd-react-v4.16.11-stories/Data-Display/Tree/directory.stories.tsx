import React from 'react';
import ReactDOM from 'react-dom';

import { Tree } from 'antd';

const { DirectoryTree } = Tree;

const treeData = [
  {
    title: 'parent 0',
    key: '0-0',
    children: [
      { title: 'leaf 0-0', key: '0-0-0', isLeaf: true },
      { title: 'leaf 0-1', key: '0-0-1', isLeaf: true },
    ],
  },
  {
    title: 'parent 1',
    key: '0-1',
    children: [
      { title: 'leaf 1-0', key: '0-1-0', isLeaf: true },
      { title: 'leaf 1-1', key: '0-1-1', isLeaf: true },
    ],
  },
];

const Demo: React.FC<{}> = () => {
  const onSelect = (keys: React.Key[], info: any) => {
    console.log('Trigger Select', keys, info);
  };

  const onExpand = () => {
    console.log('Trigger Expand');
  };

  return (
    <DirectoryTree
      multiple
      defaultExpandAll
      onSelect={onSelect}
      onExpand={onExpand}
      treeData={treeData}
    />
  );
};

/**
 * 
 * 内置的目录树，`multiple` 模式支持 `ctrl(Windows)` / `command(Mac)` 复选。
 * 
 * 
 * 
 * Built-in directory tree. `multiple` support `ctrl(Windows)` / `command(Mac)` selection.
 * 
 * 
 */
export const directory = () => {
	return ReactDOM.render(<Demo />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Display/Tree',
	component: Tree,
}