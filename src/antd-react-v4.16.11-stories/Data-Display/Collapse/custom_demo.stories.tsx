import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';
import './custom_demo.css';

import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

/**
 * 
 * 自定义各个面板的背景色、圆角、边距和图标。
 * 
 * 
 * 
 * Customize the background, border, margin styles and icon for each panel.
 * 
 * 
 */
export const custom_demo = () => {
	return ReactDOM.render(
	  <Collapse
	    bordered={false}
	    defaultActiveKey={['1']}
	    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
	    className="site-collapse-custom-collapse"
	  >
	    <Panel header="This is panel header 1" key="1" className="site-collapse-custom-panel">
	      <p>{text}</p>
	    </Panel>
	    <Panel header="This is panel header 2" key="2" className="site-collapse-custom-panel">
	      <p>{text}</p>
	    </Panel>
	    <Panel header="This is panel header 3" key="3" className="site-collapse-custom-panel">
	      <p>{text}</p>
	    </Panel>
	  </Collapse>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Collapse',
	component: Collapse,
}