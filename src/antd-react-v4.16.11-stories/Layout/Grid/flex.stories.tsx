import React from 'react';
import ReactDOM from 'react-dom';
import './flex.css';

import { Row, Col, Divider } from 'antd';

/**
 * 
 * 布局基础。
 * 
 * 子元素根据不同的值 `start`,`center`,`end`,`space-between`,`space-around`，分别定义其在父节点里面的排版方式。
 * 
 * 
 * 
 * Child elements depending on the value of the `start`,`center`, `end`,`space-between`, `space-around`, which are defined in its parent node typesetting mode.
 * 
 * 
 */
export const flex = () => {
	return ReactDOM.render(
	  <>
	    <Divider orientation="left">sub-element align left</Divider>
	    <Row justify="start">
	      <Col span={4}>col-4</Col>
	      <Col span={4}>col-4</Col>
	      <Col span={4}>col-4</Col>
	      <Col span={4}>col-4</Col>
	    </Row>
	
	    <Divider orientation="left">sub-element align center</Divider>
	    <Row justify="center">
	      <Col span={4}>col-4</Col>
	      <Col span={4}>col-4</Col>
	      <Col span={4}>col-4</Col>
	      <Col span={4}>col-4</Col>
	    </Row>
	
	    <Divider orientation="left">sub-element align right</Divider>
	    <Row justify="end">
	      <Col span={4}>col-4</Col>
	      <Col span={4}>col-4</Col>
	      <Col span={4}>col-4</Col>
	      <Col span={4}>col-4</Col>
	    </Row>
	
	    <Divider orientation="left">sub-element monospaced arrangement</Divider>
	    <Row justify="space-between">
	      <Col span={4}>col-4</Col>
	      <Col span={4}>col-4</Col>
	      <Col span={4}>col-4</Col>
	      <Col span={4}>col-4</Col>
	    </Row>
	
	    <Divider orientation="left">sub-element align full</Divider>
	    <Row justify="space-around">
	      <Col span={4}>col-4</Col>
	      <Col span={4}>col-4</Col>
	      <Col span={4}>col-4</Col>
	      <Col span={4}>col-4</Col>
	    </Row>
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Layout/Grid',
	component: Row,
}