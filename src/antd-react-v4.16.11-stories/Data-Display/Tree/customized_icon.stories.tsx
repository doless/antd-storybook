import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Tree } from 'antd';
import {
  DownOutlined,
  FrownOutlined,
  SmileOutlined,
  MehOutlined,
  FrownFilled,
} from '@ant-design/icons';

const treeData = [
  {
    title: 'parent 1',
    key: '0-0',
    icon: <SmileOutlined />,
    children: [
      {
        title: 'leaf',
        key: '0-0-0',
        icon: <MehOutlined />,
      },
      {
        title: 'leaf',
        key: '0-0-1',
        icon: ({ selected }) => (selected ? <FrownFilled /> : <FrownOutlined />),
      },
    ],
  },
];

/**
 * 
 * 可以针对不同的节点定制图标。
 * 
 * 
 * 
 * You can customize icons for different nodes.
 * 
 * 
 */
export const customized_icon = () => {
	return ReactDOM.render(
	  <Tree
	    showIcon
	    defaultExpandAll
	    defaultSelectedKeys={['0-0-0']}
	    switcherIcon={<DownOutlined />}
	    treeData={treeData}
	  />,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Tree',
	component: Tree,
}