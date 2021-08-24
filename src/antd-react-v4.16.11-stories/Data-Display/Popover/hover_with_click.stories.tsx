import React from 'react';
import ReactDOM from 'react-dom';

import { Popover, Button } from 'antd';

class App extends React.Component {
  state = {
    clicked: false,
    hovered: false,
  };

  hide = () => {
    this.setState({
      clicked: false,
      hovered: false,
    });
  };

  handleHoverChange = visible => {
    this.setState({
      hovered: visible,
      clicked: false,
    });
  };

  handleClickChange = visible => {
    this.setState({
      clicked: visible,
      hovered: false,
    });
  };

  render() {
    const hoverContent = <div>This is hover content.</div>;
    const clickContent = <div>This is click content.</div>;
    return (
      <Popover
        style={{ width: 500 }}
        content={hoverContent}
        title="Hover title"
        trigger="hover"
        visible={this.state.hovered}
        onVisibleChange={this.handleHoverChange}
      >
        <Popover
          content={
            <div>
              {clickContent}
              <a onClick={this.hide}>Close</a>
            </div>
          }
          title="Click title"
          trigger="click"
          visible={this.state.clicked}
          onVisibleChange={this.handleClickChange}
        >
          <Button>Hover and click / 悬停并单击</Button>
        </Popover>
      </Popover>
    );
  }
}

/**
 * 
 * 以下示例显示如何创建可悬停和单击的弹出窗口。
 * 
 * 
 * 
 * The following example shows how to create a popover which can be hovered and clicked.
 * 
 * 
 */
export const hover_with_click = () => {
	return ReactDOM.render(<App />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Display/Popover',
	component: Popover,
}