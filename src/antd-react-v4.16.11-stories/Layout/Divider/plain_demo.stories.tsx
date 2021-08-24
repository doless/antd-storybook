import React from 'react';
import ReactDOM from 'react-dom';

import { Divider } from 'antd';

/**
 * 
 * 使用 `plain` 可以设置为更轻量的分割文字样式。
 * 
 * 
 * 
 * You can use non-heading style of divider text by setting `plain`.
 * 
 * 
 */
export const plain_demo = () => {
	return ReactDOM.render(
	  <>
	    <p>
	      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
	      probare, quae sunt a te dicta? Refert tamen, quo modo.
	    </p>
	    <Divider plain>Text</Divider>
	    <p>
	      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
	      probare, quae sunt a te dicta? Refert tamen, quo modo.
	    </p>
	    <Divider orientation="left" plain>
	      Left Text
	    </Divider>
	    <p>
	      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
	      probare, quae sunt a te dicta? Refert tamen, quo modo.
	    </p>
	    <Divider orientation="right" plain>
	      Right Text
	    </Divider>
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