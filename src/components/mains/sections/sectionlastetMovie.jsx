import CardMovie from "../../cards/cardmovie";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Loader from "../../loader/loader";
import {motion} from 'framer-motion'

const SectionStyled = styled(motion.section)`
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

const pageVariant = {
	in: { opacity: 1 },
	out: { opacity: 0 },
};

const pageTransition = {	
	duration:  3,
	type: "spring",
	stiness: 50,
};



const SectionLatestMovie = () => {
	const [latestMovies, setLastestMovies] = useState([]);
	const [loader, setLoader] = useState(true);

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/now_playing?api_key=9320cf81bdc9ea7daa7bd98066b669de&language=fr&page=1`
		)
			.then((response) => response.json())
			.then((data) => {
				let dataMapped = data.results
					.slice(0, 8)
					.map(
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
				setLastestMovies(dataMapped);
				setLoader(false);
				
			});
	}, []);


	return (
		<div>
			<SectionStyled initial="out"
		animate="in"
		exit="out"
		variants={pageVariant}
		transition={pageTransition}>
				<div>
					{loader ? (
						<Loader />
					) : (
						<CardContainerStyled>
							{latestMovies.map((movie) => {
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
				</div>
			</SectionStyled>
		</div>
	);
};

export default SectionLatestMovie;
