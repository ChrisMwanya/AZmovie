import styled from "styled-components";
import WelcomeText from "../texts/welcometext";
import Title from "../texts/title";
import imageFond from "./../../images/imageFilm.jpeg";
import Button from "../../buttons/button";
import Logo from "../logo";
import {Link} from 'react-router-dom'
const HeaderStyled = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1)),
		url("${imageFond}") no-repeat;
	background-size: cover;

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
		/* padding-top: 200px; */
		padding-right: 30px;
	}

	ul {
		width: 100vw;
		display: flex;
		justify-content: space-around;
		color: ${({ theme }) => theme.colors.secondMain};
		font-weight: lighter;
		opacity: 0.5;
	}
`;

const Header = () => {
	return (
		<HeaderStyled>
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
						La plateforme qui vous offres toutes les infos sur vos films de A à
						Z
					</WelcomeText>
				</div>
			</div>
			<div className="btn-container">
				<Link to="/Home">
				<Button color={({ theme }) => theme.colors.textWhite} size="1.2rem">
					Démarrer
				</Button>
				</Link>
			
			</div>
			<div>
				<ul>
					<li>Drame</li>
					<li>Action</li>
					<li>Horreur</li>
					<li>Comedi</li>
					<li>Fiction</li>
					<li>Guerre</li>
					<li>Animation</li>
					<li>Documentaire</li>
				</ul>
			</div>
		</HeaderStyled>
	);
};

export default Header;
