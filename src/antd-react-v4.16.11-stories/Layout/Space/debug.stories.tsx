import React from 'react';
import ReactDOM from 'react-dom';

import { Space, Button, Popconfirm } from 'antd';

/**
 * 
 * Debug usage
 * 
 * 
 * 
 * Debug usage
 * 
 * 
 */
export const debug = () => {
	return ReactDOM.render(
	  <Space>
	    <>
	      Button
	      <Button>Button</Button>
	    </>
	    Button
	    <Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No">
	      <Button>Delete</Button>
	    </Popconfirm>
	    <Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No">
	      <Button disabled>Delete</Button>
	    </Popconfirm>
	    {null}
	    {false}
	    {1}
	    Button
	    {null}
	    {undefined}
	  </Space>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Layout/Space',
	component: Space,
}