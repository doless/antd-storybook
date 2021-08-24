import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Rate } from 'antd';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';

const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

/**
 * 
 * 可以使用 `(RateProps) => ReactNode` 的方式自定义每一个字符。
 * 
 * 
 * 
 * Can customize each character using `(RateProps) => ReactNode`.
 * 
 * 
 */
export const character_function = () => {
	return ReactDOM.render(
	  <>
	    <Rate defaultValue={2} character={({ index }) => index + 1} />
	    <br />
	    <Rate defaultValue={3} character={({ index }) => customIcons[index + 1]} />
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Rate',
	component: Rate,
}