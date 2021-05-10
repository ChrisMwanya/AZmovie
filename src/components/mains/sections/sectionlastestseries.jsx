import TitleSection from "../titleSection/titlesection";
import CardMovie from "../../cards/cardmovie";
import { useState, useEffect } from "react";
import styled from "styled-components";

const SectionStyled = styled.section`
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const CardContainerStyled = styled.div`
	width: 100%;
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
			<div>
			{/* <TitleSection>Film du Moment</TitleSection> */}
			<CardContainerStyled>
				{latestMovies.map((movie) => {
					return (
						<CardMovie
							urlImage={movie.poster_path}
							key={movie.id}
							date={movie.release_date}
							type="tv"
							id={movie.id}>
							{movie.title}
						</CardMovie>
					);
				})}
			</CardContainerStyled>
			</div>
		</SectionStyled>
	);
};

export default SectionLatestSeries;
