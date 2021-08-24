import React from 'react';
import ReactDOM from 'react-dom';

import { Input, Space, Button, Switch } from 'antd';

const Demo = () => {
  const inputRef = React.useRef<any>(null);
  const [input, setInput] = React.useState(true);

  const sharedProps = {
    style: { width: '100%' },
    defaultValue: 'Ant Design love you!',
    ref: inputRef,
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Space wrap>
        <Button
          onClick={() => {
            inputRef.current!.focus({
              cursor: 'start',
            });
          }}
        >
          Focus at first
        </Button>
        <Button
          onClick={() => {
            inputRef.current!.focus({
              cursor: 'end',
            });
          }}
        >
          Focus at last
        </Button>
        <Button
          onClick={() => {
            inputRef.current!.focus({
              cursor: 'all',
            });
          }}
        >
          Focus to select all
        </Button>
        <Button
          onClick={() => {
            inputRef.current!.focus({
              preventScroll: true,
            });
          }}
        >
          Focus prevent scroll
        </Button>
        <Switch
          checked={input}
          checkedChildren="Input"
          unCheckedChildren="TextArea"
          onChange={() => {
            setInput(!input);
          }}
        />
      </Space>
      <br />
      {input ? <Input {...sharedProps} /> : <Input.TextArea {...sharedProps} />}
    </Space>
  );
};

/**
 * 
 * 聚焦额外配置属性。
 * 
 * 
 * 
 * Focus with additional option.
 * 
 * 
 */
export const focus_demo = () => {
	return ReactDOM.render(<Demo />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Entry/Input',
	component: Input,
}