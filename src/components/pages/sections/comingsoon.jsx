import styled from "styled-components";
import { useState, useEffect } from "react";

import CardComingSoon from "../../cards/cardcomingsoon";
import Slide from "../../slides/slide";
import TitleSection from "../../mains/titleSection/titlesection";

const ComingSoonStyled = styled.section`
	/* background-color: ${({ theme }) => theme.colors.secondMain}; */
	display: flex;
    padding: 2rem;
	justify-content: center;
	align-items: center;
    
`;

const ComingSoon = () => {
	const [comingSoon, setComingSoon] = useState([]);
	useEffect(() => {
		fetch(
			"https://api.themoviedb.org/3/movie/now_playing?api_key=9320cf81bdc9ea7daa7bd98066b669de&language=en-US&page=2"
		)
			.then((response) => response.json())
			.then(({ results }) => {
				console.log(results);
				let dataMapped = results
					.slice(0, 3)
					.map(({ id, title, release_date, poster_path }) => {
						return { id, title, release_date, poster_path };
					});
				setComingSoon(dataMapped);
			});
	}, []);
//     let slideCards= comingSoon.map((movie) => {
//         return (
//             <CardComingSoon
//                 urlImage={movie.poster_path}
//                 key={movie.id}
//                 date={movie.release_date}>
//                 {movie.title}
//             </CardComingSoon>				
//         );
//     });
//    console.log(slideCards);
	return (
        <div>
            <TitleSection>Bientôt sur vos écrans</TitleSection>
            <ComingSoonStyled>
            {/* <Slide slides={slideCards}/> */}
			{comingSoon.map((movie) => {
				return (
					<CardComingSoon
						urlImage={movie.poster_path}
						key={movie.id}
						date={movie.release_date}>
						{movie.title}
					</CardComingSoon>				
				);
			})}
		</ComingSoonStyled>
        </div>
		
	);
};

export default ComingSoon;
