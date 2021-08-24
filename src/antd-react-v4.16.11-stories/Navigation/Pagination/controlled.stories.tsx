import React from 'react';
import ReactDOM from 'react-dom';

import { Pagination } from 'antd';

class App extends React.Component {
  state = {
    current: 3,
  };

  onChange = page => {
    console.log(page);
    this.setState({
      current: page,
    });
  };

  render() {
    return <Pagination current={this.state.current} onChange={this.onChange} total={50} />;
  }
}

/**
 * 
 * 受控制的页码。
 * 
 * 
 * 
 * Controlled page number.
 * 
 * 
 */
export const controlled = () => {
	return ReactDOM.render(<App />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Navigation/Pagination',
	component: Pagination,
}