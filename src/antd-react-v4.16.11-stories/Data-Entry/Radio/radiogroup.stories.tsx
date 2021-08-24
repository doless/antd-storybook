import React from 'react';
import ReactDOM from 'react-dom';

import { Radio } from 'antd';

const App = () => {
  const [value, setValue] = React.useState(1);

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </Radio.Group>
  );
};

/**
 * 
 * 一组互斥的 Radio 配合使用。
 * 
 * 
 * 
 * A group of radio components.
 * 
 * 
 */
export const radiogroup = () => {
	return ReactDOM.render(<App />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Entry/Radio',
	component: Radio,
}