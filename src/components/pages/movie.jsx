import styled from "styled-components";
import SectionAllMovies from "./sections/sectionallmovies";
import CategoriesList from "../categories/categories";
import { useState } from "react";
import { motion } from "framer-motion";
import MoviesbyCategory from "./sections/moviebycategory";

const PageMovie = styled(motion.div)`
	padding: 1rem 0;
	margin-top: 2rem;
	width: 100%;
	background: ${({ theme }) => theme.colors.main};
	overflow-x: hidden;
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

const Movie = () => {
	const [idCategory, setIdCategory] = useState();
	const [isMoviesDisplayedByCategory, setIsMoviesDisplayedByCategory] =
		useState(false);
	const handleClick = (idCategory) => {
		setIdCategory(idCategory);
		setIsMoviesDisplayedByCategory(true);
	};
	const switchToAllMovies = () => {
		setIsMoviesDisplayedByCategory(false);
	};

	return (
		<PageMovie initial="out"
		animate="in"
		exit="out"
		variants={pageVariant}
		transition={pageTransition}>
			<CategoriesList
				type="movie"
				change={switchToAllMovies}
				onClick={handleClick}
			/>
			{isMoviesDisplayedByCategory ? (
				<MoviesbyCategory id={idCategory} />
			) : (
				<SectionAllMovies />
			)}
		</PageMovie>
	);
};

export default Movie;
