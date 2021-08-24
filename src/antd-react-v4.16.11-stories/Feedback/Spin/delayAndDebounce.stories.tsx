import React from 'react';
import ReactDOM from 'react-dom';

import { Spin, Alert, Switch } from 'antd';

class Card extends React.Component {
  state = { loading: false };

  toggle = value => {
    this.setState({ loading: value });
  };

  render() {
    const container = (
      <Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
    );
    return (
      <div>
        <Spin spinning={this.state.loading} delay={500}>
          {container}
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
 * 延迟显示 loading 效果。当 spinning 状态在 `delay` 时间内结束，则不显示 loading 状态。
 * 
 * 
 * 
 * Specifies a delay for loading state. If `spinning` ends during delay, loading status won't appear.
 * 
 * 
 */
export const delayAndDebounce = () => {
	return ReactDOM.render(<Card />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Feedback/Spin',
	component: Spin,
}