import React from 'react';
import backgroundImage from '../../assets/art-art-materials-artistic-286559.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import umbrellaImgae from '../../assets/drink-umbrella-png-8.png';

const info = () => {
	const styles = {
		backgroundImage: `url(${backgroundImage})`
	};

	return (
		<div className="info" style={styles}>
			<div className="container is-fluid">
				<div className="info-wrapper">
					<div className="columns">
						<div className="column is-half">
							<div className="info-content">
								{/* <img src={umbrellaImgae} alt="Parasolka" /> */}
								<h2 className="info-content--title">Pedagogiczna Pora Dnia</h2>
								<h3 className="info-content--desc">Września</h3>
								<a className="info-content--icon" href="https://www.facebook.com/pedagogicznaporadnia/">
									<FontAwesomeIcon icon={['fab', 'facebook-f']} />
								</a>
								<hr className="info-content--divider" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default info;
