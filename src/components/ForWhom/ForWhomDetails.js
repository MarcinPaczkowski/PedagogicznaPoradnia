import React from 'react';

const forWhomDetails = props => {
	const styles = {
		backgroundImage: `url(${props.imgUrl})`
	};
	return (
		<div className="forWhomDetails">
			<div className="forWhomDetails-circle" style={styles} />
			<h2 className="forWhomDetails-title">{props.title}</h2>
			<p className="forWhomDetails-desc">{props.desc}</p>
			<a className="button is-light is-outlined">Więcej</a>
		</div>
	);
};

export default forWhomDetails;
