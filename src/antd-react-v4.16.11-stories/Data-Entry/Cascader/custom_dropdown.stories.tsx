import React from 'react';
import ReactDOM from 'react-dom';

import { Cascader, Divider } from 'antd';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

function dropdownRender(menus) {
  return (
    <div>
      {menus}
      <Divider style={{ margin: 0 }} />
      <div style={{ padding: 8 }}>The footer is not very short.</div>
    </div>
  );
}

/**
 * 
 * 使用 `dropdownRender` 对下拉菜单进行自由扩展。
 * 
 * 
 * 
 * Customize the dropdown menu via `dropdownRender`.
 * 
 * 
 */
export const custom_dropdown = () => {
	return ReactDOM.render(
	  <Cascader options={options} dropdownRender={dropdownRender} placeholder="Please select" />,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Cascader',
	component: Cascader,
}