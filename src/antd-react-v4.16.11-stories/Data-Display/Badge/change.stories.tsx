import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Badge, Button, Switch, Divider, Avatar } from 'antd';
import { MinusOutlined, PlusOutlined, QuestionOutlined } from '@ant-design/icons';

const ButtonGroup = Button.Group;

class Demo extends React.Component {
  state = {
    count: 5,
    show: true,
  };

  increase = () => {
    const count = this.state.count + 1;
    this.setState({ count });
  };

  decline = () => {
    let count = this.state.count - 1;
    if (count < 0) {
      count = 0;
    }
    this.setState({ count });
  };

  random = () => {
    const count = Math.floor(Math.random() * 100);
    this.setState({ count });
  };

  onChange = show => {
    this.setState({ show });
  };

  render() {
    return (
      <>
        <Badge count={this.state.count}>
          <Avatar shape="square" size="large" />
        </Badge>
        <ButtonGroup>
          <Button onClick={this.decline}>
            <MinusOutlined />
          </Button>
          <Button onClick={this.increase}>
            <PlusOutlined />
          </Button>
          <Button onClick={this.random}>
            <QuestionOutlined />
          </Button>
        </ButtonGroup>
        <Divider />
        <Badge dot={this.state.show}>
          <Avatar shape="square" size="large" />
        </Badge>
        <Switch onChange={this.onChange} checked={this.state.show} />
      </>
    );
  }
}

/**
 * 
 * 展示动态变化的效果。
 * 
 * 
 * 
 * The count will be animated as it changes.
 * 
 * 
 */
export const change = () => {
	return ReactDOM.render(<Demo />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Display/Badge',
	component: Badge,
}