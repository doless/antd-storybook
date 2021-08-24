import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';
import './addon_demo.css';

import { Input, Select, Space, Cascader } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

const { Option } = Select;

const selectBefore = (
  <Select defaultValue="http://" className="select-before">
    <Option value="http://">http://</Option>
    <Option value="https://">https://</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue=".com" className="select-after">
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
);

/**
 * 
 * 用于配置一些固定组合。
 * 
 * 
 * 
 * Using pre & post tabs example.
 * 
 * 
 */
export const addon_demo = () => {
	return ReactDOM.render(
	  <Space direction="vertical">
	    <Input addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
	    <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
	    <Input addonAfter={<SettingOutlined />} defaultValue="mysite" />
	    <Input addonBefore="http://" suffix=".com" defaultValue="mysite" />
	    <Input
	      addonBefore={<Cascader placeholder="cascader" style={{ width: 150 }} />}
	      defaultValue="mysite"
	    />
	  </Space>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Input',
	component: Input,
}