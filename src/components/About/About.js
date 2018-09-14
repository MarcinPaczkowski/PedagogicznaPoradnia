import React from 'react';
import cloudImage from '../../assets/cohete-brands-agencia-de-publicidad-guadalajara-nubes.png';
import childrenImage from '../../assets/children-32frox4aa3x5gy245mku8a@2x.png';

const about = () => {
	const cloudStyles = {
		backgroundImage: `url(${cloudImage})`
	};
	return (
		<div className="about">
			<div className="about-cloud" style={cloudStyles} />
			<div className="container is-fluid">
				<div className="about-content">
					<div className="columns">
						<div className="column">
							<div className="about-content--item">
								<h2 className="about-content--item-title">Czym się zajmuję?</h2>
								<p className="about-content--item-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis commodi saepe delectus tempore doloremque. Eveniet quidem laudantium officia accusantium commodi. Veniam est, eos beatae quas officiis perspiciatis in accusantium fugit?</p>
								<p className="about-content--item-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis commodi saepe delectus tempore doloremque. Eveniet quidem laudantium officia accusantium commodi. Veniam est, eos beatae quas officiis perspiciatis in accusantium fugit?</p>
							</div>
						</div>
						<div className="column">
							<div className="about-content--image">
								<img src={childrenImage} alt="Dzieci" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default about;
