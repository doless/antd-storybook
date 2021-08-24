import React from 'react';
import ReactDOM from 'react-dom';

import { Calendar, Alert } from 'antd';
import moment from 'moment';

class App extends React.Component {
  state = {
    value: moment('2017-01-25'),
    selectedValue: moment('2017-01-25'),
  };

  onSelect = value => {
    this.setState({
      value,
      selectedValue: value,
    });
  };

  onPanelChange = value => {
    this.setState({ value });
  };

  render() {
    const { value, selectedValue } = this.state;
    return (
      <>
        <Alert
          message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`}
        />
        <Calendar value={value} onSelect={this.onSelect} onPanelChange={this.onPanelChange} />
      </>
    );
  }
}

/**
 * 
 * 一个通用的日历面板，支持年/月切换。
 * 
 * 
 * 
 * A basic calendar component with Year/Month switch.
 * 
 * 
 */
export const select_demo = () => {
	return ReactDOM.render(<App />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Display/Calendar',
	component: Calendar,
}