import React from 'react';
import Activity from './Activity';

const activities = () => {
	return (
		<div className="activities">
			<div className="container">
				<h2 className="activities-title">Rodzaje zajęć</h2>
				<div className="columns">
					<div className="column">
						<Activity title="Korepetycje" desc="testowy opis" />
					</div>
					<div className="column">
						<Activity />
					</div>
					<div className="column">
						<Activity />
					</div>
				</div>
			</div>
		</div>
	);
};

export default activities;
