import React from 'react';
import ReactDOM from 'react-dom';

import { Divider } from 'antd';

/**
 * 
 * 分割线中带有文字，可以用 `orientation` 指定文字位置。
 * 
 * 
 * 
 * Divider with inner title, set `orientation="left/right"` to align it.
 * 
 * 
 */
export const with_text = () => {
	return ReactDOM.render(
	  <>
	    <p>
	      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
	      probare, quae sunt a te dicta? Refert tamen, quo modo.
	    </p>
	    <Divider>Text</Divider>
	    <p>
	      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
	      probare, quae sunt a te dicta? Refert tamen, quo modo.
	    </p>
	    <Divider orientation="left">Left Text</Divider>
	    <p>
	      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
	      probare, quae sunt a te dicta? Refert tamen, quo modo.
	    </p>
	    <Divider orientation="right">Right Text</Divider>
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