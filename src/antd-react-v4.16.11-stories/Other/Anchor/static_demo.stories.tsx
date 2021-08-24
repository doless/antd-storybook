import React from 'react';
import ReactDOM from 'react-dom';

import { Anchor } from 'antd';

const { Link } = Anchor;

/**
 * 
 * 不浮动，状态不随页面滚动变化。
 * 
 * 
 * 
 * Do not change state when page is scrolling.
 * 
 * 
 */
export const static_demo = () => {
	return ReactDOM.render(
	  <Anchor affix={false}>
	    <Link href="#components-anchor-demo-basic" title="Basic demo" />
	    <Link href="#components-anchor-demo-static" title="Static demo" />
	    <Link href="#API" title="API">
	      <Link href="#Anchor-Props" title="Anchor Props" />
	      <Link href="#Link-Props" title="Link Props" />
	    </Link>
	  </Anchor>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Other/Anchor',
	component: Anchor,
}