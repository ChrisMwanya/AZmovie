import CardMovie from "../../cards/cardmovie";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Loader from "../../loader/loader";
import Button from "../../buttons/button";

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

const ButtonContainerStyled = styled.div`
	display: flex;
	justify-content: space-around;

	div{
		color: white;
		font-size:1rem;
		display:flex;
		justify-content: center;
		align-items: center;
	}
`;

const SectionLatestMovie = () => {
	const [latestMovies, setLastestMovies] = useState([]);
	const [loader, setLoader] = useState(true);
	const [actualPage, setActualPage] = useState(1);
	const [totalPages, setTotalPages] = useState();
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/now_playing?api_key=9320cf81bdc9ea7daa7bd98066b669de&language=fr&page=${actualPage}`
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
				setTotalPages(data.total_pages);
			});
	}, [actualPage]);

	const handleClickNextPage = () => {
		if(actualPage < totalPages){
			setActualPage(actualPage + 1);
		}
	};
	const handleClickPrevPage = () => {
		if(actualPage > 1){
			setActualPage(actualPage - 1);
		}
	};

	

	return (
		<div>
			<SectionStyled>
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
			<ButtonContainerStyled>
				<Button type="type" size="1rem" onClick={handleClickPrevPage} ><i className="fas fa-arrow-left"></i> Précédent</Button>
				<div>{actualPage} / {totalPages}</div>
				<Button type="type" size="1rem"  onClick={handleClickNextPage}>Next <i class="fas fa-arrow-right"></i></Button>
			</ButtonContainerStyled>
		</div>
	);
};

export default SectionLatestMovie;
