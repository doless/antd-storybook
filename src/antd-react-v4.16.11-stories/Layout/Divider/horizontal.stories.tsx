import React from 'react';
import ReactDOM from 'react-dom';

import { Divider } from 'antd';

/**
 * 
 * 默认为水平分割线，可在中间加入文字。
 * 
 * 
 * 
 * Divider is `horizontal` by default. You can add text within Divider.
 * 
 * 
 */
export const horizontal = () => {
	return ReactDOM.render(
	  <>
	    <p>
	      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
	      probare, quae sunt a te dicta? Refert tamen, quo modo.
	    </p>
	    <Divider />
	    <p>
	      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
	      probare, quae sunt a te dicta? Refert tamen, quo modo.
	    </p>
	    <Divider dashed />
	    <p>
	      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
	      probare, quae sunt a te dicta? Refert tamen, quo modo.
	    </p>
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Layout/Divider',
	component: Divider,
}