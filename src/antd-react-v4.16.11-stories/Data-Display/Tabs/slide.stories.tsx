import React from 'react';
import ReactDOM from 'react-dom';

import { Tabs, Radio } from 'antd';

const { TabPane } = Tabs;

class SlidingTabsDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'top',
    };
  }

  handleModeChange = e => {
    const mode = e.target.value;
    this.setState({ mode });
  };

  render() {
    const { mode } = this.state;
    return (
      <div>
        <Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}>
          <Radio.Button value="top">Horizontal</Radio.Button>
          <Radio.Button value="left">Vertical</Radio.Button>
        </Radio.Group>
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 220 }}>
          {[...Array.from({ length: 30 }, (v, i) => i)].map(i => (
            <TabPane tab={`Tab-${i}`} key={i} disabled={i === 28}>
              Content of tab {i}
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}

/**
 * 
 * 可以左右、上下滑动，容纳更多标签。
 * 
 * 
 * 
 * In order to fit in more tabs, they can slide left and right (or up and down).
 * 
 * 
 */
export const slide = () => {
	return ReactDOM.render(<SlidingTabsDemo />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Display/Tabs',
	component: Tabs,
}