import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Cascader } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

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
 * 通过 `suffixIcon` 自定义选择框后缀图标，通过 `expandIcon` 自定义次级菜单展开图标。
 * 
 * 
 * 
 * Use `suffixIcon` to customize the selection box suffix icon, and use `expandIcon` to customize the current item expand icon.
 * 
 * 
 */
export const suffix_demo = () => {
	return ReactDOM.render(
	  <>
	    <Cascader
	      suffixIcon={<SmileOutlined />}
	      options={options}
	      onChange={onChange}
	      placeholder="Please select"
	    />
	    <br />
	    <br />
	    <Cascader suffixIcon="ab" options={options} onChange={onChange} placeholder="Please select" />
	    <br />
	    <br />
	    <Cascader
	      expandIcon={<SmileOutlined />}
	      options={options}
	      onChange={onChange}
	      placeholder="Please select"
	    />
	    <br />
	    <br />
	    <Cascader expandIcon="ab" options={options} onChange={onChange} placeholder="Please select" />
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Cascader',
	component: Cascader,
}