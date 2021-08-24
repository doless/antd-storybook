import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Progress, Button } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

class App extends React.Component {
  state = {
    percent: 0,
  };

  increase = () => {
    let percent = this.state.percent + 10;
    if (percent > 100) {
      percent = 100;
    }
    this.setState({ percent });
  };

  decline = () => {
    let percent = this.state.percent - 10;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({ percent });
  };

  render() {
    return (
      <>
        <Progress type="circle" percent={this.state.percent} />
        <Button.Group>
          <Button onClick={this.decline} icon={<MinusOutlined />} />
          <Button onClick={this.increase} icon={<PlusOutlined />} />
        </Button.Group>
      </>
    );
  }
}

/**
 * 
 * 会动的进度条才是好进度条。
 * 
 * 
 * 
 * A dynamic progress bar is better.
 * 
 * 
 */
export const circle_dynamic = () => {
	return ReactDOM.render(<App />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Feedback/Progress',
	component: Progress,
}