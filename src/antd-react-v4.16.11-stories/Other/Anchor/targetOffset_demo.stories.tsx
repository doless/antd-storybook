import ReactDOM from 'react-dom';

import React, { useState, useEffect } from 'react';
import { Anchor } from 'antd';

const { Link } = Anchor;

const AnchorExample: React.FC = () => {
  const [targetOffset, setTargetOffset] = useState<number | undefined>(undefined);
  useEffect(() => {
    setTargetOffset(window.innerHeight / 2);
  }, []);
  return (
    <Anchor targetOffset={targetOffset}>
      <Link href="#components-anchor-demo-basic" title="Basic demo" />
      <Link href="#components-anchor-demo-static" title="Static demo" />
      <Link href="#API" title="API">
        <Link href="#Anchor-Props" title="Anchor Props" />
        <Link href="#Link-Props" title="Link Props" />
      </Link>
    </Anchor>
  );
};

/**
 * 
 * 锚点目标滚动到屏幕正中间。
 * 
 * 
 * 
 * Anchor target scroll to screen center.
 * 
 * 
 */
export const targetOffset_demo = () => {
	return ReactDOM.render(<AnchorExample />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Other/Anchor',
	component: Anchor,
}