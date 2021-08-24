import ReactDOM from 'react-dom';

import React, { useState } from 'react';
import { Button, Alert } from 'antd';

const { ErrorBoundary } = Alert;
const ThrowError: React.FC = () => {
  const [error, setError] = useState<Error>();
  const onClick = () => {
    setError(new Error('An Uncaught Error'));
  };

  if (error) {
    throw error;
  }
  return (
    <Button danger onClick={onClick}>
      Click me to throw a error
    </Button>
  );
};

/**
 * 
 * 友好的 [React 错误处理](https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html) 包裹组件。
 * 
 * 
 * 
 * ErrorBoundary Component for making error handling easier in [React](https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html).
 * 
 * 
 */
export const error_boundary = () => {
	return ReactDOM.render(
	  <ErrorBoundary>
	    <ThrowError />
	  </ErrorBoundary>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Feedback/Alert',
	component: Alert,
}