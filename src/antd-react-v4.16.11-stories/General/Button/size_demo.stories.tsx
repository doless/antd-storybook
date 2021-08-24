import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

class ButtonSize extends React.Component {
  state = {
    size: 'large',
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <>
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br />
        <br />
        <Button type="primary" size={size}>
          Primary
        </Button>
        <Button size={size}>Default</Button>
        <Button type="dashed" size={size}>
          Dashed
        </Button>
        <br />
        <Button type="link" size={size}>
          Link
        </Button>
        <br />
        <Button type="primary" icon={<DownloadOutlined />} size={size} />
        <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
        <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} />
        <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
          Download
        </Button>
        <Button type="primary" icon={<DownloadOutlined />} size={size}>
          Download
        </Button>
      </>
    );
  }
}

/**
 * 
 * 按钮有大、中、小三种尺寸。
 * 
 * 通过设置 `size` 为 `large` `small` 分别把按钮设为大、小尺寸。若不设置 `size`，则尺寸为中。
 * 
 * 
 * 
 * Ant Design supports a default button size as well as a large and small size.
 * 
 * If a large or small button is desired, set the `size` property to either `large` or `small` respectively. Omit the `size` property for a button with the default size.
 * 
 * 
 */
export const size_demo = () => {
	return ReactDOM.render(<ButtonSize />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/General/Button',
	component: Button,
}