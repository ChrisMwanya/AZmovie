import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./../logo";
import { NavLink } from "react-router-dom";
import Button from "../buttons/button";

const NavBarStyled = styled.nav`
	.navbar {
		top: 0;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		position: fixed;
		width: 100%;
		font-family: "Poppins", sans-serif;
		min-height: 20px;
		height: 50px;
		padding: 0 0.9rem;
		background: #111;
		color: #fff;
		z-index: 1000;
	}

	.navbar_logo {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.navbar_links {
		display: flex;
		height: 100%;
		align-items: center;
	}

	.navbar_link {
		height: 100%;
		padding: 0 0.3rem;
		color: inherit;
	}

	.navbar_link-active {
		color: red;
		border-bottom: 1px solid ${({ theme }) => theme.colors.secondMain};
	}

	.navbar_link:hover {
		height: 100%;
		background-color: #111111;
		transition: all 0.3s ease-out;
	}

	.navbar_burger {
		display: none;
		width: 40px;
		height: 40px;
		background: transparent;
		border: none;
		color: inherit;
	}

	@media ${({ theme }) => theme.mediaQueries["bellow-900"]} {
		.navbar_links {
			flex-direction: column;
			justify-content: center;
			align-items: center;
			position: fixed;

			right: -100vw;
			bottom: 0;
			height: 100vh;
			padding: 2rem;
			background-color: #000;
			visibility: hidden;
			transition: all 0.8s ease-out;
		}

		.show-nav .navbar_links {
			right: 0;
			visibility: visible;
		}

		.show-nav .burger-bar {
			width: 0;
			background: transparent;
		}
		.show-nav .burger-bar::before {
			transform: rotate(45deg);
		}

		.show-nav .burger-bar::after {
			transform: rotate(-45deg);
		}
		.navbar_item {
			transform: translateY(100vh);
		}

		.show-nav .navbar_item {
			transform: translateY(0);
		}

		.show-nav .slideInDown-1 {
			transition: all 1s ease-out;
		}
		.show-nav .slideInDown-2 {
			transition: all 1.1s ease-out;
		}
		.show-nav .slideInDown-3 {
			transition: all 1.2s ease-out;
		}
		.show-nav .slideInDown-4 {
			transition: all 1.3s ease-out;
		}

		.navbar_item::after {
			content: "";
			display: block;
			margin: 0 auto;
			width: 3vw;
			height: 1px;
			background: ${({ theme }) => theme.colors.textWhite};
		}

		.navbar_item:last-child::after {
			display: none;
		}

		.navbar_link {
			display: block;
			padding: 1.5rem;
			font-size: 5vw;
		}

		.navbar_burger {
			margin-top: 0.5rem;
			display: flex;
			justify-content: center;

			position: fixed;
			top: 1rem;
			right: 1rem;
		}
		.navbar_burger:focus {
			outline: none;
		}

		.navbar_burger:hover {
			cursor: pointer;
		}

		.burger-bar,
		.burger-bar::before,
		.burger-bar::after {
			display: block;
			width: 2.5rem;
			height: 0.188rem;
			position: relative;
			border-radius: 3px;
			background-color: ${({ theme }) => theme.colors.textWhite};
			transition: all 0.5s ease-in-out;
		}

		.burger-bar::before,
		.burger-bar::after {
			position: absolute;
			content: "";
			left: 0;
		}

		.burger-bar::before {
			transform: translateY(-12px);
		}
		.burger-bar::after {
			transform: translateY(12px);
		}
	}
`;

const NavBar = () => {
	const [showLinks, setShowLinks] = useState(false);

	const handleShowLinks = () => {
		setShowLinks(!showLinks);
	};
	return (
		<NavBarStyled>
			<div className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
				<div className="navbar_logo">
					<Link to="/">
						<Logo />
					</Link>
				</div>
				<ul className="navbar_links" onClick={handleShowLinks}>
					<li className="navbar_item slideInDown-1">
						<NavLink
							exact
							to="/home"
							activeClassName=".navbar_link-active"
							className="navbar_link"
							activeStyle={{
								borderBottom: `1px solid #FFF`,
							}}>
							Accueil
						</NavLink>
					</li>
					<li className="navbar_item slideInDown-2">
						<NavLink
							exact
							to="/movie"
							activeClassName=".navbar_link-active"
							className="navbar_link"
							activeStyle={{
								borderBottom: `1px solid #FFF`,
							}}>
							Films
						</NavLink>
					</li>
					<li className="navbar_item slideInDown-3">
						<NavLink
							exact
							to="/series"
							activeClassName=".navbar_link-active"
							className="navbar_link"
							activeStyle={{
								borderBottom: `1px solid #FFF`,
							}}>
							Séries
						</NavLink>
					</li>
					<li className="navbar_item slideInDown-4">
						<NavLink
							to="/searchpage"
							exact
							activeClassName=".navbar_link-active"
							className="navbar_link">
							<Button size=".7rem" type="button">
								Recherche
							</Button>
						</NavLink>
					</li>
				</ul>
				<button className="navbar_burger" onClick={handleShowLinks}>
					<span className="burger-bar"></span>
				</button>
			</div>
		</NavBarStyled>
	);
};

export default NavBar;
