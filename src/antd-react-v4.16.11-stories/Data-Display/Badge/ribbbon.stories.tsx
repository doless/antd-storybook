import React from 'react';
import ReactDOM from 'react-dom';
import './ribbbon.css';

import { Badge, Card } from 'antd';

/**
 * 
 * 使用缎带型的徽标。
 * 
 * 
 * 
 * Use ribbon badge.
 * 
 * 
 */
export const ribbbon = () => {
	return ReactDOM.render(
	  <>
	    <Badge.Ribbon text="Hippies">
	      <Card title="Pushes open the window" size="small">
	        and raises the spyglass.
	      </Card>
	    </Badge.Ribbon>
	    <Badge.Ribbon text="Hippies" color="pink">
	      <Card title="Pushes open the window" size="small">
	        and raises the spyglass.
	      </Card>
	    </Badge.Ribbon>
	    <Badge.Ribbon text="Hippies" color="red">
	      <Card title="Pushes open the window" size="small">
	        and raises the spyglass.
	      </Card>
	    </Badge.Ribbon>
	    <Badge.Ribbon text="Hippies" color="cyan">
	      <Card title="Pushes open the window" size="small">
	        and raises the spyglass.
	      </Card>
	    </Badge.Ribbon>
	    <Badge.Ribbon text="Hippies" color="green">
	      <Card title="Pushes open the window" size="small">
	        and raises the spyglass.
	      </Card>
	    </Badge.Ribbon>
	    <Badge.Ribbon text="Hippies" color="purple">
	      <Card title="Pushes open the window" size="small">
	        and raises the spyglass.
	      </Card>
	    </Badge.Ribbon>
	    <Badge.Ribbon text="Hippies" color="volcano">
	      <Card title="Pushes open the window" size="small">
	        and raises the spyglass.
	      </Card>
	    </Badge.Ribbon>
	    <Badge.Ribbon text="Hippies" color="magenta">
	      <Card title="Pushes open the window" size="small">
	        and raises the spyglass.
	      </Card>
	    </Badge.Ribbon>
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Badge',
	component: Badge,
}