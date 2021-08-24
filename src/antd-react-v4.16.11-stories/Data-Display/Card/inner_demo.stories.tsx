import React from 'react';
import ReactDOM from 'react-dom';

import { Card } from 'antd';

/**
 * 
 * 可以放在普通卡片内部，展示多层级结构的信息。
 * 
 * 
 * 
 * It can be placed inside the ordinary card to display the information of the multilevel structure.
 * 
 * 
 */
export const inner_demo = () => {
	return ReactDOM.render(
	  <Card title="Card title">
	    <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
	      Inner Card content
	    </Card>
	    <Card
	      style={{ marginTop: 16 }}
	      type="inner"
	      title="Inner Card title"
	      extra={<a href="#">More</a>}
	    >
	      Inner Card content
	    </Card>
	  </Card>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Card',
	component: Card,
}