import React from 'react';
import ReactDOM from 'react-dom';

import { Select } from 'antd';

const { Option } = Select;

function handleChange(value) {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
}

/**
 * 
 * 默认情况下 `onChange` 里只能拿到 `value`，如果需要拿到选中的节点文本 `label`，可以使用 `labelInValue` 属性。
 * 
 * 选中项的 `label` 会被包装到 `value` 中传递给 `onChange` 等函数，此时 `value` 是一个对象。
 * 
 * 
 * 
 * As a default behavior, the `onChange` callback can only get the `value` of the selected item. The `labelInValue` prop can be used to get the `label` property of the selected item.
 * 
 * The `label` of the selected item will be packed as an object for passing to the `onChange` callback.
 * 
 * 
 */
export const label_in_value = () => {
	return ReactDOM.render(
	  <Select
	    labelInValue
	    defaultValue={{ value: 'lucy' }}
	    style={{ width: 120 }}
	    onChange={handleChange}
	  >
	    <Option value="jack">Jack (100)</Option>
	    <Option value="lucy">Lucy (101)</Option>
	  </Select>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Select',
	component: Select,
}