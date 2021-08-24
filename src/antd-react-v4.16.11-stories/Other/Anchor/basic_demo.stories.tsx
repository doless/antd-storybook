import React from 'react';
import ReactDOM from 'react-dom';

import { Anchor } from 'antd';

const { Link } = Anchor;

/**
 * 
 * 最简单的用法。
 * 
 * 
 * 
 * The simplest usage.
 * 
 * 
 */
export const basic_demo = () => {
	return ReactDOM.render(
	  <Anchor>
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