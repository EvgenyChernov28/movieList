import React from "react";

const MovieCadr = (props) => {
	return (
	<div>
		<img src={props.movie.medium_cover_image} alt="" />
		<div>
			{props.movie.title}, ({props.movie.year})
		</div>
		<div>
			рейтинг: {props.movie.rating}/10
		</div>
	</div>
	);
};

export default MovieCadr;
