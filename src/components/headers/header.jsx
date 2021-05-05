import styled from "styled-components";
import WelcomeText from "../texts/welcometext";
import Title from "../texts/title";
import imageFond from "./../../images/imageFilm.jpeg";

const HeaderStyled = styled.div`
	width: 100vw;
	height: 93vh;
	background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
		url("${imageFond}") no-repeat;
	background-size: cover;
	

	.welcome-text {
		color: ${({ theme }) => theme.colors.textWhite};
		text-align: right;
		font-size: 1rem;
		font-family: "Roboto", sans-serif;
	}

	.title {
		color: ${({ theme }) => theme.colors.textWhite};
		text-align: right;
		font-size: 2.5rem;
		font-family: "Roboto", sans-serif;
	}

	.span {
		display: bloc;

		background: ${({ theme }) => theme.colors.secondMain};
		border-radius: 10px;
	}

	.text-container {
		padding-top: 200px;
		padding-right: 30px;
	}
`;

const Header = () => {
	return (
		<HeaderStyled>
			<div className="text-container welcome-text">
				<WelcomeText>Bienvenu</WelcomeText>
				<div className="title">
					<Title>
						OUR SPECIAL <span className="span">MOVIE</span>
					</Title>
				</div>
				<div className="welcome-text">
					<WelcomeText>
						La plateforme qui vous offres toutes les infos sur vos films de A à
						Z
					</WelcomeText>
				</div>
			</div>
		</HeaderStyled>
	);
};

export default Header;
