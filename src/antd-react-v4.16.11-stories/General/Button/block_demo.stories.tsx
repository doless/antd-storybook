import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from 'antd';

/**
 * 
 * `block` 属性将使按钮适合其父宽度。
 * 
 * 
 * 
 * `block` property will make the button fit to its parent width.
 * 
 * 
 */
export const block_demo = () => {
	return ReactDOM.render(
	  <>
	    <Button type="primary" block>
	      Primary
	    </Button>
	    <Button block>Default</Button>
	    <Button type="dashed" block>
	      Dashed
	    </Button>
	    <Button type="link" block>
	      Link
	    </Button>
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/General/Button',
	component: Button,
}