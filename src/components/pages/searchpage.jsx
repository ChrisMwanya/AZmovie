import styled from "styled-components";
import { useState, useEffect } from "react";
import CardMovie from "../../components/cards/cardmovie";
import TitleSection from "../mains/titleSection/titlesection";
import Button from "../../buttons/button";

const SearchPageStyled = styled.div`
	background: ${({ theme }) => theme.colors.main};
	width: 90vw;
	padding-left: 10vw;

	.cards-container {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}

    h1 {
        font-size:3rem;
        color: ${({ theme }) => theme.colors.textWhite};
    }

	.btn-container {
		text-align: left;
		margin: 1rem;
	}
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
`;

const SearchPage = (props) => {
	const [resultMovie, setResultMovie] = useState({});
	const [resultSeries, setResultSeries] = useState({});
    const [toggle,setToggle] = useState(true)

	useEffect(() => {
		fetch(
			"https://api.themoviedb.org/3/movie/popular?api_key=9320cf81bdc9ea7daa7bd98066b669de&language=fr"
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				setResultMovie(data);
			});
	}, []);

	useEffect(() => {
		fetch(
			"https://api.themoviedb.org/3/tv/popular?api_key=9320cf81bdc9ea7daa7bd98066b669de&language=fr"
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				setResultSeries(data);
			});
	}, []);

    const handleClickMovie= () =>{
        setToggle(true)
    }
    const handleClickSerie= () =>{
        setToggle(false)
    }

	return (
		<Container>
			<SearchPageStyled>
                <h1>Resultats de votre recherche</h1>
				<div className="btn-container">
					<Button onClick={handleClickMovie} size="1rem">Films</Button>
					<Button onClick={handleClickSerie} size="1rem">Series</Button>
				</div>
				{toggle ? (
					<>
						<TitleSection>Resultats Films</TitleSection>
						<div className="cards-container ">
							{resultMovie.results
								? resultMovie.results.map((item) => {
										console.log(item);
										return (
											<CardMovie
												urlImage={item.poster_path}
												key={item.id}
												date={item.release_date}>
												{item.title}
											</CardMovie>
										);
								  })
								: "patientez"}
						</div>
					</>
				) : (
					<>
						<TitleSection>Resultats Séries</TitleSection>
						<div div className="cards-container ">
							{resultSeries.results
								? resultSeries.results.map((item) => {
										console.log(item);
										return (
											<CardMovie
												urlImage={item.poster_path}
												key={item.id}
												date={item.release_date}>
												{item.title}
											</CardMovie>
										);
								  })
								: "patientez"}
						</div>
					</>
				)}
			</SearchPageStyled>
		</Container>
	);
};

export default SearchPage;
