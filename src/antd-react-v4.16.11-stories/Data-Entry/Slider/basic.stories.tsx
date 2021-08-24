import React from 'react';
import ReactDOM from 'react-dom';

import { Slider, Switch } from 'antd';

class Demo extends React.Component {
  state = {
    disabled: false,
  };

  handleDisabledChange = disabled => {
    this.setState({ disabled });
  };

  render() {
    const { disabled } = this.state;
    return (
      <>
        <Slider defaultValue={30} disabled={disabled} />
        <Slider range defaultValue={[20, 50]} disabled={disabled} />
        Disabled: <Switch size="small" checked={disabled} onChange={this.handleDisabledChange} />
      </>
    );
  }
}

/**
 * 
 * 基本滑动条。当 `range` 为 `true` 时，渲染为双滑块。当 `disabled` 为 `true` 时，滑块处于不可用状态。
 * 
 * 
 * 
 * Basic slider. When `range` is `true`, display as dual thumb mode. When `disable` is `true`, the slider will not be interactable.
 * 
 * 
 */
export const basic = () => {
	return ReactDOM.render(<Demo />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Entry/Slider',
	component: Slider,
}