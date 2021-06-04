import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import styled from "styled-components";
import WelcomeText from "../texts/welcometext";
import Title from "../texts/title";
// import imageFond from "./../../images/imageFilm.jpeg";
import Button from "./../buttons/button";
import Logo from "../logo";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "../loader/loader";
import {motion} from 'framer-motion'
const StyledHeaderLoader = styled(motion.div)`
	position: relative;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	background: ${({ theme }) => theme.colors.main}
`;
const HeaderStyled = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)),
		url("${({ imagefond }) => (imagefond ? imagefond : "#111")}") no-repeat;
	background-size: cover;
	background-position: center;
`;

const TextStyled = styled.div`
	background: none;
	position: absolute;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	.welcome-text {
		color: ${({ theme }) => theme.colors.textWhite};
		text-align: right;
		font-size: 1rem;
		font-family: "Roboto", sans-serif;
	}

	.logo {
		width: 10%;
		text-align: center;
	}

	.welcome {
		font-size: 2rem;
		font-family: "Roboto", sans-serif;
	}

	.btn-container {
		width: 20%;
		display: flex;
		justify-content: center;
		margin-bottom: 2rem;
	}
	.title {
		color: ${({ theme }) => theme.colors.textWhite};
		text-align: right;
		font-size: 1.4rem;
		font-family: "Roboto", sans-serif;
	}
	.span {
		display: bloc;
		color: ${({ theme }) => theme.colors.secondMain};
		background: ${({ theme }) => theme.colors.textWhite};
		border-radius: 10px;
	}

	.text-container {		
		padding-right: 30px;
	}

	ul {
		width: 100vw;
		display: flex;
		justify-content: space-around;
		color: ${({ theme }) => theme.colors.textWhite};
		font-weight: lighter;
		opacity: 0.5;
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

const Header = () => {
	const [movieList, setMovieList] = useState([]);
	const [loader, setLoader] = useState(true);

	useEffect(() => {
		fetch(
			"https://api.themoviedb.org/3/tv/popular?api_key=9320cf81bdc9ea7daa7bd98066b669de&language=en-US&page=1"
		)
			.then((response) => response.json())
			.then(({ results }) => {
				let newMovieList = results.map(
					({ id, title, release_date, poster_path, backdrop_path }) => {
						return { id, title, release_date, poster_path, backdrop_path };
					}
				);
				setMovieList(newMovieList);
				setLoader(false);
			});
	}, []);

	return (
		<>
			{loader ? (
				<StyledHeaderLoader initial="out"
			animate="in"
			exit="out"
			variants={pageVariant}
			transition={pageTransition}>
					<Loader />
				</StyledHeaderLoader>
			) : (
				<>
					<Slide easing="ease" arrows={false} autoplay={true}>
						{movieList.map(({ backdrop_path }) => {
							return (
								<HeaderStyled key={backdrop_path}
									imagefond={`https://image.tmdb.org/t/p/original${backdrop_path}`}></HeaderStyled>
							);
						})}
					</Slide>

					<TextStyled>
						<div className="logo">
							<Logo width="100%" height="10vh" />
						</div>

						<div className="text-container welcome-text">
							<div className="title">
								<Title>
									TOUS VOS FILMS ET SERIES DE <span className="span">A-Z</span>
								</Title>
							</div>
							<div className="welcome-text">
								<WelcomeText>
									La plateforme qui vous offres toutes les infos sur vos films
									de A à Z
								</WelcomeText>
							</div>
						</div>
						<div className="btn-container">
							<Link to="/Home">
								<Button
									color={({ theme }) => theme.colors.textWhite}
									size="1.2rem">
									Démarrer
								</Button>
							</Link>
						</div>
			
					</TextStyled>
				</>
			)}
		</>
	);
};

export default Header;
