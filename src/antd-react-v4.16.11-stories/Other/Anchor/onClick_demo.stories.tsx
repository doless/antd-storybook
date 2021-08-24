import React from 'react';
import ReactDOM from 'react-dom';

import { Anchor } from 'antd';

const { Link } = Anchor;

const handleClick = (
  e: React.MouseEvent<HTMLElement>,
  link: {
    title: React.ReactNode;
    href: string;
  },
) => {
  e.preventDefault();
  console.log(link);
};

/**
 * 
 * 点击锚点不记录历史。
 * 
 * 
 * 
 * Clicking on an anchor does not record history.
 * 
 * 
 */
export const onClick_demo = () => {
	return ReactDOM.render(
	  <Anchor affix={false} onClick={handleClick}>
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