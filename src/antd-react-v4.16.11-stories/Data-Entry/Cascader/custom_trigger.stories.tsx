import React from 'react';
import ReactDOM from 'react-dom';

import { Cascader } from 'antd';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
      },
    ],
  },
];

class CitySwitcher extends React.Component {
  state = {
    text: 'Unselect',
  };

  onChange = (value, selectedOptions) => {
    this.setState({
      text: selectedOptions.map(o => o.label).join(', '),
    });
  };

  render() {
    return (
      <span>
        {this.state.text}
        &nbsp;
        <Cascader options={options} onChange={this.onChange}>
          <a href="#">Change city</a>
        </Cascader>
      </span>
    );
  }
}

/**
 * 
 * 切换按钮和结果分开。
 * 
 * 
 * 
 * Separate trigger button and result.
 * 
 * 
 */
export const custom_trigger = () => {
	return ReactDOM.render(<CitySwitcher />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Entry/Cascader',
	component: Cascader,
}