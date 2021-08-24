import React from 'react';
import ReactDOM from 'react-dom';

import { Tag, Button } from 'antd';

class Demo extends React.Component {
  state = {
    visible: true,
  };

  render() {
    return (
      <>
        <Tag
          closable
          visible={this.state.visible}
          onClose={() => this.setState({ visible: false })}
        >
          Movies
        </Tag>
        <br />
        <Button size="small" onClick={() => this.setState({ visible: !this.state.visible })}>
          Toggle
        </Button>
      </>
    );
  }
}

/**
 * 
 * 通过 `visible` 属性控制关闭状态。
 * 
 * 
 * 
 * By using the `visible` prop, you can control the close state of Tag.
 * 
 * 
 */
export const controlled = () => {
	return ReactDOM.render(<Demo />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Display/Tag',
	component: Tag,
}