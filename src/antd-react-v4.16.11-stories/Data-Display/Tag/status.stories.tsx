import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Tag, Divider } from 'antd';
import {
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  ClockCircleOutlined,
  MinusCircleOutlined,
} from '@ant-design/icons';

/**
 * 
 * 预设五种状态颜色，可以通过设置 `color` 为 `success`、 `processing`、`error`、`default`、`warning` 来代表不同的状态。
 * 
 * 
 * 
 * We preset five different colors, you can set color property such as `success`,`processing`,`error`,`default` and `warning` to indicate specific status.
 * 
 * 
 */
export const status = () => {
	return ReactDOM.render(
	  <>
	    <Divider orientation="left">Without icon</Divider>
	    <div>
	      <Tag color="success">success</Tag>
	      <Tag color="processing">processing</Tag>
	      <Tag color="error">error</Tag>
	      <Tag color="warning">warning</Tag>
	      <Tag color="default">default</Tag>
	    </div>
	    <Divider orientation="left">With icon</Divider>
	    <div>
	      <Tag icon={<CheckCircleOutlined />} color="success">
	        success
	      </Tag>
	      <Tag icon={<SyncOutlined spin />} color="processing">
	        processing
	      </Tag>
	      <Tag icon={<CloseCircleOutlined />} color="error">
	        error
	      </Tag>
	      <Tag icon={<ExclamationCircleOutlined />} color="warning">
	        warning
	      </Tag>
	      <Tag icon={<ClockCircleOutlined />} color="default">
	        waiting
	      </Tag>
	      <Tag icon={<MinusCircleOutlined />} color="default">
	        stop
	      </Tag>
	    </div>
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Tag',
	component: Tag,
}