import React from 'react';
import ReactDOM from 'react-dom';

import { Input } from 'antd';

const { TextArea } = Input;

class Demo extends React.Component {
  state = {
    value: '',
  };

  onChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <>
        <TextArea placeholder="Autosize height based on content lines" autoSize />
        <div style={{ margin: '24px 0' }} />
        <TextArea
          placeholder="Autosize height with minimum and maximum number of lines"
          autoSize={{ minRows: 2, maxRows: 6 }}
        />
        <div style={{ margin: '24px 0' }} />
        <TextArea
          value={value}
          onChange={this.onChange}
          placeholder="Controlled autosize"
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
      </>
    );
  }
}

/**
 * 
 * `autoSize` 属性适用于 `textarea` 节点，并且只有高度会自动变化。另外 `autoSize` 可以设定为一个对象，指定最小行数和最大行数。
 * 
 * 
 * 
 * `autoSize` prop for a `textarea` type of `Input` makes the height to automatically adjust based on the content. An option object can be provided to `autoSize` to specify the minimum and maximum number of lines the textarea will automatically adjust.
 * 
 * 
 */
export const autosize_textarea = () => {
	return ReactDOM.render(<Demo />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Entry/Input',
	component: Input,
}