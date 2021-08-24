import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
  ],
});

/**
 * 
 * `@ant-design/icons@4.1.0` 以后，`scriptUrl` 可引用多个资源，用户可灵活的管理 [iconfont.cn](http://iconfont.cn/) 图标。如果资源的图标出现重名，会按照数组顺序进行覆盖。
 * 
 * 
 * 
 * You can use `scriptUrl` as an array after `@ant-design/icons@4.1.0`, manage icons in one `<Icon />` from multiple [iconfont.cn](http://iconfont.cn/) resources. If icon with a duplicate name in resources, it will overrided in array order.
 * 
 * 
 */
export const scriptUrl_demo = () => {
	return ReactDOM.render(
	  <div className="icons-list">
	    <IconFont type="icon-javascript" />
	    <IconFont type="icon-java" />
	    <IconFont type="icon-shoppingcart" />
	    <IconFont type="icon-python" />
	  </div>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/General/Icon',
	component: Icon,
}