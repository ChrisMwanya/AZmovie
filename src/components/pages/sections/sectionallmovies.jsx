import styled from "styled-components";
import { useState, useEffect } from "react";
import CardMovie from "../../cards/cardmovie";
import Loader from "../../loader/loader";

const SectionStyled = styled.section`
	margin-top: 1rem;
	width: 100%;

	.buttons {
		border-bottom: 2px solid ${({ theme }) => theme.colors.secondMain};
	}
`;
const CardContainerStyled = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;

const SectionAllMovies = () => {
	const [Movies, setMovies] = useState([]);
	const [loader, setLoader] = useState(true);
	useEffect(() => {
		fetch(
			"https://api.themoviedb.org/3/movie/popular?api_key=9320cf81bdc9ea7daa7bd98066b669de&language=fr&page=1"
		)
			.then((response) => response.json())
			.then((data) => {
				let dataMapped = data.results.map(
					({
						id,
						title,
						release_date,
						poster_path,
						popularity,
						vote_average,
					}) => {
						return {
							id,
							title,
							release_date,
							poster_path,
							popularity,
							vote_average,
						};
					}
				);
				setMovies(dataMapped);
				setLoader(false);
			});
	}, []);

	return (
		<SectionStyled>
			{loader ? (
				<Loader />
			) : (
				<CardContainerStyled>
					{Movies.map((movie) => {
						return (
							<CardMovie
								popularity={movie.popularity}
								vote_average={movie.vote_average}
								urlImage={movie.poster_path}
								key={movie.id}
								date={movie.release_date}
								type="movie"
								id={movie.id}>
								{movie.title}
							</CardMovie>
						);
					})}
				</CardContainerStyled>
			)}
		</SectionStyled>
	);
};

export default SectionAllMovies;
