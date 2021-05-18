import styled from "styled-components";
import Button from "./../buttons/button";
import { Link } from "react-router-dom";
import defaultImage from "../../images/logo.svg";

const CardStyled = styled.div`
	margin: 5px;
	width: 20vw;
	border-radius: 15px;
	position: relative;
	height: 40vh;
	background: url("${(props) =>props.urlImage ? props.urlImage : defaultImage}");
	background-size: cover;
	background-position: center;

	&:hover {
		transition: all 0.3s ease;
		/* transform: scale(1.05); */
		box-shadow: 4px 4px 20px ${({ theme }) => theme.colors.secondMain};
		z-index: 9;

		.movie-info {
			padding: 10px;
			transition: all 1s ease;
			height: 40%;
			background: linear-gradient(
				to bottom,
				rgba(0, 0, 0, 0.8),
				rgba(0, 0, 0, 0.8)
			);
		}

		.film-title {
			font-weight: bold;
			font-size: 1rem;
		}

		.icon-color {
			color: ${({ theme }) => theme.colors.secondMain};
		}
		.info-hidden {
			transition: all 2s ease;
			margin-top: 10px;
			display: block;
			text-align: left;
			opacity: 1;
		}
	}

	.button-container {
		display: flex;
		justify-content: center;
	}
	.info-hidden {
		display: none;
		opacity: 0;
	}
	.movie-info {
		bottom: 0;
		position: absolute;
		padding: 10px 20px;
		border-bottom-right-radius: 15px;
		border-bottom-left-radius: 15px;
		text-align: center;
		font-size: 1rem;
		width: 100%;
		transition: all 1s ease;
		height: 20%;
		color: ${({ theme }) => theme.colors.textWhite};
		background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.9),
			rgba(0, 0, 0, 0.9)
		);
	}
	.more-infos {
		display: flex;
		justify-content: space-between;
	}

	@media ${({ theme})=> theme.mediaQueries["bellow-1024"]}  {
		& {
			width: 20vw;
			height: 30vh;
		}

		.film-title {
			font-weight: bold;
			font-size: 1.4rem;
		}
		.info-hidden {
			transition: all 2s ease;
			margin-top: 10px;
			display: none;
			text-align: left;
			opacity: 1;
		}
		.movie-info {
			padding: 10px;
			transition: all 1s ease;
			height: 25%;
			background: linear-gradient(
				to bottom,
				rgba(0, 0, 0, 0.8),
				rgba(0, 0, 0, 0.8)
			);
		}
	}

	@media ${({ theme})=> theme.mediaQueries["bellow-768"]} {
		& {
			width: 24vw;
			height: 25vh;
		}


		.film-title {
			display:none;
			font-weight: bold;
			font-size: .5rem;
		}
		.info-hidden {
			transition: all 2s ease;
			margin-top: 10px;
			display: none;
			text-align: left;
			opacity: 1;
		}
	
	}

	
`;

const CardMovie = (props) => {
	let url = `https://image.tmdb.org/t/p/w500/${props.urlImage}`;
	return (
		<CardStyled urlImage={url}>
			<div className="movie-info">
				<p className="film-title">{props.children}</p>
				<div className="info-hidden">
					<div className="more-infos">
						<p>
							<i className="fas fa-star"></i> {props.vote_average}
						</p>
						<p>
							<i className="fas fa-eye"></i>
							{props.popularity}
						</p>
					</div>
					<div className="button-container">
						<Link to={`/${props.type}/${props.id}`}>
							<Button>Voir plus</Button>
						</Link>
					</div>
				</div>
			</div>
		</CardStyled>
	);
};

export default CardMovie;
