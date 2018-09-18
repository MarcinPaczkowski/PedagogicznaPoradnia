import React from 'react';

const activity = props => {
	return (
		<div className="activity">
			<h3 className="activity-title">{props.title || 'test123'}</h3>
			<p className="activity-desc">
				{props.desc || 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem harum odit.'}
			</p>
		</div>
	);
};

export default activity;
