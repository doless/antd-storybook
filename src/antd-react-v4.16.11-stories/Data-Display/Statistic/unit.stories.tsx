import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Statistic, Row, Col } from 'antd';
import { LikeOutlined } from '@ant-design/icons';

/**
 * 
 * 通过前缀和后缀添加单位。
 * 
 * 
 * 
 * Add unit through `prefix` and `suffix`.
 * 
 * 
 */
export const unit = () => {
	return ReactDOM.render(
	  <Row gutter={16}>
	    <Col span={12}>
	      <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
	    </Col>
	    <Col span={12}>
	      <Statistic title="Unmerged" value={93} suffix="/ 100" />
	    </Col>
	  </Row>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Statistic',
	component: Statistic,
}