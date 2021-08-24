import React from 'react';
import ReactDOM from 'react-dom';

import { Cascader } from 'antd';

const options = [
  {
    code: 'zhejiang',
    name: 'Zhejiang',
    items: [
      {
        code: 'hangzhou',
        name: 'Hangzhou',
        items: [
          {
            code: 'xihu',
            name: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    code: 'jiangsu',
    name: 'Jiangsu',
    items: [
      {
        code: 'nanjing',
        name: 'Nanjing',
        items: [
          {
            code: 'zhonghuamen',
            name: 'Zhong Hua Men',
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
 * 自定义字段名。
 * 
 * 
 * 
 * Custom field names.
 * 
 * 
 */
export const fields_name = () => {
	return ReactDOM.render(
	  <Cascader
	    fieldNames={{ label: 'name', value: 'code', children: 'items' }}
	    options={options}
	    onChange={onChange}
	    placeholder="Please select"
	  />,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Cascader',
	component: Cascader,
}