import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';
import './error_demo.css';

import { Result, Button, Typography } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

const { Paragraph, Text } = Typography;

/**
 * 
 * 复杂的错误反馈。
 * 
 * 
 * 
 * Complex error feedback.
 * 
 * 
 */
export const error_demo = () => {
	return ReactDOM.render(
	  <Result
	    status="error"
	    title="Submission Failed"
	    subTitle="Please check and modify the following information before resubmitting."
	    extra={[
	      <Button type="primary" key="console">
	        Go Console
	      </Button>,
	      <Button key="buy">Buy Again</Button>,
	    ]}
	  >
	    <div className="desc">
	      <Paragraph>
	        <Text
	          strong
	          style={{
	            fontSize: 16,
	          }}
	        >
	          The content you submitted has the following error:
	        </Text>
	      </Paragraph>
	      <Paragraph>
	        <CloseCircleOutlined className="site-result-demo-error-icon" /> Your account has been
	        frozen. <a>Thaw immediately &gt;</a>
	      </Paragraph>
	      <Paragraph>
	        <CloseCircleOutlined className="site-result-demo-error-icon" /> Your account is not yet
	        eligible to apply. <a>Apply Unlock &gt;</a>
	      </Paragraph>
	    </div>
	  </Result>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Feedback/Result',
	component: Result,
}