import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

/**
 * 
 * 对于使用 [iconfont.cn](http://iconfont.cn/) 的用户，通过设置 `createFromIconfontCN` 方法参数对象中的 `scriptUrl` 字段， 即可轻松地使用已有项目中的图标。
 * 
 * 
 * 
 * If you are using [iconfont.cn](http://iconfont.cn/), you can use the icons in your project gracefully.
 * 
 * 
 */
export const iconfont = () => {
	return ReactDOM.render(
	  <div className="icons-list">
	    <IconFont type="icon-tuichu" />
	    <IconFont type="icon-facebook" />
	    <IconFont type="icon-twitter" />
	  </div>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/General/Icon',
	component: Icon,
}