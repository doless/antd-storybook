import React from 'react';
import ReactDOM from 'react-dom';

import { Affix, Button } from 'antd';

/**
 * 
 * 可以获得是否固定的状态。
 * 
 * 
 * 
 * Callback with affixed state.
 * 
 * 
 */
export const on_change = () => {
	return ReactDOM.render(
	  <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
	    <Button>120px to affix top</Button>
	  </Affix>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Navigation/Affix',
	component: Affix,
}