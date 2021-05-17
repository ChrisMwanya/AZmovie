import styled from "styled-components";
import { useState, useEffect } from "react";
import CardMovie from "../../components/cards/cardmovie";
import TitleSection from "../mains/titleSection/titlesection";
import Button from "./../buttons/button";

const SearchPageStyled = styled.div`
	background: ${({ theme }) => theme.colors.main};
	width: 100vw;
	padding-left: 10vw;
	margin-top: 2rem; 

	.cards-container {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}

	h1 {
		font-size: 3rem;
		color: ${({ theme }) => theme.colors.textWhite};
		font-style: italic;
	}

	.btn-container {
		text-align: left;
		margin: 1rem;
	}
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
`;

const SearchPage = (props) => {
	const [moviesRequestResult, setMoviesRequestResult] = useState({});
	const [tvShowRequestResult, setTvShowRequestResult] = useState({});
	const [toggle, setToggle] = useState(true);

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=9320cf81bdc9ea7daa7bd98066b669de&language=en-US&query=${props.valueInput}&page=1&include_adult=false`
		)
			.then((response) => {
				return response.json();
			})
			.then((dataCollected) => {
				setMoviesRequestResult(dataCollected);
			});
			 // eslint-disable-next-line 
	}, [moviesRequestResult]);

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/search/tv?api_key=9320cf81bdc9ea7daa7bd98066b669de&language=en-US&query=${props.valueInput}&page=1&include_adult=false`
		)
			.then((response) => {
				return response.json();
			})
			.then((dataCollected) => {
				setTvShowRequestResult(dataCollected);
			});
			 // eslint-disable-next-line 
	}, [tvShowRequestResult]);

	const handleClickMovieButton = () => {
		setToggle(true);
	};
	const handleClickTvShowButton = () => {
		setToggle(false);
	};

	return (
		<Container>
			<SearchPageStyled>
				<h1>Resultats de votre recherche: {props.valueInput}</h1>
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
						<TitleSection>Resultats Films</TitleSection>
						<div className="cards-container ">
							{moviesRequestResult.results
								? moviesRequestResult.results.map((movie) => {
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
								: "patientez"}
						</div>
					</>
				) : (
					<>
						<TitleSection>Resultats Séries</TitleSection>
						<div div className="cards-container ">
							{tvShowRequestResult.results
								? tvShowRequestResult.results.map((tvShow) => {
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
								: "patientez"}
						</div>
					</>
				)}
			</SearchPageStyled>
		</Container>
	);
};

export default SearchPage;
