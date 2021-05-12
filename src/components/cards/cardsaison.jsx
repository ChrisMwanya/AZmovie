import styled from "styled-components";
import Button from "../../buttons/button";
import { Link } from "react-router-dom";
import defaultImage from "../../images/logo.svg"

const CardStyled = styled.div`
	margin: 5px;
	width: 20vw;
	border-radius: 15px;
	position: relative;
	height: 50vh;
	background: url("${(props) => (props.urlImage ? props.urlImage : defaultImage)}");
	background-size: cover;	

	.movie-info {
		bottom: 0;
		position: absolute;
		padding: 20px;
		border-bottom-right-radius: 15px;
		border-bottom-left-radius: 15px;
		text-align: center;
		font-size: 1rem;
		width: 100%;
		transition: all 1s ease;
		height: 40%;
		color: ${({ theme }) => theme.colors.textWhite};
		background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.9),
			rgba(0, 0, 0, 0.9)
		);
	}
	.more-infos{
		/* display: flex;
		justify-content: space-between; */
	}
`;

const CardSerie = (props) => {
	let url = `https://image.tmdb.org/t/p/w500/${props.urlImage}`;
	return (
		<CardStyled urlImage={url}>
			<div className="movie-info">
				<p className="film-title">{props.name}</p>
                <p>Date :  {props.air_date}</p>
                <p>Nombre d'épisodes: {props.episode_count}</p>				
			</div>
		</CardStyled>
	);
};

export default CardSerie;
