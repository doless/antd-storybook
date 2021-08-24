import React from 'react';
import ReactDOM from 'react-dom';

import { Row, Col } from 'antd';

/**
 * 
 * 参照 Bootstrap 的 [响应式设计](http://getbootstrap.com/css/#grid-media-queries)，预设六个响应尺寸：`xs` `sm` `md` `lg` `xl` `xxl`。
 * 
 * 
 * 
 * Referring to the Bootstrap [responsive design](http://getbootstrap.com/css/#grid-media-queries), here preset six dimensions: `xs` `sm` `md` `lg` `xl` `xxl`.
 * 
 * 
 */
export const responsive = () => {
	return ReactDOM.render(
	  <Row>
	    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
	      Col
	    </Col>
	    <Col xs={20} sm={16} md={12} lg={8} xl={4}>
	      Col
	    </Col>
	    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
	      Col
	    </Col>
	  </Row>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Layout/Grid',
	component: Row,
}