import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Alert } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const icon = <SmileOutlined />;

/**
 * 
 * 可口的图标让信息类型更加醒目。
 * 
 * 
 * 
 * A relevant icon makes information clearer and more friendly.
 * 
 * 
 */
export const custom_icon = () => {
	return ReactDOM.render(
	  <>
	    <Alert icon={icon} message="showIcon = false" type="success" />
	    <Alert icon={icon} message="Success Tips" type="success" showIcon />
	    <Alert icon={icon} message="Informational Notes" type="info" showIcon />
	    <Alert icon={icon} message="Warning" type="warning" showIcon />
	    <Alert icon={icon} message="Error" type="error" showIcon />
	    <Alert
	      icon={icon}
	      message="Success Tips"
	      description="Detailed description and advices about successful copywriting."
	      type="success"
	      showIcon
	    />
	    <Alert
	      icon={icon}
	      message="Informational Notes"
	      description="Additional description and informations about copywriting."
	      type="info"
	      showIcon
	    />
	    <Alert
	      icon={icon}
	      message="Warning"
	      description="This is a warning notice about copywriting."
	      type="warning"
	      showIcon
	    />
	    <Alert
	      icon={icon}
	      message="Error"
	      description="This is an error message about copywriting."
	      type="error"
	      showIcon
	    />
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Feedback/Alert',
	component: Alert,
}