import React from 'react';
import ReactDOM from 'react-dom';

import { Input, Button } from 'antd';

const { TextArea } = Input;

const defaultValue =
  'The autoSize property applies to textarea nodes, and only the height changes automatically. In addition, autoSize can be set to an object, specifying the minimum number of rows and the maximum number of rows. The autoSize property applies to textarea nodes, and only the height changes automatically. In addition, autoSize can be set to an object, specifying the minimum number of rows and the maximum number of rows.';

class Demo extends React.Component {
  state = {
    autoResize: false,
  };

  render() {
    const { autoResize } = this.state;

    return (
      <>
        <Button
          onClick={() => this.setState({ autoResize: !autoResize })}
          style={{ marginBottom: 16 }}
        >
          Auto Resize: {String(autoResize)}
        </Button>
        <TextArea rows={4} autoSize={autoResize} defaultValue={defaultValue} />
        <TextArea allowClear style={{ width: 93 }} />
      </>
    );
  }
}

/**
 * 
 * 用于多行输入。
 * 
 * 
 * 
 * For multi-line input.
 * 
 * 
 */
export const textarea_resize = () => {
	return ReactDOM.render(<Demo />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Entry/Input',
	component: Input,
}