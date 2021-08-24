import React from 'react';
import ReactDOM from 'react-dom';

import { Slider, Switch } from 'antd';

class Demo extends React.Component {
  state = {
    reverse: true,
  };

  handleReverseChange = reverse => {
    this.setState({ reverse });
  };

  render() {
    const { reverse } = this.state;
    return (
      <>
        <Slider defaultValue={30} reverse={reverse} />
        <Slider range defaultValue={[20, 50]} reverse={reverse} />
        Reversed: <Switch size="small" checked={reverse} onChange={this.handleReverseChange} />
      </>
    );
  }
}

/**
 * 
 * 设置 `reverse` 可以将滑动条置反。
 * 
 * 
 * 
 * Using `reverse` to render slider reversely.
 * 
 * 
 */
export const reverse_demo = () => {
	return ReactDOM.render(<Demo />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Entry/Slider',
	component: Slider,
}