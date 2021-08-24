import React from 'react';
import ReactDOM from 'react-dom';

import { Anchor } from 'antd';

const { Link } = Anchor;

const onChange = (link: string) => {
  console.log('Anchor:OnChange', link);
};

/**
 * 
 * 监听锚点链接改变
 * 
 * 
 * 
 * Listening for anchor link change.
 * 
 * 
 */
export const onChange_demo = () => {
	return ReactDOM.render(
	  <Anchor affix={false} onChange={onChange}>
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