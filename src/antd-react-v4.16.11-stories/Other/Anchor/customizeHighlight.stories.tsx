import React from 'react';
import ReactDOM from 'react-dom';

import { Anchor } from 'antd';

const { Link } = Anchor;

const getCurrentAnchor = () => '#components-anchor-demo-static';

/**
 * 
 * 自定义锚点高亮。
 * 
 * 
 * 
 * Customize the anchor highlight.
 * 
 * 
 */
export const customizeHighlight = () => {
	return ReactDOM.render(
	  <Anchor affix={false} getCurrentAnchor={getCurrentAnchor}>
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