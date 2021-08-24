import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

/**
 * 
 * 使用自定义指示符。
 * 
 * 
 * 
 * Use custom loading indicator.
 * 
 * 
 */
export const custom_indicator = () => {
	return ReactDOM.render(<Spin indicator={antIcon} />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Feedback/Spin',
	component: Spin,
}