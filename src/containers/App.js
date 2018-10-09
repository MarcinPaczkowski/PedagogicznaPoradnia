import React, { Component } from 'react';
import Info from '../components/Info/Info';
import About from '../components/About/About';
import ForWhom from '../components/ForWhom/ForWhom';
import Activities from '../components/Activities/Activities';
import AboutMe from '../components/AboutMe/AboutMe';
import Contact from '../components/Contact/Contact';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown, faPhoneVolume, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faChevronDown, faPhoneVolume, faEnvelope);

class App extends Component {
	render() {
		return (
			<div className="App">
				<Info />
				<About />
				<ForWhom />
				<Activities />
				<AboutMe />
				<Contact />
			</div>
		);
	}
}

export default App;
