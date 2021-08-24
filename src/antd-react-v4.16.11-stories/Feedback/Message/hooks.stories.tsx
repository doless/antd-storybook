import React from 'react';
import ReactDOM from 'react-dom';

import { message, Button } from 'antd';

const Context = React.createContext({ name: 'Default' });

function Demo() {
  const [messageApi, contextHolder] = message.useMessage();
  const info = () => {
    messageApi.open({
      type: 'info',
      content: <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>,
      duration: 1,
    });
  };

  return (
    <Context.Provider value={{ name: 'Ant Design' }}>
      {contextHolder}
      <Button type="primary" onClick={info}>
        Display normal message
      </Button>
    </Context.Provider>
  );
}

/**
 * 
 * 通过 `message.useMessage` 创建支持读取 context 的 `contextHolder`。
 * 
 * 
 * 
 * Use `message.useMessage` to get `contextHolder` with context accessible issue.
 * 
 * 
 */
export const hooks = () => {
	return ReactDOM.render(<Demo />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Feedback/Message',
	component: message,
}