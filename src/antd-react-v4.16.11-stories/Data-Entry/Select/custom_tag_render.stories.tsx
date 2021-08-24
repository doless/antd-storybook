import React from 'react';
import ReactDOM from 'react-dom';

import { Select, Tag } from 'antd';

const options = [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }];

function tagRender(props) {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = event => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color={value}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>
  );
}

/**
 * 
 * 允许自定义选择标签的样式。
 * 
 * 
 * 
 * Allows for custom rendering of tags.
 * 
 * 
 */
export const custom_tag_render = () => {
	return ReactDOM.render(
	  <Select
	    mode="multiple"
	    showArrow
	    tagRender={tagRender}
	    defaultValue={['gold', 'cyan']}
	    style={{ width: '100%' }}
	    options={options}
	  />,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Select',
	component: Select,
}