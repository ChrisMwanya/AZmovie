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

const SeriesbyCategory = (props) => {
	const [Series, setMovies] = useState([]);
	const [loader, setLoader] = useState(true);
	
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/discover/tv?api_key=9320cf81bdc9ea7daa7bd98066b669de&language=fr&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&with_genres=${props.id}&with_watch_monetization_types=flatrate`
		)
			.then((response) => response.json())
			.then((data) => {
				let dataMapped = data.results.map(
					({
						id,
						name,
						release_date,
						poster_path,
						popularity,
						vote_average,
					}) => {
						return {
							id,
							name,
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
	}, [props.id]);

	return (
		<SectionStyled>
			{loader ? (
				<Loader />
			) : (
				<CardContainerStyled>
					{Series.map((serie) => {
						return (
							<CardMovie
								popularity={serie.popularity}
								vote_average={serie.vote_average}
								urlImage={serie.poster_path}
								key={serie.id}
								date={serie.release_date}
								type="tv"
								id={serie.id}>
								{serie.name}
							</CardMovie>
						);
					})}
				</CardContainerStyled>
			)}
		</SectionStyled>
	);
};

export default SeriesbyCategory;
