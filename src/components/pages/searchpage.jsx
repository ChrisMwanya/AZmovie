import styled from "styled-components";
import { useState, useEffect } from "react";
import CardMovie from "../../components/cards/cardmovie";
import TitleSection from "../mains/titleSection/titlesection";
import Button from "./../buttons/button";
import Pagination from "../pagination/pagination";
import { motion } from "framer-motion";
import PageLoader from "../loader/pageLoader";

const SearchPageStyled = styled.div`
	background: ${({ theme }) => theme.colors.main};
	width: 100vw;
	padding-left: 8vw;
	margin-top: 4rem;

	.waiting-message {
		height: 70vh;
		color: ${({ theme }) => theme.colors.textWhite};
	}

	.search-container {
		position: fixed;
		top: 3rem;
		z-index: 10;
		width: 84%;
		margin-right: 50%;
		margin-bottom: 1rem;
		padding: 1rem 0;
		border-bottom: 1px solid ${({ theme }) => theme.colors.textWhite};
		background-color: ${({ theme }) => theme.colors.main};
	}
	.input_search {
		position: relative;
		background: transparent;
		width: 40%;
		border-bottom-left-radius: 20px;
		border-top-left-radius: 20px;
		text-align: right;
	}

	.btn-search {
		position: absolute;
		margin-right: -3rem;
		border-bottom-right-radius: 20px;
		border-top-right-radius: 20px;
		background: ${({ theme }) => theme.colors.secondMain};
		transition: all 0.3s ease-in-out;
	}

	.input_search,
	.btn-search {
		border: 1px solid ${({ theme }) => theme.colors.textWhite};
		font-size: 1rem;
		color: ${({ theme }) => theme.colors.textWhite};
		padding: 0.5rem 2rem;
	}

	.input_search:focus,
	.btn-search:focus {
		outline: none;
	}
	.btn-search:hover {
		transform: scale(1.05);
	}
	.btn-search:active {
		transform: scale(1.05);
		color: ${({ theme }) => theme.colors.main};
		background: ${({ theme }) => theme.colors.textWhite};
	}

	.cards-container {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}

	h3,
	h1 {
		font-size: 1rem;
		color: ${({ theme }) => theme.colors.textWhite};
		font-style: italic;
		margin-top: 4.5rem;
	}

	.btn-container {
		text-align: left;
		margin: 1rem;
	}
	@media ${({ theme }) => theme.mediaQueries["bellow-900"]} {
		.input_search,
		.btn-search {
			font-size: 0.6rem;
		}
		.btn-search {
			width: 30%;
			padding: 0.5rem 0.2rem;
		}
		.input_search {
			width: 50%;
			padding: 0.5rem 0.2rem;
		}
	}
`;

const Container = styled(motion.div)`
	display: flex;
	justify-content: center;
`;

const pageVariant = {
	in: { opacity: 1 },
	out: { opacity: 0 },
};

const pageTransition = {
	type: "spring",
	stiness: 50,
};

