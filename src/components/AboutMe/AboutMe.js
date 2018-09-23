import React from 'react';
import booksImage from '../../assets/book-bookcase-books-1166657.jpg';
import profilPhotoImage from '../../assets/28701275_1754981077894601_8665706163537446097_o.jpg';

const aboutMe = () => {
	const booksStyles = {
		backgroundImage: `url(${booksImage})`
	};

	const profilPhotoStyles = {
		backgroundImage: `url(${profilPhotoImage})`
	};

	return (
		<div className="aboutMe">
			<div className="aboutMe-background" style={booksStyles} />
			<div className="aboutMe-content">
				<div className="container">
					<div className="columns">
						<div className="column">
							<h2 className="aboutMe-content--title">O mnie</h2>
							<div className="aboutMe-content--photo" style={profilPhotoStyles} />
							<div className="aboutMe-content--desc">
								<h3 className="aboutMe-content--desc-name">Małgorzata Bartczak</h3>
								<p className="aboutMe-content--desc-desc">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tempore nemo incidunt, ad aliquam quidem
									quam consequatur iusto rem mollitia ratione? Accusamus, delectus? Ullam consequuntur optio labore
									itaque obcaecati ab!
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default aboutMe;
