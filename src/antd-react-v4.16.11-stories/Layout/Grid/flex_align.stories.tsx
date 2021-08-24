import React from 'react';
import ReactDOM from 'react-dom';
import './flex_align.css';

import { Row, Col, Divider } from 'antd';

const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

/**
 * 
 * 子元素垂直对齐。
 * 
 * 
 * 
 * Child elements vertically aligned.
 * 
 * 
 */
export const flex_align = () => {
	return ReactDOM.render(
	  <>
	    <Divider orientation="left">Align Top</Divider>
	    <Row justify="center" align="top">
	      <Col span={4}>
	        <DemoBox value={100}>col-4</DemoBox>
	      </Col>
	      <Col span={4}>
	        <DemoBox value={50}>col-4</DemoBox>
	      </Col>
	      <Col span={4}>
	        <DemoBox value={120}>col-4</DemoBox>
	      </Col>
	      <Col span={4}>
	        <DemoBox value={80}>col-4</DemoBox>
	      </Col>
	    </Row>
	
	    <Divider orientation="left">Align Middle</Divider>
	    <Row justify="space-around" align="middle">
	      <Col span={4}>
	        <DemoBox value={100}>col-4</DemoBox>
	      </Col>
	      <Col span={4}>
	        <DemoBox value={50}>col-4</DemoBox>
	      </Col>
	      <Col span={4}>
	        <DemoBox value={120}>col-4</DemoBox>
	      </Col>
	      <Col span={4}>
	        <DemoBox value={80}>col-4</DemoBox>
	      </Col>
	    </Row>
	
	    <Divider orientation="left">Align Bottom</Divider>
	    <Row justify="space-between" align="bottom">
	      <Col span={4}>
	        <DemoBox value={100}>col-4</DemoBox>
	      </Col>
	      <Col span={4}>
	        <DemoBox value={50}>col-4</DemoBox>
	      </Col>
	      <Col span={4}>
	        <DemoBox value={120}>col-4</DemoBox>
	      </Col>
	      <Col span={4}>
	        <DemoBox value={80}>col-4</DemoBox>
	      </Col>
	    </Row>
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Layout/Grid',
	component: Row,
}