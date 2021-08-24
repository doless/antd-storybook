import React from 'react';
import ReactDOM from 'react-dom';

import { Descriptions, Badge } from 'antd';

/**
 * 
 * 垂直带边框和背景颜色的列表。
 * 
 * 
 * 
 * Descriptions with border and background color.
 * 
 * 
 */
export const vertical_border = () => {
	return ReactDOM.render(
	  <Descriptions title="User Info" layout="vertical" bordered>
	    <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
	    <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
	    <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>
	    <Descriptions.Item label="Order time">2018-04-24 18:00:00</Descriptions.Item>
	    <Descriptions.Item label="Usage Time" span={2}>
	      2019-04-24 18:00:00
	    </Descriptions.Item>
	    <Descriptions.Item label="Status" span={3}>
	      <Badge status="processing" text="Running" />
	    </Descriptions.Item>
	    <Descriptions.Item label="Negotiated Amount">$80.00</Descriptions.Item>
	    <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
	    <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>
	    <Descriptions.Item label="Config Info">
	      Data disk type: MongoDB
	      <br />
	      Database version: 3.4
	      <br />
	      Package: dds.mongo.mid
	      <br />
	      Storage space: 10 GB
	      <br />
	      Replication factor: 3
	      <br />
	      Region: East China 1<br />
	    </Descriptions.Item>
	  </Descriptions>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Descriptions',
	component: Descriptions,
}