import React from 'react';
import ReactDOM from 'react-dom';

import { Tooltip } from 'antd';

/**
 * 
 * 通过 `destroyTooltipOnHide` 控制提示关闭时是否销毁 dom 节点。
 * 
 * 
 * 
 * Setting `destroyTooltipOnHide` to control whether destroy dom node of tooltip when hidden.
 * 
 * 
 */
export const destroy_tooltip_on_hide = () => {
	return ReactDOM.render(
	  <Tooltip destroyTooltipOnHide={{ keepParent: false }} title="prompt text">
	    <span>Tooltip will destroy when hidden.</span>
	  </Tooltip>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Tooltip',
	component: Tooltip,
}