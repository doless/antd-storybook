import React from 'react';
import ReactDOM from 'react-dom';

import { Checkbox, Row, Col } from 'antd';

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

/**
 * 
 * Checkbox.Group 内嵌 Checkbox 并与 Grid 组件一起使用，可以实现灵活的布局。
 * 
 * 
 * 
 * We can use Checkbox and Grid in Checkbox.Group, to implement complex layout.
 * 
 * 
 */
export const layout = () => {
	return ReactDOM.render(
	  <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
	    <Row>
	      <Col span={8}>
	        <Checkbox value="A">A</Checkbox>
	      </Col>
	      <Col span={8}>
	        <Checkbox value="B">B</Checkbox>
	      </Col>
	      <Col span={8}>
	        <Checkbox value="C">C</Checkbox>
	      </Col>
	      <Col span={8}>
	        <Checkbox value="D">D</Checkbox>
	      </Col>
	      <Col span={8}>
	        <Checkbox value="E">E</Checkbox>
	      </Col>
	    </Row>
	  </Checkbox.Group>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Checkbox',
	component: Checkbox,
}