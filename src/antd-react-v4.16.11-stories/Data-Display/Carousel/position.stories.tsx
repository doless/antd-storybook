import React from 'react';
import ReactDOM from 'react-dom';

import { Carousel, Radio } from 'antd';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const PositionCarouselDemo = () => {
  const [dotPosition, setDotPosition] = React.useState('top');

  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };

  return (
    <>
      <Radio.Group onChange={handlePositionChange} value={dotPosition} style={{ marginBottom: 8 }}>
        <Radio.Button value="top">Top</Radio.Button>
        <Radio.Button value="bottom">Bottom</Radio.Button>
        <Radio.Button value="left">Left</Radio.Button>
        <Radio.Button value="right">Right</Radio.Button>
      </Radio.Group>
      <Carousel dotPosition={dotPosition}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </>
  );
};

/**
 * 
 * 位置有 4 个方向。
 * 
 * 
 * 
 * There are 4 position options available.
 * 
 * 
 */
export const position = () => {
	return ReactDOM.render(<PositionCarouselDemo />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Display/Carousel',
	component: Carousel,
}