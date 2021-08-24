import React from 'react';
import ReactDOM from 'react-dom';

import { Switch, Button } from 'antd';

const App = () => {
  const [disabled, setDisabled] = React.useState(true);

  const toggle = () => {
    setDisabled(!disabled);
  };

  return (
    <>
      <Switch disabled={disabled} defaultChecked />
      <br />
      <Button type="primary" onClick={toggle}>
        Toggle disabled
      </Button>
    </>
  );
};

/**
 * 
 * Switch 失效状态。
 * 
 * 
 * 
 * Disabled state of `Switch`.
 * 
 * 
 */
export const disabled_demo = () => {
	return ReactDOM.render(<App />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Entry/Switch',
	component: Switch,
}