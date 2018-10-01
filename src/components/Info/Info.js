import React from 'react';
import backgroundImage from '../../assets/art-art-materials-artistic-286559.jpg';
import logoImage from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const info = () => {
	const backgroundStyles = {
		backgroundImage: `url(${backgroundImage})`
	};

	return (
		<div className="info" style={backgroundStyles}>
			<div className="container is-fluid">
				<div className="info-wrapper">
					<div className="columns">
						<div className="column is-half">
							<div className="info-content">
								<img src={logoImage} alt="Logo pedagogiczna pora dnia" className="info-content--logo" />
								<h2 className="info-content--title">Pedagogiczna Pora Dnia</h2>
								<h3 className="info-content--desc">Września</h3>
								<hr className="info-content--divider" />
								<a className="info-content--icon" href="https://www.facebook.com/pedagogicznaporadnia/">
									<FontAwesomeIcon icon={['fab', 'facebook-f']} />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default info;
