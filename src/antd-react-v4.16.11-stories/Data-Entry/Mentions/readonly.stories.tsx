import React from 'react';
import ReactDOM from 'react-dom';

import { Mentions } from 'antd';

const { Option } = Mentions;

function getOptions() {
  return ['afc163', 'zombiej', 'yesmeck'].map(value => (
    <Option key={value} value={value}>
      {value}
    </Option>
  ));
}

function App() {
  return (
    <>
      <div style={{ marginBottom: 10 }}>
        <Mentions style={{ width: '100%' }} placeholder="this is disabled Mentions" disabled>
          {getOptions()}
        </Mentions>
      </div>
      <Mentions style={{ width: '100%' }} placeholder="this is readOnly Mentions" readOnly>
        {getOptions()}
      </Mentions>
    </>
  );
}

/**
 * 
 * 通过 `disabled` 属性设置是否生效。通过 `readOnly` 属性设置是否只读。
 * 
 * 
 * 
 * Configurate `disabled` and `readOnly`.
 * 
 * 
 */
export const readonly = () => {
	return ReactDOM.render(<App />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Entry/Mentions',
	component: Mentions,
}