import styled from "styled-components";
import { useState, useEffect } from "react";
import Button from "../buttons/button";

const StyledCategorie = styled.ul`
	position: relative;
	top: .4rem;
	width:90%;
	margin-left: 6.3rem;
	margin-right: 6.7rem;	
	z-index: 50;
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
		transition: all 2s ease;
		color: ${({ theme }) => theme.colors.textWhite};
		position: sticky;
		z-index: 900;
		font-size: 2rem;
		margin-left:2rem;
	}

	@media ${({ theme }) => theme.mediaQueries["bellow-1024"]} {
		display: block;
		i{
			margin-left:6rem;
			font-size: 1rem;
		}
		
	}

	@media ${({ theme }) => theme.mediaQueries["bellow-768"]} {
		i{
			margin-left:3rem;
			font-size: 1rem;
		}
	}
`;

const CategoriesList = (props) => {
	const [categories, setCategory] = useState([]);
	const [categoriesDisplayed, setCategoriesDisplayed] = useState(false);
	const [categoriesVisible, setCategoriesVisible] =
		useState("translateX(-200%)");
	const [buttonCategoryIsVisible,setButtonIsVisible]=useState(true)	

	const toggleCatgorie = () => {
		setCategoriesDisplayed(!categoriesDisplayed);
		setButtonIsVisible(!buttonCategoryIsVisible)
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
			<SidebarCategoriesStyled isVisible={buttonCategoryIsVisible}>
				<div onClick={toggleCatgorie}>
					{buttonCategoryIsVisible ? <i className="fas fa-filter"></i> : <i className="fas fa-times-circle"></i>}
					{/* <i className="fas fa-filter"> Par Categories</i> */}
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
										setButtonIsVisible(true)
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
