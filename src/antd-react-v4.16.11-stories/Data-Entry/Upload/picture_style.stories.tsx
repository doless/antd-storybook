import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';
import './picture_style.css';

import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const fileList = [
  {
    uid: '-1',
    name: 'xxx.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    uid: '-2',
    name: 'yyy.png',
    status: 'error',
  },
];

/**
 * 
 * 上传文件为图片，可展示本地缩略图。`IE8/9` 不支持浏览器本地缩略图展示（[Ref](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL)），可以写 `thumbUrl` 属性来代替。
 * 
 * 
 * 
 * If uploaded file is a picture, the thumbnail can be shown. `IE8/9` do not support local thumbnail show. Please use `thumbUrl` instead.
 * 
 * 
 */
export const picture_style = () => {
	return ReactDOM.render(
	  <>
	    <Upload
	      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
	      listType="picture"
	      defaultFileList={[...fileList]}
	    >
	      <Button icon={<UploadOutlined />}>Upload</Button>
	    </Upload>
	    <br />
	    <br />
	    <Upload
	      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
	      listType="picture"
	      defaultFileList={[...fileList]}
	      className="upload-list-inline"
	    >
	      <Button icon={<UploadOutlined />}>Upload</Button>
	    </Upload>
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Upload',
	component: Upload,
}