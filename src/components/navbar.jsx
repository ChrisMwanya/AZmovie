import InputField from "./inputfilds";
import Logo from "./logo";
import Menu from "./headers/menu";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBarStyled = styled.div`
	position: fixed;
	top: 0;
	z-index: 100;
	display: flex;
	justify-content: space-between;
	height: 7vh;
	padding: 0 2rem;
	background-color: ${({ theme }) => theme.colors.main};
	width: 100%;

	.logo{
		margin-left:5rem;
	}

	@media ${({ theme }) => theme.mediaQueries["bellow-1024"]} {

		padding-top: 1rem;

		.logo{
			margin-left:4rem;
		}
	
	}

	@media ${({ theme }) => theme.mediaQueries["bellow-768"]} {
		.logo{
			margin-left:2rem;
		}
		
	}
`;

const MenuBurgerStyled = styled.div`
	display: none;
	color: ${({ theme }) => theme.colors.textWhite};
	margin-right: 5.4rem;
	font-size: 2rem;

	@media ${({ theme }) => theme.mediaQueries["bellow-1024"]} {
		display: block;
		margin-right:4rem;
	}
	@media ${({ theme }) => theme.mediaQueries["bellow-768"]} {
		font-size: 2rem;
		margin-right:1.9rem;
	}
`;

const MenuInputStyled = styled.div`
	display: flex;;
	justify-content: space-around;
	width: 70%;
	

	@media ${({ theme }) => theme.mediaQueries["bellow-1024"]} {
		display: none;
		transform: ${(props) => props.isHidden};
		transition: all 0.8s ease;
		text-align: right !important;
	}
`;
const NavBar = (props) => {
	const [menuHidden, setMenuHidden] = useState("translateX(200%)");
	const [menuDisplayed, setMenuDisplayed] = useState("none");

	const handleClickMenuBurger = () => {
		if (menuHidden === "translateX(200%)") {
			setMenuHidden("translateX(0%)");
		} else {
			setMenuHidden("translateX(200%)");
		}

		if (menuDisplayed === "none") {
			setMenuDisplayed("block");
		} else {
			setMenuDisplayed("none");
		}
	};

	return (
		<NavBarStyled>
			<div className="logo">
				<Link to="/">
					<Logo width="6vw" />
				</Link>
			</div>
			<MenuBurgerStyled
				isDisplayed={menuDisplayed}
				isHidden={menuHidden}
				onClick={handleClickMenuBurger}>
				<i className="fas fa-bars"></i>
			</MenuBurgerStyled>
			<MenuInputStyled>
				<InputField onChange={props.onChange} />
				<Menu />
			</MenuInputStyled>
		</NavBarStyled>
	);
};

export default NavBar;
