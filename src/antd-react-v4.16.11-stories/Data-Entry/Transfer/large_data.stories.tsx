import React from 'react';
import ReactDOM from 'react-dom';

import { Transfer, Switch } from 'antd';

const App = () => {
  const [oneWay, setOneWay] = React.useState(false);
  const [mockData, setMockData] = React.useState([]);
  const [targetKeys, setTargetKeys] = React.useState([]);

  React.useEffect(() => {
    const newTargetKeys = [];
    const newMockData = [];
    for (let i = 0; i < 2000; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: Math.random() * 2 > 1,
      };
      if (data.chosen) {
        newTargetKeys.push(data.key);
      }
      newMockData.push(data);
    }

    setTargetKeys(newTargetKeys);
    setMockData(newMockData);
  }, []);

  const onChange = (newTargetKeys, direction, moveKeys) => {
    console.log(newTargetKeys, direction, moveKeys);
    setTargetKeys(newTargetKeys);
  };

  return (
    <>
      <Transfer
        dataSource={mockData}
        targetKeys={targetKeys}
        onChange={onChange}
        render={item => item.title}
        oneWay={oneWay}
        pagination
      />
      <br />
      <Switch
        unCheckedChildren="one way"
        checkedChildren="one way"
        checked={oneWay}
        onChange={setOneWay}
      />
    </>
  );
};

/**
 * 
 * 大数据下使用分页。
 * 
 * 
 * 
 * large count of items with pagination.
 * 
 * 
 */
export const large_data = () => {
	return ReactDOM.render(<App />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Entry/Transfer',
	component: Transfer,
}