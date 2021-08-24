import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

/**
 * 
 * 把文件拖入指定区域，完成上传，同样支持点击上传。
 * 
 * 设置 `multiple` 后，在 `IE10+` 可以一次上传多个文件。
 * 
 * 
 * 
 * You can drag files to a specific area, to upload. Alternatively, you can also upload by selecting.
 * 
 * We can upload serveral files at once in modern browsers by giving the input the `multiple` attribute.
 * 
 * 
 */
export const drag_demo = () => {
	return ReactDOM.render(
	  <Dragger {...props}>
	    <p className="ant-upload-drag-icon">
	      <InboxOutlined />
	    </p>
	    <p className="ant-upload-text">Click or drag file to this area to upload</p>
	    <p className="ant-upload-hint">
	      Support for a single or bulk upload. Strictly prohibit from uploading company data or other
	      band files
	    </p>
	  </Dragger>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Upload',
	component: Upload,
}