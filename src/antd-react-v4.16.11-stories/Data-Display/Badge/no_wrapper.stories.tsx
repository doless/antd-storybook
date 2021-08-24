import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Badge, Space, Switch } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

const Demo = () => {
  const [show, setShow] = React.useState(true);

  return (
    <Space>
      <Switch checked={show} onChange={() => setShow(!show)} />
      <Badge count={show ? 25 : 0} />
      <Badge count={show ? <ClockCircleOutlined style={{ color: '#f5222d' }} /> : 0} />
      <Badge
        className="site-badge-count-109"
        count={show ? 109 : 0}
        style={{ backgroundColor: '#52c41a' }}
      />
    </Space>
  );
};

/**
 * 
 * 不包裹任何元素即是独立使用，可自定样式展现。
 * 
 * > 在右上角的 badge 则限定为红色。
 * 
 * 
 * 
 * Used in standalone when children is empty.
 * 
 * 
 */
export const no_wrapper = () => {
	return ReactDOM.render(<Demo />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Display/Badge',
	component: Badge,
}