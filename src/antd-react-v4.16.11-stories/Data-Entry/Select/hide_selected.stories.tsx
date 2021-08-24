import React from 'react';
import ReactDOM from 'react-dom';

import { Select } from 'antd';

const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];

class SelectWithHiddenSelectedOptions extends React.Component {
  state = {
    selectedItems: [],
  };

  handleChange = selectedItems => {
    this.setState({ selectedItems });
  };

  render() {
    const { selectedItems } = this.state;
    const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));
    return (
      <Select
        mode="multiple"
        placeholder="Inserted are removed"
        value={selectedItems}
        onChange={this.handleChange}
        style={{ width: '100%' }}
      >
        {filteredOptions.map(item => (
          <Select.Option key={item} value={item}>
            {item}
          </Select.Option>
        ))}
      </Select>
    );
  }
}

/**
 * 
 * 隐藏下拉列表中已选择的选项。
 * 
 * 
 * 
 * Hide already selected options in the dropdown.
 * 
 * 
 */
export const hide_selected = () => {
	return ReactDOM.render(<SelectWithHiddenSelectedOptions />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Entry/Select',
	component: Select,
}