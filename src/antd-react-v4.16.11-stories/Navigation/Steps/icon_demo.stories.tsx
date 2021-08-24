import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Steps } from 'antd';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';

const { Step } = Steps;

/**
 * 
 * 通过设置 `Steps.Step` 的 `icon` 属性，可以启用自定义图标。
 * 
 * 
 * 
 * You can use your own custom icons by setting the property `icon` for `Steps.Step`.
 * 
 * 
 */
export const icon_demo = () => {
	return ReactDOM.render(
	  <Steps>
	    <Step status="finish" title="Login" icon={<UserOutlined />} />
	    <Step status="finish" title="Verification" icon={<SolutionOutlined />} />
	    <Step status="process" title="Pay" icon={<LoadingOutlined />} />
	    <Step status="wait" title="Done" icon={<SmileOutlined />} />
	  </Steps>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Navigation/Steps',
	component: Steps,
}