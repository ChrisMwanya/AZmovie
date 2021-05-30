
import CardMovie from "../../cards/cardmovie";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Loader from "../../loader/loader";
import {motion} from "framer-motion"

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

const SectionLatestSeries = () => {
	const [latestMovies, setLastestMovies] = useState([]);
	const [loader,setLoader] = useState(true)
	useEffect(() => {
		fetch(
			"https://api.themoviedb.org/3/tv/popular?api_key=9320cf81bdc9ea7daa7bd98066b669de&language=en-US&page=1"
		)
			.then((response) => response.json())
			.then(({ results }) => {
			
				let dataMapped = results
					.slice(0, 8)
					.map(({ id, name, release_date, poster_path,popularity,vote_average  }) => {
						return { id, name, release_date, poster_path,popularity,vote_average  };
					});
				setLastestMovies(dataMapped);
				setLoader(false)
			});
	}, []);

	return (
		<SectionStyled initial="out"
		animate="in"
		exit="out"
		variants={pageVariant}
		transition={pageTransition}>
			<div>
			{/* <TitleSection>Film du Moment</TitleSection> */}
			{loader ?(<Loader/>):(
				<CardContainerStyled>
				{latestMovies.map((movie) => {
					return (
						<CardMovie
						popularity={movie.popularity}
						vote_average={movie.vote_average}
						urlImage={movie.poster_path}
						key={movie.id}
						date={movie.release_date}
						type="tv"
						id={movie.id}>
							{movie.name}
						</CardMovie>
					);
				})}
			</CardContainerStyled>
			)}
			
			</div>
		</SectionStyled>
	);
};

export default SectionLatestSeries;
