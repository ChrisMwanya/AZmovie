import styled from "styled-components";
import Button from "./../../buttons/button";
import CardMovie from "../../cards/cardmovie";
import Carousel from "react-elastic-carousel";
// import imageFond from "../../images/VinDiesel.jpg";
// import poster from "../../images/fastandfurious.jpg";
import TitleSection from "../../mains/titleSection/titlesection";
import CardActor from "../../cards/cardactor";
import { useState, useEffect } from "react";
import CardSerie from "../../cards/cardsaison";

const AboutMovieStyled = styled.div`
	background: ${({ theme }) => theme.colors.main};
	color: ${({ theme }) => theme.colors.textWhite};
	display: flex;
	justify-content: center;
	padding: 0.9rem;

	.container {
		width: 100vw;
	}

	.header {
		position: relative;
		padding-right: 2rem;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)),
			url("${(props) => (props.imageFond ? props.imageFond : "")}") no-repeat;
		background-size: cover;
		height: 70vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-end;
	}

	a {
		text-decoration: none;
		color: white;
		margin: 1rem;
	}

	.synopsis {
		margin-top: 6rem;
		padding: 1rem;
		border-bottom: 0.1px solid ${({ theme }) => theme.colors.textWhite};
	}

	span {
		margin: 0.5rem;
	}

	.categorie {
		width: 50%;
		display: flex;
		justify-content: flex-start;
	}

	.slide-other {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}

	p {
		padding-top: 1rem;
	}

	.more-info {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 1rem;
		position: absolute;
		right: 0.8rem;
		margin-top: -6rem;
		width: 75.2%;
		height: 9vw;
		background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.7),
			rgba(0, 0, 0, 1)
		);
	}

	h1 {
		font-size: 3rem;
	}

	.btn-container {
		margin-top: 1rem;
	}

	.other-info {
		display: flex;
		justify-content: space-between;
	}

	.other {
		padding: 1rem;
	}

	.film-poster {
		border-radius: 15px;
		margin-left: 2rem;
		margin-top: -13rem;
		position: absolute;
		background: url("${(props) =>props.imagePoster ? props.imagePoster : ""}")
			no-repeat;
		background-size: cover;
		background-position: center;
		height: 48vh;
		width: 20vw;
		background-position: center;
	}

	.actors {
		padding: 1rem;
		border-bottom: 0.1px solid ${({ theme }) => theme.colors.textWhite};
	}

	.actors-container {
		padding: 1rem;
		display: flex;
		flex-wrap: wrap;
	}

	.rec.rec-arrow {
		
		background: ${({ theme }) => theme.colors.secondMain};
	}

	.rec.rec-pagination {
		color: ${({ theme }) => theme.colors.textWhite};
		display:none;
	}
`;

const AboutSerie = (props) => {
	const [serie, setSerie] = useState([]);
	const [actors, setActors] = useState([]);
	const [similar, setSimilar] = useState([]);

	console.log(props.match);
	const urlSegment = props.match.url;

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3${urlSegment}?api_key=9320cf81bdc9ea7daa7bd98066b669de&language=fr`
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				setSerie(data);
			});
	}, [urlSegment]);

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3${urlSegment}/credits?api_key=9320cf81bdc9ea7daa7bd98066b669de&language=fr`
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setActors(data);
			});
		
	}, [urlSegment]);

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3${urlSegment}/similar?api_key=9320cf81bdc9ea7daa7bd98066b669de&language=en-US&page=1`
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setSimilar(data);
			});
			window.scrollTo(0,0)
	}, [urlSegment]);

	let urlFond = `https://image.tmdb.org/t/p/w500/${serie.backdrop_path}`;

	let urlPoster = `https://image.tmdb.org/t/p/w500/${serie.poster_path}`;
	return (
		<AboutMovieStyled imageFond={urlFond} imagePoster={urlPoster}>
			<div className="container">
				<div className="header">
					<h1>{serie.name}</h1>
					<p>{serie.tagline}</p>
					<br />
					<div>
						<span>
							<i class="fas fa-calendar-day"></i> : {serie.first_air_date}
						</span>{" "}
						<span>
							<i class="fas fa-users"></i> : {serie.popularity}{" "}
						</span>
					</div>
					<a href={serie.homepage} rel="noreferrer" target="_blank">
						Visitez le site
					</a>

					<div className="btn-container">
						<Button size=".9rem" type="button">
							Bande d'annonce
						</Button>
					</div>
				</div>
				<div className="film-poster"></div>
				<div className="more-info">
					<div className="categorie">
						{serie.genres ? (
							serie.genres.map((genre) => {
								return <Button color="white">{genre.name}</Button>;
							})
						) : (
							<p>Patientez</p>
						)}
					</div>
					<div className="other-info">						
						<div>
							<div className="status">Status: {serie.status}</div>
							<div className="time">Durée par épisode : {serie.episode_run_time} min</div>
						</div>
                        <div>
							<div className="seasons">Total de saisons: {serie.number_of_seasons}</div>
							<div className="epissode">Total d'épisodes : {serie.number_of_episodes}</div>
						</div>
					</div>
				</div>
				<div className="synopsis">
					<TitleSection>Synopsis</TitleSection>
					<p>{serie.overview}</p>
				</div>

				<div className="actors">
					<TitleSection>Saisons</TitleSection>
					<div className="actors-container">
						{serie.seasons ? (
							serie.seasons.map((season) => {
								return (
									<CardSerie 
										urlImage={season.poster_path}
										name={season.name}
										air_date={season.air_date}
										episode_count={season.episode_count}
									/>
								);
							})
						) : (
							<p>Patientez</p>
						)}
					</div>
				</div>

                <div className="actors">
					<TitleSection>Créer par</TitleSection>
					<div className="actors-container">
						{serie.created_by ? (
							serie.created_by.map((creator) => {
								return (
									<CardActor
										urlImage={creator.profile_path}
										name={creator.name}										
									/>
								);
							})
						) : (
							<p>Patientez</p>
						)}
					</div>
				</div>

				<div className="actors">
					<TitleSection>Castings</TitleSection>
					<div className="actors-container">
						{actors.cast ? (
							actors.cast.slice(0, 14).map((actors) => {
								return (
									<CardActor
										urlImage={actors.profile_path}
										name={actors.name}
										character={actors.character}
									/>
								);
							})
						) : (
							<p>Patientez</p>
						)}
					</div>
				</div>

				<div className="other">
					<div className="title-other">
						<TitleSection>Silimaires</TitleSection>
					</div>
					<div className="slide-other">
						{similar.results ? (
							<Carousel itemsToShow={4}>
								{similar.results.map((movie) => {
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
							</Carousel>
						) : (
							<p>Patientez...</p>
						)}
					</div>
				</div>
			</div>
		</AboutMovieStyled>
	);
};

export default AboutSerie;