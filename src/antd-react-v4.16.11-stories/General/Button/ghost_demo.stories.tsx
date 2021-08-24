import React from 'react';
import ReactDOM from 'react-dom';
import './ghost_demo.css';

import { Button } from 'antd';

/**
 * 
 * 幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。
 * 
 * 
 * 
 * `ghost` property will make button's background transparent, it is commonly used in colored background.
 * 
 * 
 */
export const ghost_demo = () => {
	return ReactDOM.render(
	  <div className="site-button-ghost-wrapper">
	    <Button type="primary" ghost>
	      Primary
	    </Button>
	    <Button ghost>Default</Button>
	    <Button type="dashed" ghost>
	      Dashed
	    </Button>
	    <Button type="primary" danger ghost>
	      Danger
	    </Button>
	  </div>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/General/Button',
	component: Button,
}