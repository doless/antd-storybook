import React from 'react';
import ReactDOM from 'react-dom';

import { Row, Col } from 'antd';

/**
 * 
 * 列偏移。
 * 
 * 使用 `offset` 可以将列向右侧偏。例如，`offset={4}` 将元素向右侧偏移了 4 个列（column）的宽度。
 * 
 * 
 * 
 * `offset` can set the column to the right side. For example, using `offset = {4}` can set the element shifted to the right four columns width.
 * 
 * 
 */
export const offset_demo = () => {
	return ReactDOM.render(
	  <>
	    <Row>
	      <Col span={8}>col-8</Col>
	      <Col span={8} offset={8}>
	        col-8
	      </Col>
	    </Row>
	    <Row>
	      <Col span={6} offset={6}>
	        col-6 col-offset-6
	      </Col>
	      <Col span={6} offset={6}>
	        col-6 col-offset-6
	      </Col>
	    </Row>
	    <Row>
	      <Col span={12} offset={6}>
	        col-12 col-offset-6
	      </Col>
	    </Row>
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Layout/Grid',
	component: Row,
}