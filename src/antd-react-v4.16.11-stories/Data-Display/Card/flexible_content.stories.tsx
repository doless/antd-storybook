import React from 'react';
import ReactDOM from 'react-dom';

import { Card } from 'antd';

const { Meta } = Card;

/**
 * 
 * 可以利用 `Card.Meta` 支持更灵活的内容。
 * 
 * 
 * 
 * You can use `Card.Meta` to support more flexible content.
 * 
 * 
 */
export const flexible_content = () => {
	return ReactDOM.render(
	  <Card
	    hoverable
	    style={{ width: 240 }}
	    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
	  >
	    <Meta title="Europe Street beat" description="www.instagram.com" />
	  </Card>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Card',
	component: Card,
}