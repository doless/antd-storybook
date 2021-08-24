import React from 'react';
import ReactDOM from 'react-dom';

import { Tag } from 'antd';

function log(e) {
  console.log(e);
}

function preventDefault(e) {
  e.preventDefault();
  console.log('Clicked! But prevent default.');
}

/**
 * 
 * 基本标签的用法，可以通过添加 `closable` 变为可关闭标签。可关闭标签具有 `onClose` 事件。
 * 
 * 
 * 
 * Usage of basic Tag, and it could be closable by set `closable` property. Closable Tag supports `onClose` events.
 * 
 * 
 */
export const basic = () => {
	return ReactDOM.render(
	  <>
	    <Tag>Tag 1</Tag>
	    <Tag>
	      <a href="https://github.com/ant-design/ant-design/issues/1862">Link</a>
	    </Tag>
	    <Tag closable onClose={log}>
	      Tag 2
	    </Tag>
	    <Tag closable onClose={preventDefault}>
	      Prevent Default
	    </Tag>
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Tag',
	component: Tag,
}