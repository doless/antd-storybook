import React from 'react';
import ReactDOM from 'react-dom';

import { Divider } from 'antd';

/**
 * 
 * 测试一些 `style` 修改样式的行为。
 * 
 * 
 * 
 * Use `style` to change default style.
 * 
 * 
 */
export const customize_style = () => {
	return ReactDOM.render(
	  <>
	    <Divider style={{ borderWidth: 2, borderColor: '#7cb305' }} />
	    <Divider style={{ borderColor: '#7cb305' }} dashed />
	    <Divider style={{ borderColor: '#7cb305' }} dashed>
	      Text
	    </Divider>
	    <Divider type="vertical" style={{ height: 60, borderColor: '#7cb305' }} />
	    <Divider type="vertical" style={{ height: 60, borderColor: '#7cb305' }} dashed />
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Layout/Divider',
	component: Divider,
}