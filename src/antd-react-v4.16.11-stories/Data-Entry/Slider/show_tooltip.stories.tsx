import React from 'react';
import ReactDOM from 'react-dom';

import { Slider } from 'antd';

/**
 * 
 * 当 `tooltipVisible` 为 `true` 时，将始终显示 ToolTip；反之则始终不显示，即使在拖动、移入时也是如此。
 * 
 * 
 * 
 * When `tooltipVisible` is `true`, ToolTip will show always, or ToolTip will not show anyway, even if dragging or hovering.
 * 
 * 
 */
export const show_tooltip = () => {
	return ReactDOM.render(<Slider defaultValue={30} tooltipVisible />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Entry/Slider',
	component: Slider,
}