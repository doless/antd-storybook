import React from 'react';
import ReactDOM from 'react-dom';

import { Row, Col } from 'antd';

/**
 * 
 * 从堆叠到水平排列。
 * 
 * 使用单一的一组 `Row` 和 `Col` 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 `Row` 内。
 * 
 * 
 * 
 * From the stack to the horizontal arrangement.
 * 
 * You can create a basic grid system by using a single set of `Row` and `Col` grid assembly, all of the columns (Col) must be placed in `Row`.
 * 
 * 
 */
export const basic = () => {
	return ReactDOM.render(
	  <>
	    <Row>
	      <Col span={24}>col</Col>
	    </Row>
	    <Row>
	      <Col span={12}>col-12</Col>
	      <Col span={12}>col-12</Col>
	    </Row>
	    <Row>
	      <Col span={8}>col-8</Col>
	      <Col span={8}>col-8</Col>
	      <Col span={8}>col-8</Col>
	    </Row>
	    <Row>
	      <Col span={6}>col-6</Col>
	      <Col span={6}>col-6</Col>
	      <Col span={6}>col-6</Col>
	      <Col span={6}>col-6</Col>
	    </Row>
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Layout/Grid',
	component: Row,
}