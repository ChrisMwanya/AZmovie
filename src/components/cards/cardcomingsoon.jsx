import styled from "styled-components";

const CardStyled = styled.div`
	width: 50vw;
	position: relative;
	height: 50vh;
	background: url("${(props) => (props.urlImage ? props.urlImage : "")}") center
		no-repeat;
	background-size: cover;

	&:hover {
		transition: all 0.3s ease;
		transform: scale(1.05);
		box-shadow: 4px 4px 20px ${({ theme }) => theme.colors.secondMain};
		z-index: 9;

		.movie-info {
			transition: all 1s ease;
			height: 20%;
			text-align: center;
			background: linear-gradient(
				to bottom,
				rgba(0, 0, 0, 0.8),
				rgba(0, 0, 0, 0.8)
			);
		}
		.info-hidden {
			transition: all 2s ease;
			margin-top: 10px;
			display: block;
			text-align: center;
			opacity: 1;
		}

		.film-title {
			font-weight: bold;
			font-size: 1rem;
		}
	}

	.info-hidden {
		display: none;
		opacity: 0;
	}

	.movie-info {
		bottom: 0;

		position: absolute;
		padding: 20px;
		text-align: center;
		font-size: 1rem;
		width: 100%;
		height: 20%;
		color: ${({ theme }) => theme.colors.textWhite};
		background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.9),
			rgba(0, 0, 0, 0.9)
		);
	}
`;

const CardComingSoon = ({ children, urlImage, date }) => {
	let url = `https://image.tmdb.org/t/p/w500/${urlImage}`;
	return (
		<CardStyled urlImage={url}>
			<div className="movie-info info-hidden">
				<p className="film-title">{children}</p>

				<p>
					Dès :<span>{date}</span>
				</p>
			</div>
		</CardStyled>
	);
};

export default CardComingSoon;
