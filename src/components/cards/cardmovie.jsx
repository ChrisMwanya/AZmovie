import styled from "styled-components";
import Button from "../../buttons/button";

const CardStyled = styled.div`
	margin: 5px;
	width: 30vw;
	border-radius: 15px;
	position: relative;
	height: 50vh;
	background: url("${(props) => (props.urlImage ? props.urlImage : "")}");
	background-size: cover;

	&:hover {
		transition: all 0.3s ease;
		transform: scale(1.05);
		box-shadow: 4px 4px 20px ${({ theme }) => theme.colors.secondMain};
		z-index: 9;

		.movie-info {
			transition: all 1s ease;
			height: 50%;
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
			opacity:1;
		}
	}

	.button-container{
		display:flex;
		justify-content: space-between;
	}
	.info-hidden {
		display: none;
		opacity: 0;
	}
	.movie-info {
		bottom: 0;

		position: absolute;
		padding: 20px;
		border-bottom-right-radius: 15px;
		border-bottom-left-radius: 15px;
		text-align: center;
		font-size: 1rem;
		width: 100%;
		height: 30%;
		color: ${({ theme }) => theme.colors.textWhite};
		background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.9),
			rgba(0, 0, 0, 0.9)
		);
	}

	
`;

const CardMovie = ({ children, urlImage, date }) => {
	let url = `https://image.tmdb.org/t/p/w500/${urlImage}`;
	return (
		<CardStyled urlImage={url}>
			<div className="movie-info">
				<p className="film-title">{children}</p>
				<div className="info-hidden">
					<p>
						Durée :<span>{date}</span>
					</p>
					<div className="button-container">
					<Button type='type'>Bande d'annonce </Button>
					<Button >Voir plus </Button>
					</div>
				
				</div>
			</div>
		</CardStyled>
	);
};

export default CardMovie;
