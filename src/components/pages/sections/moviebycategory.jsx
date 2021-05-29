import styled from "styled-components";
import { useState, useEffect } from "react";
import CardMovie from "../../cards/cardmovie";
import Loader from "../../loader/loader";
import Pagination from "../../pagination/pagination";
import {motion} from 'framer-motion'

const SectionStyled = styled(motion.section)`
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

const pageVariant = {
	in: { opacity: 1, x: 0 },
	out: { opacity: 0, x:  "200vw" },
};

const pageTransition = {
	duration: 1,
	type:"spring",
	stiness: 50,
};

const MoviesbyCategory = (props) => {
	const [Movies, setMovies] = useState([]);
	const [loader, setLoader] = useState(true);
	const [actualPage, setActualPage] = useState(1);
	const [totalPages, setTotalPages] = useState();

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/discover/movie?api_key=9320cf81bdc9ea7daa7bd98066b669de&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=${actualPage}&with_genres=${props.id}&with_watch_monetization_types=flatrate`
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
				setTotalPages(data.total_pages);
				window.scrollTo(0, 0);
			});
	}, [props.id, actualPage]);

	const handleClickNextPage = () => {
		if (actualPage < totalPages) {
			setActualPage(actualPage + 1);
		}
	};
	const handleClickPrevPage = () => {
		if (actualPage > 1) {
			setActualPage(actualPage - 1);
		}
	};
	return (
		<SectionStyled initial="out"
		animate="in"
		exit="out"
		variants={pageVariant}
		transition={pageTransition}>
			{loader ? (
				<Loader />
			) : (
				<div>
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
					<Pagination
						onClickNextPage={handleClickNextPage}
						onClickPrevPage={handleClickPrevPage}
						actualPage={actualPage}
						totalPages={totalPages}
					/>
				</div>
			)}
		</SectionStyled>
	);
};

export default MoviesbyCategory;
