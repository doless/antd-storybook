import React from 'react';
import ReactDOM from 'react-dom';

import { Slider } from 'antd';

/**
 * 
 * 可以设置 `range.draggableTrack`，使得范围刻度整体可拖拽。
 * 
 * 
 * 
 * Make range track draggable when set `range.draggableTrack`.
 * 
 * 
 */
export const dragableTrack = () => {
	return ReactDOM.render(<Slider range={{ draggableTrack: true }} defaultValue={[20, 50]} />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Entry/Slider',
	component: Slider,
}