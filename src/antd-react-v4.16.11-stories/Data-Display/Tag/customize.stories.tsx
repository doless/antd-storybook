import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Tag } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

/**
 * 
 * 可用 `closeIcon` 自定义关闭按钮。
 * 
 * 
 * 
 * The close icon can be customized using `closeIcon`.
 * 
 * 
 */
export const customize = () => {
	return ReactDOM.render(
	  <>
	    <Tag closable closeIcon="关 闭">
	      Tag1
	    </Tag>
	    <Tag closable closeIcon={<CloseCircleOutlined />}>
	      Tag2
	    </Tag>
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Tag',
	component: Tag,
}