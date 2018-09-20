import React from 'react';
import Activity from './Activity';
import wavesImage from '../../assets/wavy_line_png_by_maddielovesselly-d6kg87o.png';

const activities = () => {
	const wavesStyles = {
		backgroundImage: `url(${wavesImage})`
	};
	return (
		<div className="activities">
			<div className="activities-waves" style={wavesStyles} />
			<div className="container">
				<h2 className="activities-title">Zajęcia</h2>
				<div className="columns">
					<div className="column">
						<Activity title="Korepetycje" desc="testowy opis" />
					</div>
					<div className="column">
						<Activity title="" desc="testowy opis" color="#86abff" />
					</div>
					<div className="column">
						<Activity title="Korepetycje" desc="testowy opis" />
					</div>
				</div>
				<div className="columns">
					<div className="column">
						<Activity title="Korepetycje" desc="testowy opis" color="#86abff" />
					</div>
					<div className="column">
						<Activity title="" desc="testowy opis" />
					</div>
					<div className="column">
						<Activity title="Korepetycje" desc="testowy opis" color="#86abff" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default activities;
