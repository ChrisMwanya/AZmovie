import TitleSection from "../titleSection/titlesection";
import CardMovie from "../../cards/cardmovie";
import { useState, useEffect } from "react";
import styled from "styled-components";

const SectionStyled = styled.section`
	width: 100vw;
`;

const CardContainerStyled = styled.div`
	width: 100vw;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;

const SectionLatestSeries = () => {
	const [latestMovies, setLastestMovies] = useState([]);
	useEffect(() => {
		fetch(
			"https://api.themoviedb.org/3/tv/popular?api_key=9320cf81bdc9ea7daa7bd98066b669de&language=en-US&page=1"
		)
			.then((response) => response.json())
			.then(({ results }) => {
			
				let dataMapped = results
					.slice(0, 8)
					.map(({ id, title, release_date, poster_path }) => {
						return { id, title, release_date, poster_path };
					});
				setLastestMovies(dataMapped);
			});
	}, []);

	return (
		<SectionStyled>
			<TitleSection>Film du Moment</TitleSection>
			<CardContainerStyled>
				{latestMovies.map((movie) => {
					return (
						<CardMovie
							urlImage={movie.poster_path}
							key={movie.id}
							date={movie.release_date}>
							{movie.title}
						</CardMovie>
					);
				})}
			</CardContainerStyled>
		</SectionStyled>
	);
};

export default SectionLatestSeries;
