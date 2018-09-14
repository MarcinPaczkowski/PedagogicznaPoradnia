import React, { Component } from 'react';
import Info from '../components/Info/Info';
import About from '../components/About/About';
import ForWhom from '../components/ForWhom/ForWhom';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Info />
				<About />
				<ForWhom />
			</div>
		);
	}
}

export default App;
