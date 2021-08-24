import React from 'react';
import ReactDOM from 'react-dom';
import './option_label_prop.css';

import { Select } from 'antd';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

/**
 * 
 * 使用 `optionLabelProp` 指定回填到选择框的 `Option` 属性。
 * 
 * 
 * 
 * Specify the prop name of Option which will be rendered in select box.
 * 
 * 
 */
export const option_label_prop = () => {
	return ReactDOM.render(
	  <Select
	    mode="multiple"
	    style={{ width: '100%' }}
	    placeholder="select one country"
	    defaultValue={['china']}
	    onChange={handleChange}
	    optionLabelProp="label"
	  >
	    <Option value="china" label="China">
	      <div className="demo-option-label-item">
	        <span role="img" aria-label="China">
	          🇨🇳
	        </span>
	        China (中国)
	      </div>
	    </Option>
	    <Option value="usa" label="USA">
	      <div className="demo-option-label-item">
	        <span role="img" aria-label="USA">
	          🇺🇸
	        </span>
	        USA (美国)
	      </div>
	    </Option>
	    <Option value="japan" label="Japan">
	      <div className="demo-option-label-item">
	        <span role="img" aria-label="Japan">
	          🇯🇵
	        </span>
	        Japan (日本)
	      </div>
	    </Option>
	    <Option value="korea" label="Korea">
	      <div className="demo-option-label-item">
	        <span role="img" aria-label="Korea">
	          🇰🇷
	        </span>
	        Korea (韩国)
	      </div>
	    </Option>
	  </Select>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Select',
	component: Select,
}