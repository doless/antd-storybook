import React from 'react';
import ReactDOM from 'react-dom';

import { Spin, Switch, Alert } from 'antd';

class Card extends React.Component {
  state = { loading: false };

  toggle = value => {
    this.setState({ loading: value });
  };

  render() {
    return (
      <div>
        <Spin spinning={this.state.loading}>
          <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
          />
        </Spin>
        <div style={{ marginTop: 16 }}>
          Loading state：
          <Switch checked={this.state.loading} onChange={this.toggle} />
        </div>
      </div>
    );
  }
}

/**
 * 
 * 可以直接把内容内嵌到 `Spin` 中，将现有容器变为加载状态。
 * 
 * 
 * 
 * Embedding content into `Spin` will set it into loading state.
 * 
 * 
 */
export const nested = () => {
	return ReactDOM.render(<Card />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Feedback/Spin',
	component: Spin,
}