import React from 'react';
import ReactDOM from 'react-dom';

import { Typography, Space } from 'antd';

const { Text, Link } = Typography;

/**
 * 
 * 内置不同样式的文本以及超链接组件。
 * 
 * 
 * 
 * Provides multiple types of text and link.
 * 
 * 
 */
export const text = () => {
	return ReactDOM.render(
	  <Space direction="vertical">
	    <Text>Ant Design (default)</Text>
	    <Text type="secondary">Ant Design (secondary)</Text>
	    <Text type="success">Ant Design (success)</Text>
	    <Text type="warning">Ant Design (warning)</Text>
	    <Text type="danger">Ant Design (danger)</Text>
	    <Text disabled>Ant Design (disabled)</Text>
	    <Text mark>Ant Design (mark)</Text>
	    <Text code>Ant Design (code)</Text>
	    <Text keyboard>Ant Design (keyboard)</Text>
	    <Text underline>Ant Design (underline)</Text>
	    <Text delete>Ant Design (delete)</Text>
	    <Text strong>Ant Design (strong)</Text>
	    <Text italic>Ant Design (italic)</Text>
	    <Link href="https://ant.design" target="_blank">
	      Ant Design (Link)
	    </Link>
	  </Space>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/General/Typography',
	component: Typography,
}