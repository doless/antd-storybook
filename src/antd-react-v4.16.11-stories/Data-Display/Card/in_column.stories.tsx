import React from 'react';
import ReactDOM from 'react-dom';

import { Card, Col, Row } from 'antd';

/**
 * 
 * 在系统概览页面常常和栅格进行配合。
 * 
 * 
 * 
 * Cards usually cooperate with grid column layout in overview page.
 * 
 * 
 */
export const in_column = () => {
	return ReactDOM.render(
	  <div className="site-card-wrapper">
	    <Row gutter={16}>
	      <Col span={8}>
	        <Card title="Card title" bordered={false}>
	          Card content
	        </Card>
	      </Col>
	      <Col span={8}>
	        <Card title="Card title" bordered={false}>
	          Card content
	        </Card>
	      </Col>
	      <Col span={8}>
	        <Card title="Card title" bordered={false}>
	          Card content
	        </Card>
	      </Col>
	    </Row>
	  </div>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Card',
	component: Card,
}