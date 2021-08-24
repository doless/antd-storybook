import React from 'react';
import ReactDOM from 'react-dom';

import { Typography } from 'antd';

const { Text } = Typography;

const EllipsisMiddle = ({ suffixCount, children }) => {
  const start = children.slice(0, children.length - suffixCount).trim();
  const suffix = children.slice(-suffixCount).trim();
  return (
    <Text style={{ maxWidth: '100%' }} ellipsis={{ suffix }}>
      {start}
    </Text>
  );
};

/**
 * 
 * 使用 `ellipsis={{ suffix: ... }}` 可以封装一个从中间省略内容的组件，适合于需要保留文本末位特征的内容。
 * 
 * 
 * 
 * You can ellipsis content from middle by customize `ellipsis={{ suffix: ... }}`.
 * 
 * 
 */
export const ellipsis_middle = () => {
	return ReactDOM.render(
	  <EllipsisMiddle suffixCount={12}>
	    In the process of internal desktop applications development, many different design specs and
	    implementations would be involved, which might cause designers and developers difficulties and
	    duplication and reduce the efficiency of development.
	  </EllipsisMiddle>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/General/Typography',
	component: Typography,
}