import React from 'react';
import backgroundImage from '../../assets/activity-art-artistic-707193.jpg';
import ForWhomDetails from './ForWhomDetails';
import childImamge from '../../assets/adorable-baby-child-356192.jpg';
import youthImage from '../../assets/artist-bagpipes-british-34692.jpg';
import parentImage from '../../assets/affection-baby-baby-girl-377058.jpg';

const forWhom = () => {
	const styles = {
		backgroundImage: `url(${backgroundImage})`
	};
	return (
		<div className="forWhom">
			<div className="forWhom-background" style={styles} />
			<div className="forWhom-content">
				<div className="container">
					<div className="forWhom-wrapper">
						<div className="columns">
							<div className="column">
								<div className="forWhom-content--title">Dla kogo?</div>
							</div>
						</div>
						<div className="forWhom-content--circles">
							<div className="columns">
								<div className="column">
									<ForWhomDetails title="Dzieci od 3 roku życia" desc="Testowy opis 1" imgUrl={childImamge} />
								</div>
								<div className="column">
									<ForWhomDetails
										title="Dzieci i młodzież w wieku szkolnym"
										desc="Testowy opis 1"
										imgUrl={youthImage}
									/>
								</div>
								<div className="column">
									<ForWhomDetails title="Rodzice" desc="Testowy opis 1" imgUrl={parentImage} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default forWhom;
