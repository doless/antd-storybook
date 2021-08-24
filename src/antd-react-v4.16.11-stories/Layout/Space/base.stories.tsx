import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Button, Space, Upload, Popconfirm } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

function SpaceDemo() {
  return (
    <Space>
      Space
      <Button type="primary">Button</Button>
      <Upload>
        <Button>
          <UploadOutlined /> Click to Upload
        </Button>
      </Upload>
      <Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No">
        <Button>Confirm</Button>
      </Popconfirm>
    </Space>
  );
}

/**
 * 
 * 相邻组件水平间距。
 * 
 * 
 * 
 * Crowded components horizontal spacing.
 * 
 * 
 */
export const base = () => {
	return ReactDOM.render(<SpaceDemo />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Layout/Space',
	component: Space,
}