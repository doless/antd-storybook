import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = value => console.log(value);

/**
 * 
 * 带有搜索按钮的输入框。
 * 
 * 
 * 
 * Example of creating a search box by grouping a standard input with a search button.
 * 
 * 
 */
export const search_input = () => {
	return ReactDOM.render(
	  <Space direction="vertical">
	    <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
	    <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />
	    <Search placeholder="input search text" onSearch={onSearch} enterButton />
	    <Search
	      placeholder="input search text"
	      allowClear
	      enterButton="Search"
	      size="large"
	      onSearch={onSearch}
	    />
	    <Search
	      placeholder="input search text"
	      enterButton="Search"
	      size="large"
	      suffix={suffix}
	      onSearch={onSearch}
	    />
	  </Space>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Input',
	component: Input,
}