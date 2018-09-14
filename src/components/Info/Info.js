import React from 'react';
import backgroundImage from '../../assets/art-art-materials-artistic-286559.jpg';

const info = () => {
	const styles = {
		backgroundImage: `url(${backgroundImage})`
	};

	return (
		<div className="info" style={styles}>
			<div className="container is-fluid">
				<div className="columns">
					<div className="column is-half">
						<div className="info-content">
							<h2 className="info-content--title">Pedagogiczna Pora Dnia</h2>
							<h3 className="info-content--desc">Września</h3>
							<hr className="info-content--divider" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default info;
