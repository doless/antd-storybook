import React from 'react';
import ReactDOM from 'react-dom';

import { Typography, Slider, Switch } from 'antd';

const { Text, Paragraph } = Typography;

class Demo extends React.Component {
  state = {
    rows: 1,
    longText: true,
    copyable: false,
    editable: false,
    expandable: false,
  };

  onChange = rows => {
    this.setState({ rows });
  };

  render() {
    const { rows, longText, copyable, editable, expandable } = this.state;
    return (
      <>
        <Switch
          checked={longText}
          checkedChildren="Long Text"
          onChange={val => this.setState({ longText: val })}
        />
        <Switch onChange={val => this.setState({ copyable: val })} />
        <Switch onChange={val => this.setState({ editable: val })} />
        <Switch onChange={val => this.setState({ expandable: val })} />
        <Slider value={rows} min={1} max={10} onChange={this.onChange} />
        {longText ? (
          <Paragraph ellipsis={{ rows, expandable }} copyable={copyable} editable={editable}>
            Ant Design, a design language for background applications, is refined by Ant UED Team.
            This is a nest sample{' '}
            <Text code strong delete>
              Test
            </Text>{' '}
            case. Bnt Design, a design language for background applications, is refined by Ant UED
            Team. Cnt Design, a design language for background applications, is refined by Ant UED
            Team. Dnt Design, a design language for background applications, is refined by Ant UED
            Team. Ent Design, a design language for background applications, is refined by Ant UED
            Team.
          </Paragraph>
        ) : (
          <Paragraph ellipsis={{ rows, expandable }} copyable={copyable} editable={editable}>
            Hello World
          </Paragraph>
        )}

        <p>
          2333<Text ellipsis>2333</Text>2333
        </p>
      </>
    );
  }
}

/**
 * 
 * 多行文本省略。
 * 
 * 
 * 
 * Multiple line ellipsis support.
 * 
 * 
 */
export const ellipsis_debug = () => {
	return ReactDOM.render(<Demo />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/General/Typography',
	component: Typography,
}