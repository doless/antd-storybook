import ReactDOM from 'react-dom';

import React, { useState } from 'react';
import { Avatar, Button } from 'antd';

type SizeType = 'large' | 'small' | 'default' | number;
const App: React.FC = () => {
  const [hide, setHide] = useState(true);
  const [size, setSize] = useState<SizeType>('large');
  const [scale, setScale] = useState(1);
  const toggle = () => {
    setHide(!hide);
  };

  const toggleSize = () => {
    const sizes = ['small', 'default', 'large'] as SizeType[];
    let current = sizes.indexOf(size) + 1;
    if (current > 2) {
      current = 0;
    }
    setSize(sizes[current]);
  };

  const changeScale = () => {
    setScale(scale === 1 ? 2 : 1);
  };

  return (
    <>
      <Button onClick={toggle}>Toggle Avatar visibility</Button>
      <Button onClick={toggleSize}>Toggle Avatar size</Button>
      <Button onClick={changeScale}>Change Avatar scale</Button>
      <br />
      <br />
      <div style={{ textAlign: 'center', transform: `scale(${scale})`, marginTop: 24 }}>
        <Avatar size={size} style={{ background: '#7265e6', display: hide ? 'none' : '' }}>
          Avatar
        </Avatar>
        <Avatar
          size={size}
          src="invalid"
          style={{ background: '#00a2ae', display: hide ? 'none' : '' }}
        >
          Invalid
        </Avatar>
        <div style={{ display: hide ? 'none' : '' }}>
          <Avatar size={size} style={{ background: '#7265e6' }}>
            Avatar
          </Avatar>
          <Avatar size={size} src="invalid" style={{ background: '#00a2ae' }}>
            Invalid
          </Avatar>
        </div>
      </div>
    </>
  );
};

/**
 * 
 * 切换 Avatar 显示的时候，文本样式应该居中并正确调整字体大小。
 * 
 * 
 * 
 * Text inside Avatar should be set a proper font size when toggle it's visibility.
 * 
 * 
 */
export const toggle_debug = () => {
	return ReactDOM.render(<App />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Display/Avatar',
	component: Avatar,
}