import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';
import './legacy_group.css';

import { Button, Tooltip } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

function getGroup(props) {
  return (
    <div>
      <Button.Group {...props}>
        <Button type="primary">Button 1</Button>
        <Button type="primary">Button 2</Button>
        <Tooltip title="Tooltip">
          <Button type="primary" icon={<DownloadOutlined />} disabled />
        </Tooltip>
        <Tooltip title="Tooltip">
          <Button type="primary" icon={<DownloadOutlined />} />
        </Tooltip>
      </Button.Group>
    </div>
  );
}

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
export const legacy_group = () => {
	return ReactDOM.render(
	  <>
	    {getGroup({ size: 'small' })}
	    <br />
	    {getGroup()}
	    <br />
	    {getGroup({ size: 'large' })}
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/General/Button',
	component: Button,
}