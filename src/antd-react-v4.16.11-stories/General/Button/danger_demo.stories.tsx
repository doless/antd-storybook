import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from 'antd';

/**
 * 
 * 在 4.0 之后，危险成为一种按钮属性而不是按钮类型。
 * 
 * 
 * 
 * `danger` is a property of button after antd 4.0.
 * 
 * 
 */
export const danger_demo = () => {
	return ReactDOM.render(
	  <>
	    <Button type="primary" danger>
	      Primary
	    </Button>
	    <Button danger>Default</Button>
	    <Button type="dashed" danger>
	      Dashed
	    </Button>
	    <Button type="text" danger>
	      Text
	    </Button>
	    <Button type="link" danger>
	      Link
	    </Button>
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/General/Button',
	component: Button,
}