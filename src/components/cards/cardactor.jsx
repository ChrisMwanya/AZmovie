import styled from "styled-components";
import profil from "../../images/profilVinDiesel.jpeg";

const CardStyled = styled.div`
	margin: 1rem;
	width: 10vw;
	border-radius: 15px;
	height: 30vh;
	background: url("${(props) => (props.urlImage ? props.urlImage : profil)}"),
		no-repeat;
	background-size: cover;
	position: relative;
	background-position: center;

	&:hover {
		transition: all 0.3s ease;
		transform: scale(1.05);
	}

	.info-actor {
		position: absolute;
		bottom: 0;
		height: 30%;
		width: 100%;
		background: ${({ theme }) => theme.colors.main};
	}

	span {
		font-size: 0.8rem;
	}

	@media ${({ theme }) => theme.mediaQueries["bellow-1280"]} {
		width: 10vw;
		height: 16vh;

		p {
			font-size: 0.3rem;
			text-align: center;
		}

		span {
			font-size: 0.3rem;
		}
	}

	@media ${({ theme})=> theme.mediaQueries["bellow-768"]} {
		width: 20vw;
		height: 16vh;
	}
`;

const CardActor = (props) => {
	let url = `https://image.tmdb.org/t/p/w500/${props.urlImage}`;
	return (
		<CardStyled urlImage={url}>
			<div className="info-actor">
				<p>
					{props.name}
					<br />
					<span>{props.character}</span>
				</p>
			</div>
		</CardStyled>
	);
};

export default CardActor;
