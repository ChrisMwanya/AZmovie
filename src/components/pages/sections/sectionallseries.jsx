import styled from 'styled-components'
import {useState, useEffect} from 'react'
import CardMovie from "../../cards/cardmovie";

const SectionStyled= styled.section`
    margin-top: 1rem;
    width: 100%;

    .buttons{
        border-bottom: 2px solid  ${({ theme }) => theme.colors.secondMain};
    }
`
const CardContainerStyled = styled.div`
	width:100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;



const SectionAllSeries= () => {

    const [Series, setSeries] = useState([]);
	useEffect(() => {
		fetch(
			"https://api.themoviedb.org/3/tv/popular?api_key=9320cf81bdc9ea7daa7bd98066b669de&language=fr&page=1"
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				let dataMapped = data.results
					.map(({ id, title, release_date, poster_path,popularity,vote_average  }) => {
						return { id, title, release_date, poster_path,popularity,vote_average  };
					});
				setSeries(dataMapped);
			});
	}, []);


    return(
        <SectionStyled>
            {/* <div className="buttons">
                <Button>Plus Coté</Button>
                <Button>Récent</Button>
                <Button>Populaire</Button>
            </div> */}
            <CardContainerStyled>
				{Series.map((serie) => {
					return (
						<CardMovie
						popularity={serie.popularity}
						vote_average={serie.vote_average}
						urlImage={serie.poster_path}
						key={serie.id}
						date={serie.release_date}
						type="tv"
						id={serie.id}>
							{serie.name}
						</CardMovie>
					);
				})}
			</CardContainerStyled>
        </SectionStyled>
    )
}

export default SectionAllSeries