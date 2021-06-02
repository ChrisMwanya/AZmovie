import styled from "styled-components";
import Button from "./../../buttons/button";
import CardMovie from "../../cards/cardmovie";
import Carousel from "react-elastic-carousel";
import { motion } from "framer-motion";
// import imageFond from "../../images/VinDiesel.jpg";
// import poster from "../../images/fastandfurious.jpg";
import TitleSection from "../../mains/titleSection/titlesection";
import CardActor from "../../cards/cardactor";
import { useState, useEffect } from "react";
import CardSerie from "../../cards/cardsaison";
import Loader from "../../loader/loader";
import ModalVideo from "../../modal/modalVideo";

const AboutMovieStyled = styled(motion.div)`
	background: ${({ theme }) => theme.colors.main};
	color: ${({ theme }) => theme.colors.textWhite};
	display: flex;
	justify-content: center;
	padding: 0.9rem 10rem;

	.container {
		width: 100vw;
	}

	.header {
		position: relative;
		padding-right: 2rem;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)),
			url("${(props) => (props.imageFond ? props.imageFond : "")}") no-repeat;
		background-size: cover;
		background-position: center;
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

	.btn-hidden{
		display: none;
	}

	.btn-showed{
		display: block;
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
		right: 6.8rem;
		margin-top: -6rem;
		width: 60.7%;
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
		display: none;
	}

	@media ${({ theme }) => theme.mediaQueries["bellow-1280"]} {
		h1 {
			font-size: 2.8rem;
		}
		p {
			padding-top: 0.6rem;
		}

		span {
			margin: 0.2rem;
		}

		.film-poster {
			height: 28%;
			width: 30%;
			margin-top: -15rem;
		}

		.more-info {
			right: 8%;
			margin-top: -8rem;
			width: 50.2%;
			height: 15%;
		}
	}

	@media ${({ theme }) => theme.mediaQueries["bellow-1024"]} {
		h1 {
			font-size: 2.8rem;
		}
		p {
			padding-top: 0.6rem;
		}

		span {
			margin: 0.2rem;
		}

		.film-poster {
			height: 28%;
			width: 30%;
			margin-top: -18rem;
		}

		.more-info {
			right: 8%;
			margin-top: -8rem;
			width: 50.2%;
			height: 15%;
		}
	}

	@media ${({ theme }) => theme.mediaQueries["bellow-900"]} {
		h1 {
			font-size: 2.8rem;
		}
		p {
			padding-top: 0.6rem;
		}

		span {
			margin: 0.2rem;
		}

		.film-poster {
			height: 28%;
			width: 30%;
			margin-top: -36%;
		}

		.more-info {
			right: 8%;
			margin-top: -12%;
			width: 50.2%;
			height: 15%;
		}
	}

	@media ${({ theme }) => theme.mediaQueries["bellow-768"]} {
		h1 {
			font-size: 2.8rem;
		}
		p {
			padding-top: 0.6rem;
		}

		span {
			margin: 0.2rem;
		}

		.film-poster {
			height: 35%;
			width: 30%;
			margin-top: -49%;
		}

		.more-info {
			right: 8%;
			margin-top: -12%;
			width: 50.1%;
			height: 15%;
		}
	}

	@media ${({ theme }) => theme.mediaQueries["bellow-580"]} {
		h1 {
			font-size: 2.8rem;
		}
		p {
			padding-top: 0.6rem;
		}

		span {
			margin: 0.2rem;
		}

		.film-poster {
			height: 33%;
			width: 29%;
			margin-top: -34%;
		}

		.more-info {
			right: 6%;
			margin-top: -18%;
			width: 51%;
			height: 15%;
		}
	}

	@media ${({ theme }) => theme.mediaQueries["bellow-420"]} {
		h1 {
			font-size: 2rem;
		}
		p {
			padding-top: 0.6rem;
		}

		span {
			margin: 0.2rem;
		}

		.film-poster {
			height: 33%;
			width: 29%;
			margin-top: -39%;
		}

		.more-info {
			right: 6%;
			margin-top: -18%;
			width: 51%;
			height: 15%;
		}
		.other-info {
			font-size: 0.2rem;
		}
	}
`;

const pageVariant = {
	in: { opacity: 1 },
	out: { opacity: 0 },
};

const pageTransition = {	
	type: "spring",
	stiness: 50,
};

const AboutSerie = (props) => {
	const [serie, setSerie] = useState([]);
	const [actors, setActors] = useState([]);
	const [similar, setSimilar] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [keyVideo, setKeyVideo] = useState("");

	const urlSegment = props.match.url;

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3${urlSegment}?api_key=9320cf81bdc9ea7daa7bd98066b669de&language=fr`
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				
				setSerie(data);
			});
	}, [urlSegment]);

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/${urlSegment}/videos?api_key=9320cf81bdc9ea7daa7bd98066b669de&language=en-US`
		).then((response) => {
			return response.json();
		}).then((data) => {
			setKeyVideo(data.results[0])	
				
		});
	},[urlSegment]);

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
		window.scrollTo(0, 0);
	}, [urlSegment]);

	const handleClickShowModal = () => {
		setShowModal(true);
	};


	let urlFond = `https://image.tmdb.org/t/p/w500/${serie.backdrop_path}`;

	let urlPoster = `https://image.tmdb.org/t/p/w500/${serie.poster_path}`;
	return (
		<AboutMovieStyled
			imageFond={urlFond}
			imagePoster={urlPoster}
			initial="out"
			animate="in"
			exit="out"
			variants={pageVariant}
			transition={pageTransition}>
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

					<div className={`btn-container ${keyVideo  ? 'btn-showed':'btn-hidden'}`}>
						<Button size=".9rem" type="button" onClick={handleClickShowModal}>
							Bande d'annonce
						</Button>
					</div>
					<ModalVideo
						isOpen={showModal}
						videoId={keyVideo}
						isClose={() => {
							setShowModal(false);
						}}
					/>
				</div>
				<div className="film-poster"></div>
				<div className="more-info">
					<div className="categorie">
						{serie.genres ? (
							serie.genres.map((genre) => {
								return <Button color="white">{genre.name}</Button>;
							})
						) : (
							<Loader />
						)}
					</div>
					<div className="other-info">
						<div>
							<div className="status">Status: {serie.status}</div>
							<div className="time">
								Durée par épisode : {serie.episode_run_time} min
							</div>
						</div>
						<div>
							<div className="seasons">
								Total de saisons: {serie.number_of_seasons}
							</div>
							<div className="epissode">
								Total d'épisodes : {serie.number_of_episodes}
							</div>
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
							<Loader />
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
							<Loader />
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
							<Loader />
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
							<Loader />
						)}
					</div>
				</div>
			</div>
		</AboutMovieStyled>
	);
};

export default AboutSerie;
