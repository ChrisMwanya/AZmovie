import styled from "styled-components";
import defaultImage from "../../images/logo.svg"

const CardStyled = styled.div`
	margin: 5px;
	width: 15vw;
	border-radius: 15px;
	position: relative;
	height: 40vh;
	background: url("${(props) => (props.urlImage ? props.urlImage : defaultImage)}");
	background-size: cover;	
	background-position: center;



	&:hover {
		transition: all 0.3s ease;
		transform: scale(1.05);
		
	}

	.title{
		font-weight: bold;
	}
	.movie-info {
		bottom: 0;
		position: absolute;
		padding: 0 .5rem;
		border-bottom-right-radius: 15px;
		border-bottom-left-radius: 15px;
		text-align: center;
		font-size: 1rem;
		width: 100%;
		transition: all 1s ease;
		height: 30%;
		color: ${({ theme }) => theme.colors.textWhite};
		background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.9),
			rgba(0, 0, 0, 0.9)
		);
	}
	.more-infos{
		display: flex;		
		justify-content: center;
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

const CardSerie = (props) => {
	let url = `https://image.tmdb.org/t/p/w500/${props.urlImage}`;
	return (
		<CardStyled urlImage={url}>
			<div className="movie-info">
				<div>
				<p className="title">{props.name}</p>
				</div>
				<div className="more-infos">
				{/* <p>Date :  {props.air_date}</p> */}
                <p>{props.episode_count} épisodes</p>	
				</div>
			</div>
		</CardStyled>
	);
};

export default CardSerie;
