import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from 'antd';

/**
 * 
 * 按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。
 * 
 * 
 * 
 * There are `primary` button, `default` button, `dashed` button, `text` button and `link` button in antd.
 * 
 * 
 */
export const basic = () => {
	return ReactDOM.render(
	  <>
	    <Button type="primary">Primary Button</Button>
	    <Button>Default Button</Button>
	    <Button type="dashed">Dashed Button</Button>
	    <br />
	    <Button type="text">Text Button</Button>
	    <Button type="link">Link Button</Button>
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/General/Button',
	component: Button,
}