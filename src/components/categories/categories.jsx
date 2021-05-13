import styled from "styled-components";
import { useState, useEffect } from "react";

const StyledCategorie = styled.ul`
	display: flex;
    flex-direction: ${(props) => props.flex?props.flex: 'row'};
	justify-content: space-around;
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
			{categories.genres ? (
				categories.genres.map((category) => {
					return <li key={category.id}>{category.name}</li>;
				})
			) : (
				<p>Patientez</p>
			)}
		</StyledCategorie>
	);
};

export default CategoriesList;
