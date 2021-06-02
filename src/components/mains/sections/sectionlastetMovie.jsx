import CardMovie from "../../cards/cardmovie";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Loader from "../../loader/loader";
import {motion} from 'framer-motion'

const SectionStyled = styled(motion.section)`
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;	

	.button-container{
		margin-left: 9%;
	}

	select{
		background-color: transparent;
		background: ${({ theme }) => theme.colors.main};
		border-radius: 5px;
		border: 1px solid transparent;
		font-size:1rem;
		padding: .3rem;
		color: ${({ theme }) => theme.colors.textWhite};
		margin-bottom: 1rem;
		
	}

	select:focus{
		outline: none;
	}
`;

const CardContainerStyled = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	
`;

const pageVariant = {
	in: { opacity: 1 },
	out: { opacity: 0 },
};

const pageTransition = {	
	duration:  3,
	type: "spring",
	stiness: 50,
};



const SectionLatestMovie = () => {
	const [latestMovies, setLastestMovies] = useState([]);
	const [loader, setLoader] = useState(true);
	const [selectedOption, setselectedOption] = useState('upcoming')

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${selectedOption}?api_key=9320cf81bdc9ea7daa7bd98066b669de&language=fr&page=1`
		)
			.then((response) => response.json())
			.then((data) => {
				let dataMapped = data.results
					.slice(0, 8)
					.map(
						({
							id,
							title,
							release_date,
							poster_path,
							popularity,
							vote_average,
						}) => {
							return {
								id,
								title,
								release_date,
								poster_path,
								popularity,
								vote_average,
							};
						}
					);
				setLastestMovies(dataMapped);
				setLoader(false);
				
			});
	}, [selectedOption]);

	const handleChangeSelect = (event) => {
		setselectedOption(event.target.value)
	}
	return (
		<div>
			<SectionStyled initial="out"
		animate="in"
		exit="out"
		variants={pageVariant}
		transition={pageTransition}>
				<div>
				<div className="button-container">
					<select onChange={handleChangeSelect}>
						<option className="option"  value="upcoming" selected>Prochaine sortie</option>
						<option value="now_playing" >Au Cinéma</option>
						<option value="popular">Populaire</option>
						<option value="top_rated">Mieux coté</option>
					</select>
				</div>
					{loader ? (
						<Loader />
					) : (
						<CardContainerStyled>
							{latestMovies.map((movie) => {
								return (
									<CardMovie
										popularity={movie.popularity}
										vote_average={movie.vote_average}
										urlImage={movie.poster_path}
										key={movie.id}
										date={movie.release_date}
										type="movie"
										id={movie.id}>
										{movie.title}
									</CardMovie>
								);
							})}
						</CardContainerStyled>
					)}
				</div>
			</SectionStyled>
		</div>
	);
};

export default SectionLatestMovie;
