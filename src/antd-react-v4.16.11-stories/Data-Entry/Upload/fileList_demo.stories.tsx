import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

class MyUpload extends React.Component {
  state = {
    fileList: [
      {
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'http://www.baidu.com/xxx.png',
      },
    ],
  };

  handleChange = info => {
    let fileList = [...info.fileList];

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    fileList = fileList.slice(-2);

    // 2. Read from response and show file link
    fileList = fileList.map(file => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });

    this.setState({ fileList });
  };

  render() {
    const props = {
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      onChange: this.handleChange,
      multiple: true,
    };
    return (
      <Upload {...props} fileList={this.state.fileList}>
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>
    );
  }
}

/**
 * 
 * 使用 `fileList` 对列表进行完全控制，可以实现各种自定义功能，以下演示二种情况：
 * 
 * 1. 上传列表数量的限制。
 * 
 * 2. 读取远程路径并显示链接。
 * 
 * 
 * 
 * You can gain full control over filelist by configuring `fileList`. You can accomplish all kinds of customed functions. The following shows two circumstances:
 * 
 * 1. limit the number of uploaded files.
 * 
 * 2. read from response and show file link.
 * 
 * 
 */
export const fileList_demo = () => {
	return ReactDOM.render(<MyUpload />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Entry/Upload',
	component: Upload,
}