import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Tag } from 'antd';
import {
  TwitterOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';

/**
 * 
 * 当需要在 `Tag` 内嵌入 `Icon` 时，可以设置 `icon` 属性，或者直接在 `Tag` 内使用 `Icon` 组件。
 * 
 * 如果想控制 `Icon` 具体的位置，只能直接使用 `Icon` 组件，而非 `icon` 属性。
 * 
 * 
 * 
 * `Tag` components can contain an `Icon`. This is done by setting the `icon` property or placing an `Icon` component within the `Tag`.
 * 
 * If you want specific control over the positioning and placement of the `Icon`, then that should be done by placing the `Icon` component within the `Tag` rather than using the `icon` property.
 * 
 * 
 */
export const icon_demo = () => {
	return ReactDOM.render(
	  <>
	    <Tag icon={<TwitterOutlined />} color="#55acee">
	      Twitter
	    </Tag>
	    <Tag icon={<YoutubeOutlined />} color="#cd201f">
	      Youtube
	    </Tag>
	    <Tag icon={<FacebookOutlined />} color="#3b5999">
	      Facebook
	    </Tag>
	    <Tag icon={<LinkedinOutlined />} color="#55acee">
	      LinkedIn
	    </Tag>
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Tag',
	component: Tag,
}