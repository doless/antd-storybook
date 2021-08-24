import React from 'react';
import ReactDOM from 'react-dom';

import { Rate } from 'antd';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

class Rater extends React.Component {
  state = {
    value: 3,
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <span>
        <Rate tooltips={desc} onChange={this.handleChange} value={value} />
        {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
      </span>
    );
  }
}

/**
 * 
 * 给评分组件加上文案展示。
 * 
 * 
 * 
 * Add copywriting in rate components.
 * 
 * 
 */
export const text_demo = () => {
	return ReactDOM.render(<Rater />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Entry/Rate',
	component: Rate,
}