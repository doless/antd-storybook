import React from 'react';
import ReactDOM from 'react-dom';

import { Radio, Input, Space } from 'antd';

class App extends React.Component {
  state = {
    value: 1,
  };

  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <Radio.Group onChange={this.onChange} value={value}>
        <Space direction="vertical">
          <Radio value={1}>Option A</Radio>
          <Radio value={2}>Option B</Radio>
          <Radio value={3}>Option C</Radio>
          <Radio value={4}>
            More...
            {value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
          </Radio>
        </Space>
      </Radio.Group>
    );
  }
}

/**
 * 
 * 垂直的 Radio.Group，配合更多输入框选项。
 * 
 * 
 * 
 * Vertical Radio.Group, with more radios.
 * 
 * 
 */
export const radiogroup_more = () => {
	return ReactDOM.render(<App />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Entry/Radio',
	component: Radio,
}