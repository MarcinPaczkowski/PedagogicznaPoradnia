import React from 'react';
import Activity from './Activity';

const activities = () => {
	return (
		<div className="activities">
			<div className="container">
				<h2 className="activities-title">Zajęcia</h2>
				<div className="activities-wrapper">
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
		</div>
	);
};

export default activities;
