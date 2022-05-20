import React from "react";

const MovieCard = ({movie}) => {
	return (
	<div>
		<img src={movie.medium_cover_image} alt="" />
		<div>
			{movie.title}, ({movie.year})
		</div>
		<div>
			рейтинг: {movie.rating}/10
		</div>
	</div>
	);
};

export default MovieCard;
