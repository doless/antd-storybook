import React from 'react';
import ReactDOM from 'react-dom';

import { Cascader } from 'antd';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hanzhou',
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

function onChange(value) {
  console.log(value);
}

/**
 * 
 * 这种交互允许只选中父级选项。
 * 
 * 
 * 
 * Allow only select parent options.
 * 
 * 
 */
export const change_on_select = () => {
	return ReactDOM.render(<Cascader options={options} onChange={onChange} changeOnSelect />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Entry/Cascader',
	component: Cascader,
}