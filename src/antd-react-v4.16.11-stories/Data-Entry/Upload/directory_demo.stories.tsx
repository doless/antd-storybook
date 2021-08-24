import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

/**
 * 
 * 支持上传一个文件夹里的所有文件。
 * 
 * 
 * 
 * You can select and upload a whole directory.
 * 
 * 
 */
export const directory_demo = () => {
	return ReactDOM.render(
	  <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" directory>
	    <Button icon={<UploadOutlined />}>Upload Directory</Button>
	  </Upload>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Upload',
	component: Upload,
}