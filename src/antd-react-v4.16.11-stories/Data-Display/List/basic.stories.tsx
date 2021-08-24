import React from 'react';
import ReactDOM from 'react-dom';

import { List, Avatar } from 'antd';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

/**
 * 
 * 基础列表。
 * 
 * 
 * 
 * Basic list.
 * 
 * 
 */
export const basic = () => {
	return ReactDOM.render(
	  <List
	    itemLayout="horizontal"
	    dataSource={data}
	    renderItem={item => (
	      <List.Item>
	        <List.Item.Meta
	          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
	          title={<a href="https://ant.design">{item.title}</a>}
	          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
	        />
	      </List.Item>
	    )}
	  />,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/List',
	component: List,
}