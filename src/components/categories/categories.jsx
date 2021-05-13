import styled from "styled-components";
import { useState, useEffect } from "react";
import Button from "../buttons/button";

const StyledCategorie = styled.ul`
	display: flex;
    flex-direction: ${(props) => props.flex?props.flex: 'row'};
	justify-content: center;
    align-items: center;
	flex-wrap: wrap;
	color: white;
`;

const CategoriesList = (props) => {
	const [categories, setCategory] = useState([]);

	useEffect(() => {
		fetch(
			"https://api.themoviedb.org/3/genre/movie/list?api_key=9320cf81bdc9ea7daa7bd98066b669de&language=fr"
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setCategory(data);
			});
	});
	return (
		<StyledCategorie flex={props.flex}>
            <Button size=".6rem">Toutes</Button>
			{categories.genres ? (
				categories.genres.map((category) => {
					return <li key={category.id}><Button size=".6rem">{category.name}</Button></li>;
				})
			) : (
				<p>Chargement...</p>
			)}
		</StyledCategorie>
	);
};

export default CategoriesList;
