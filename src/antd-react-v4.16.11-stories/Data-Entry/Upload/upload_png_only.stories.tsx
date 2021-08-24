import Icon from '@ant-design/icons';
import ReactDOM from 'react-dom';

import React, { useState } from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const Uploader = () => {
  const props = {
    beforeUpload: file => {
      if (file.type !== 'image/png') {
        message.error(`${file.name} is not a png file`);
      }
      return file.type === 'image/png' ? true : Upload.LIST_IGNORE;
    },
    onChange: info => {
      console.log(info.fileList);
    },
  };
  return (
    <Upload {...props}>
      <Button icon={<UploadOutlined />}>Upload png only</Button>
    </Upload>
  );
};

/**
 * 
 * `beforeUpload` 返回 `false` 或 `Promise.reject` 时，只用于拦截上传行为，不会阻止文件进入上传列表（[原因](https://github.com/ant-design/ant-design/issues/15561#issuecomment-475108235)）。如果需要阻止列表展现，可以通过返回 `Upload.LIST_IGNORE` 实现。
 * 
 * 
 * 
 * `beforeUpload` only prevent upload behavior when return false or reject promise, the prevented file would still show in file list. Here is the example you can keep prevented files out of list by return `UPLOAD.LIST_IGNORE`.
 * 
 * 
 */
export const upload_png_only = () => {
	return ReactDOM.render(<Uploader />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Entry/Upload',
	component: Upload,
}