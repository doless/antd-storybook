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
 * 不同大小的级联选择器。
 * 
 * 
 * 
 * Cascade selection box of different sizes.
 * 
 * 
 */
export const size_demo = () => {
	return ReactDOM.render(
	  <>
	    <Cascader size="large" options={options} onChange={onChange} />
	    <br />
	    <br />
	    <Cascader options={options} onChange={onChange} />
	    <br />
	    <br />
	    <Cascader size="small" options={options} onChange={onChange} />
	    <br />
	    <br />
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Cascader',
	component: Cascader,
}