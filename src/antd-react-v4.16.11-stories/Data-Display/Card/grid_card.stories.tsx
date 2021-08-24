import React from 'react';
import ReactDOM from 'react-dom';

import { Card } from 'antd';

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

/**
 * 
 * 一种常见的卡片内容区隔模式。
 * 
 * 
 * 
 * Grid style card content.
 * 
 * 
 */
export const grid_card = () => {
	return ReactDOM.render(
	  <Card title="Card Title">
	    <Card.Grid style={gridStyle}>Content</Card.Grid>
	    <Card.Grid hoverable={false} style={gridStyle}>
	      Content
	    </Card.Grid>
	    <Card.Grid style={gridStyle}>Content</Card.Grid>
	    <Card.Grid style={gridStyle}>Content</Card.Grid>
	    <Card.Grid style={gridStyle}>Content</Card.Grid>
	    <Card.Grid style={gridStyle}>Content</Card.Grid>
	    <Card.Grid style={gridStyle}>Content</Card.Grid>
	  </Card>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Card',
	component: Card,
}