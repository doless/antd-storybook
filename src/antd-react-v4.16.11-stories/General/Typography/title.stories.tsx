import React from 'react';
import ReactDOM from 'react-dom';

import { Typography } from 'antd';

const { Title } = Typography;

/**
 * 
 * 展示不同级别的标题。
 * 
 * 
 * 
 * Display title in different level.
 * 
 * 
 */
export const title = () => {
	return ReactDOM.render(
	  <>
	    <Title>h1. Ant Design</Title>
	    <Title level={2}>h2. Ant Design</Title>
	    <Title level={3}>h3. Ant Design</Title>
	    <Title level={4}>h4. Ant Design</Title>
	    <Title level={5}>h5. Ant Design</Title>
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/General/Typography',
	component: Typography,
}