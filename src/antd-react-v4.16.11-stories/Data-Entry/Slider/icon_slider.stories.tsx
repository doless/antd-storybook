import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';
import './icon_slider.css';

import { Slider } from 'antd';
import { FrownOutlined, SmileOutlined } from '@ant-design/icons';

class IconSlider extends React.Component {
  state = {
    value: 0,
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const { max, min } = this.props;
    const { value } = this.state;
    const mid = ((max - min) / 2).toFixed(5);
    const preColorCls = value >= mid ? '' : 'icon-wrapper-active';
    const nextColorCls = value >= mid ? 'icon-wrapper-active' : '';
    return (
      <div className="icon-wrapper">
        <FrownOutlined className={preColorCls} />
        <Slider {...this.props} onChange={this.handleChange} value={value} />
        <SmileOutlined className={nextColorCls} />
      </div>
    );
  }
}

/**
 * 
 * 滑块左右可以设置图标来表达业务含义。
 * 
 * 
 * 
 * You can add an icon beside the slider to make it meaningful.
 * 
 * 
 */
export const icon_slider = () => {
	return ReactDOM.render(<IconSlider min={0} max={20} />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Entry/Slider',
	component: Slider,
}