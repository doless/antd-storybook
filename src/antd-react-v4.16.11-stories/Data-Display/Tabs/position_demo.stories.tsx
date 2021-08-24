import React from 'react';
import ReactDOM from 'react-dom';

import { Tabs, Radio, Space } from 'antd';

const { TabPane } = Tabs;

class Demo extends React.Component {
  state = {
    tabPosition: 'left',
  };

  changeTabPosition = e => {
    this.setState({ tabPosition: e.target.value });
  };

  render() {
    const { tabPosition } = this.state;
    return (
      <>
        <Space style={{ marginBottom: 24 }}>
          Tab position:
          <Radio.Group value={tabPosition} onChange={this.changeTabPosition}>
            <Radio.Button value="top">top</Radio.Button>
            <Radio.Button value="bottom">bottom</Radio.Button>
            <Radio.Button value="left">left</Radio.Button>
            <Radio.Button value="right">right</Radio.Button>
          </Radio.Group>
        </Space>
        <Tabs tabPosition={tabPosition}>
          <TabPane tab="Tab 1" key="1">
            Content of Tab 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab 3
          </TabPane>
        </Tabs>
      </>
    );
  }
}

/**
 * 
 * 有四个位置，`tabPosition="left|right|top|bottom"`。在移动端下，`left|right` 会自动切换成 `top`。
 * 
 * 
 * 
 * Tab's position: left, right, top or bottom. Will auto switch to `top` in mobile.
 * 
 * 
 */
export const position_demo = () => {
	return ReactDOM.render(<Demo />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Display/Tabs',
	component: Tabs,
}