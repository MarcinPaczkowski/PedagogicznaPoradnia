import React, { Component } from 'react';
import Info from '../components/Info/Info';
import About from '../components/About/About';
import ForWhom from '../components/ForWhom/ForWhom';
import Activities from '../components/Activities/Activities';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Info />
				<About />
				<ForWhom />
				<Activities />
			</div>
		);
	}
}

export default App;
