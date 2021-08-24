import React from 'react';
import ReactDOM from 'react-dom';

import { Checkbox } from 'antd';

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];

/**
 * 
 * 方便的从数组生成 Checkbox 组。
 * 
 * 
 * 
 * Generate a group of checkboxes from an array.
 * 
 * 
 */
export const group = () => {
	return ReactDOM.render(
	  <>
	    <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
	    <br />
	    <br />
	    <Checkbox.Group options={options} defaultValue={['Pear']} onChange={onChange} />
	    <br />
	    <br />
	    <Checkbox.Group
	      options={optionsWithDisabled}
	      disabled
	      defaultValue={['Apple']}
	      onChange={onChange}
	    />
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Checkbox',
	component: Checkbox,
}