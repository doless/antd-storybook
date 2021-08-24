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
    disabled: true,
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
 * 通过指定 options 里的 `disabled` 字段。
 * 
 * 
 * 
 * Disable option by specifying the `disabled` property in `options`.
 * 
 * 
 */
export const disabled_option = () => {
	return ReactDOM.render(<Cascader options={options} onChange={onChange} />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Entry/Cascader',
	component: Cascader,
}