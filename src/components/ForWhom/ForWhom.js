import React from 'react';
import backgroundImage from '../../assets/activity-art-artistic-707193.jpg';

const forWhom = () => {
	const styles = {
		backgroundImage: `url(${backgroundImage})`
	};
	return (
		<div className="forWhom" style={styles}>
			<div className="container">
				<div className="columns">
					<div className="column">x</div>
					<div className="column">y</div>
					<div className="column">z</div>
				</div>
			</div>
		</div>
	);
};

export default forWhom;