const SearchPage = (props) => {
	const [request, setRequest] = useState("");
	const [valueInput, setValueInput] = useState("");
	const [moviesRequestResult, setMoviesRequestResult] = useState({});
	const [tvShowRequestResult, setTvShowRequestResult] = useState({});
	const [toggle, setToggle] = useState(true);
	const [actualPageMovie, setActualPageMovie] = useState(1);
	const [totalPagesMovie, setTotalPagesMovie] = useState();
	const [actualPageTvShow, setActualPageTvShow] = useState(1);
	const [totalPagesTvShow, setTotalPagesTvShow] = useState();
	const [load, setLoad] = useState(true);

	useEffect(() => {
		setLoad(true);
		fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=9320cf81bdc9ea7daa7bd98066b669de&language=fr&query=${request}&page=${actualPageMovie}&include_adult=false`
		)
			.then((response) => {
				return response.json();
			})
			.then((dataCollected) => {
				setMoviesRequestResult(dataCollected);
				setTotalPagesMovie(dataCollected.total_pages);
			});
		window.scrollTo({ top: 0, behavior: "smooth" });
		setLoad(false);
	}, [request, actualPageMovie]);

	useEffect(() => {
		setLoad(true);
		fetch(
			`https://api.themoviedb.org/3/search/tv?api_key=9320cf81bdc9ea7daa7bd98066b669de&language=fr&query=${request}&page=${actualPageTvShow}&include_adult=false`
		)
			.then((response) => {
				return response.json();
			})
			.then((dataCollected) => {
				setTvShowRequestResult(dataCollected);
				setTotalPagesTvShow(dataCollected.total_pages);
			});
		window.scrollTo(0, 0);
		setLoad(false);
	}, [request, actualPageTvShow]);

	const handleClickSearch = () => {
		setRequest(valueInput);
	};

	const handleChange = (event) => {
		setValueInput(event.target.value);
	};

	const handleClickMovieButton = () => {
		setToggle(true);
	};
	const handleClickTvShowButton = () => {
		setToggle(false);
	};

	const handleClickNextPageMovie = () => {
		if (actualPageMovie < totalPagesMovie) {
			setActualPageMovie(actualPageMovie + 1);
		}
	};
	const handleClickPrevPageMovie = () => {
		if (actualPageMovie > 1) {
			setActualPageMovie(actualPageMovie - 1);
		}
	};

	const handleClickNextPageTvShow = () => {
		if (actualPageTvShow < totalPagesTvShow) {
			setActualPageTvShow(actualPageTvShow + 1);
		}
	};
	const handleClickPrevPageTvShow = () => {
		if (actualPageTvShow > 1) {
			setActualPageTvShow(actualPageTvShow - 1);
		}
	};

	return (
		<Container
			initial="out"
			animate="in"
			exit="out"
			variants={pageVariant}
			transition={pageTransition}>
			<SearchPageStyled>
				<div className="search-container">
					<input
						type="search"
						onChange={handleChange}
						className="input_search"
						placeholder="Recherche..."
					/>
					<button className="btn-search" onClick={handleClickSearch}>
						Recherche
					</button>
				</div>
				{!request ? (
					<div className="waiting-message">
						<h1>Les Resultats seront affichés ici</h1>
					</div>
				) : (
					<>
						<h3>Resultat(s) de la recherche pour: {request}</h3>

						<div className="btn-container">
							<Button onClick={handleClickMovieButton} size="1rem">
								Films
							</Button>
							<Button onClick={handleClickTvShowButton} size="1rem">
								Series
							</Button>
						</div>
						{toggle ? (
							<>
								{load ? (
									<PageLoader />
								) : (
									<>
										<TitleSection>Resultats Films</TitleSection>
										<div className="cards-container ">
											{moviesRequestResult.results ? (
												moviesRequestResult.results.length === 0 ?
												<div className="waiting-message">
												<p> Pas de Resultat pour cette recherche ! </p>
												</div>:
												moviesRequestResult.results.map((movie) => {
													console.log(movie);
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
												})
											) : (
												<PageLoader />
											)}
										</div>

										<Pagination
											onClickNextPage={handleClickNextPageMovie}
											onClickPrevPage={handleClickPrevPageMovie}
											actualPage={actualPageMovie}
											totalPages={totalPagesMovie}
										/>
									</>
								)}
							</>
						) : (
							<>
								<TitleSection>Resultats Séries</TitleSection>
								<div div className="cards-container ">
									{tvShowRequestResult.results ? (
											tvShowRequestResult.results.length === 0 ?
											<div className="waiting-message">
											<p> Pas de Resultat pour cette recherche ! </p>
											</div>:
										tvShowRequestResult.results.map((tvShow) => {
											console.log(tvShow);
											return (
												<CardMovie
													popularity={tvShow.popularity}
													vote_average={tvShow.vote_average}
													urlImage={tvShow.poster_path}
													key={tvShow.id}
													date={tvShow.release_date}
													type="tv"
													id={tvShow.id}>
													{tvShow.name}
												</CardMovie>
											);
										})
									) : (
										<PageLoader />
									)}
								</div>
								<Pagination
									onClickNextPage={handleClickNextPageTvShow}
									onClickPrevPage={handleClickPrevPageTvShow}
									actualPage={actualPageTvShow}
									totalPages={totalPagesTvShow}
								/>
							</>
						)}
					</>
				)}
			</SearchPageStyled>
		</Container>
	);
};

export default SearchPage;
