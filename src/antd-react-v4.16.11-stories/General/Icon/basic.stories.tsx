import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
} from '@ant-design/icons';

/**
 * 
 * 通过 `@ant-design/icons` 引用 Icon 组件，不同主题的 Icon 组件名为图标名加主题做为后缀，也可以通过设置 `spin` 属性来实现动画旋转效果。
 * 
 * 
 * 
 * Import icons from `@ant-design/icons`, component name of icons with different theme is the icon name suffixed by the theme name. Specify the `spin` property to show spinning animation.
 * 
 * 
 */
export const basic = () => {
	return ReactDOM.render(
	  <div className="icons-list">
	    <HomeOutlined />
	    <SettingFilled />
	    <SmileOutlined />
	    <SyncOutlined spin />
	    <SmileOutlined rotate={180} />
	    <LoadingOutlined />
	  </div>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/General/Icon',
	component: Icon,
}