import styled from "styled-components";
import { useState, useEffect } from "react";
import Button from "../buttons/button";

const StyledCategorie = styled.ul`
	position: sticky;
	top: 3rem;
	z-index: 2;
	display: flex;
	background: ${({ theme }) => theme.colors.main};
	flex-direction: ${(props) => (props.flex ? props.flex : "row")};
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	color: white;

	@media ${({ theme }) => theme.mediaQueries["bellow-1024"]} {
		& {
			flex-direction: ${(props) => (props.flex ? props.flex : "row")};
			justify-content: center;
			margin-top: 3.4rem;
			margin-left: -1rem;
			border-top-right-radius: 15px;
			border-bottom-right-radius: 15px;
			transform: ${(props) => props.isVisible};
			transition: all 0.8s ease;
			background: linear-gradient(
				to bottom,
				rgba(0, 0, 0, 0.8),
				rgba(0, 0, 0, 0.8)
			);
			position: absolute;
			width: 40vw;
		}
	}

	@media ${({ theme }) => theme.mediaQueries["bellow-768"]} {
	}
`;

const SidebarCategoriesStyled = styled.div`
	margin-top: 2rem;
	display: none;
	color: ${({ theme }) => theme.colors.secondMain};
	i {
		color: ${({ theme }) => theme.colors.textWhite};
	}

	@media ${({ theme }) => theme.mediaQueries["bellow-1024"]} {
		display: block;
	}
`;

const CategoriesList = (props) => {
	const [categories, setCategory] = useState([]);
	const [categoriesDisplayed, setCategoriesDisplayed] = useState(false);
	const [categoriesVisible, setCategoriesVisible] =
		useState("translateX(-200%)");

	const toggleCatgorie = () => {
		setCategoriesDisplayed(!categoriesDisplayed);
		if (categoriesVisible === "translateX(-200%)") {
			setCategoriesVisible("translateX(0%)");
		} else {
			setCategoriesVisible("translateX(-200%)");
		}
	};

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/genre/${props.type}/list?api_key=9320cf81bdc9ea7daa7bd98066b669de&language=fr`
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setCategory(data);
			});
	});

	return (
		<>
			<SidebarCategoriesStyled>
				<div onClick={toggleCatgorie}>
					<i className="fas fa-filter"> Par Categories</i>
				</div>
			</SidebarCategoriesStyled>

			<StyledCategorie
				flex={categoriesDisplayed ? "column" : props.flex}
				isVisible={categoriesVisible}>
				<Button onClick={props.change} size=".6rem">
					Toutes
				</Button>

				{categories.genres ? (
					categories.genres.map((category) => {
						return (
							<li key={category.id}>
								<Button
									onClick={() => {
										setCategoriesVisible("translateX(-200%)");
										props.onClick(category.id);
									}}
									size=".6rem">
									{category.name}
								</Button>
							</li>
						);
					})
				) : (
					<p>Chargement...</p>
				)}
			</StyledCategorie>
		</>
	);
};

export default CategoriesList;
