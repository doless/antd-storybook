import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';
import './card_demo.css';

import { Statistic, Card, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

/**
 * 
 * 在卡片中展示统计数值。
 * 
 * 
 * 
 * Display statistic data in Card.
 * 
 * 
 */
export const card_demo = () => {
	return ReactDOM.render(
	  <div className="site-statistic-demo-card">
	    <Row gutter={16}>
	      <Col span={12}>
	        <Card>
	          <Statistic
	            title="Active"
	            value={11.28}
	            precision={2}
	            valueStyle={{ color: '#3f8600' }}
	            prefix={<ArrowUpOutlined />}
	            suffix="%"
	          />
	        </Card>
	      </Col>
	      <Col span={12}>
	        <Card>
	          <Statistic
	            title="Idle"
	            value={9.3}
	            precision={2}
	            valueStyle={{ color: '#cf1322' }}
	            prefix={<ArrowDownOutlined />}
	            suffix="%"
	          />
	        </Card>
	      </Col>
	    </Row>
	  </div>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Statistic',
	component: Statistic,
}