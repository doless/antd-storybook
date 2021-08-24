import React from 'react';
import ReactDOM from 'react-dom';

import { Popover, Button } from 'antd';

class App extends React.Component {
  state = {
    visible: false,
  };

  hide = () => {
    this.setState({
      visible: false,
    });
  };

  handleVisibleChange = visible => {
    this.setState({ visible });
  };

  render() {
    return (
      <Popover
        content={<a onClick={this.hide}>Close</a>}
        title="Title"
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
      >
        <Button type="primary">Click me</Button>
      </Popover>
    );
  }
}

/**
 * 
 * 使用 `visible` 属性控制浮层显示。
 * 
 * 
 * 
 * Use `visible` prop to control the display of the card.
 * 
 * 
 */
export const control = () => {
	return ReactDOM.render(<App />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Display/Popover',
	component: Popover,
}