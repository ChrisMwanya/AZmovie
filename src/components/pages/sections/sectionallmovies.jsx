import styled from "styled-components";
import { useState, useEffect } from "react";
import CardMovie from "../../cards/cardmovie";
import Loader from "../../loader/loader";
import Pagination from "../../pagination/pagination";


const SectionStyled = styled.section`
	margin-top: 1rem;
	width: 100vw;
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
	const [actualPage, setActualPage] = useState(1);
	const [totalPages, setTotalPages] = useState();

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=9320cf81bdc9ea7daa7bd98066b669de&language=fr&page=${actualPage}`
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
			});
	}, [actualPage]);

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
		<SectionStyled>
			{loader ? (
				<Loader />
			) : (
				<div>
					<CardContainerStyled>					
							{Movies.map((movie, index) => {
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

export default SectionAllMovies;
