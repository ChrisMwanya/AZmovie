import styled from "styled-components";
import Button from "../../buttons/button";
import CardMovie from "../cards/cardmovie";
import Carousel from "react-elastic-carousel";
// import imageFond from "../../images/VinDiesel.jpg";
// import poster from "../../images/fastandfurious.jpg";
import TitleSection from "../mains/titleSection/titlesection";
import CardActor from "../cards/cardactor";
import { useState, useEffect } from "react";

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

const AboutMovie = (props) => {
	const [movie, setMovie] = useState([]);
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
				setMovie(data);
			});
	}, []);

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
		
	}, []);

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

	let urlFond = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;

	let urlPoster = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
	return (
		<AboutMovieStyled imageFond={urlFond} imagePoster={urlPoster}>
			<div className="container">
				<div className="header">
					<h1>{movie.title}</h1>
					<p>{movie.tagline}</p>
					<br />
					<div>
						<span>
							<i class="fas fa-calendar-day"></i> : {movie.release_date}
						</span>{" "}
						<span>
							<i class="fas fa-users"></i> : {movie.popularity}{" "}
						</span>
					</div>
					<a href={movie.homepage} rel="noreferrer" target="_blank">
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
						{movie.genres ? (
							movie.genres.map((genre) => {
								return <Button color="white">{genre.name}</Button>;
							})
						) : (
							<p>Patientez</p>
						)}
					</div>
					<div className="other-info">						
						<div>
							<div className="status">Status: {movie.status}</div>
							<div className="time">Durée : {movie.runtime} min</div>
						</div>
					</div>
				</div>
				<div className="synopsis">
					<TitleSection>Synopsis</TitleSection>
					<p>{movie.overview}</p>
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
							<Carousel itemsToShow={4} enableAutoPlay="true">
								{similar.results.map((movie) => {
									return (
										<CardMovie
											urlImage={movie.poster_path}
											key={movie.id}
											date={movie.release_date}
											type="movie"
											id={movie.id}>
											{movie.title}
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

export default AboutMovie;
