import React from 'react';
import ReactDOM from 'react-dom';

import { Cascader } from 'antd';

const optionLists = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    isLeaf: false,
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    isLeaf: false,
  },
];

const LazyOptions = () => {
  const [options, setOptions] = React.useState(optionLists);

  const onChange = (value, selectedOptions) => {
    console.log(value, selectedOptions);
  };

  const loadData = selectedOptions => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;

    // load options lazily
    setTimeout(() => {
      targetOption.loading = false;
      targetOption.children = [
        {
          label: `${targetOption.label} Dynamic 1`,
          value: 'dynamic1',
        },
        {
          label: `${targetOption.label} Dynamic 2`,
          value: 'dynamic2',
        },
      ];
      setOptions([...options]);
    }, 1000);
  };

  return <Cascader options={options} loadData={loadData} onChange={onChange} changeOnSelect />;
};

/**
 * 
 * 使用 `loadData` 实现动态加载选项。
 * 
 * > 注意：`loadData` 与 `showSearch` 无法一起使用。
 * 
 * 
 * 
 * Load options lazily with `loadData`.
 * 
 * > Note: `loadData` cannot work with `showSearch`.
 * 
 * 
 */
export const lazy = () => {
	return ReactDOM.render(<LazyOptions />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Entry/Cascader',
	component: Cascader,
}