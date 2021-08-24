import React from 'react';
import ReactDOM from 'react-dom';

import { Input } from 'antd';

const { Search } = Input;

/**
 * 
 * 用于 `onSearch` 的时候展示 `loading`。
 * 
 * 
 * 
 * Search loading when onSearch.
 * 
 * 
 */
export const search_input_loading = () => {
	return ReactDOM.render(
	  <>
	    <Search placeholder="input search loading default" loading />
	    <br />
	    <br />
	    <Search placeholder="input search loading with enterButton" loading enterButton />
	    <br />
	    <br />
	    <Search placeholder="input search text" enterButton="Search" size="large" loading />
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Input',
	component: Input,
}