import InputField from "./inputfilds";
import Logo from "./logo";
import Menu from "./headers/menu";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBarStyled = styled.div`
	position: fixed;
	top: 0;
	z-index: 100;
	display: flex;
	justify-content: space-between;
	height: 7vh;
	padding: 0 2rem;	
	background-color: ${({ theme }) => theme.colors.main};
	width: 99.7%;
	.menu-inputfield {
		display: flex;
		justify-content: space-around;
		width: 70%;
	}

	@media ${({ theme }) => theme.mediaQueries["bellow-1024"]} {
		.menu-inputfield {
			display:none;
			transform: translateX(200%);
			text-align: right !important;			
		}
	}
`;

const MenuBurgerStyled = styled.div`
	display: none;
	color: ${({ theme }) => theme.colors.textWhite};
	font-size: 3rem;
	
	@media ${({ theme }) => theme.mediaQueries["bellow-1024"]} {
		display: block;
	}
	@media ${({ theme }) => theme.mediaQueries["bellow-768"]} {
		font-size: 2rem;
	}
`;

const NavBar = (props) => {
	return (
		<NavBarStyled>
			<Link to="/">
				<Logo width="6vw" />
			</Link>
			<MenuBurgerStyled>
				<i class="fas fa-bars"></i>
			</MenuBurgerStyled>
			<div className="menu-inputfield">
				<InputField onChange={props.onChange} />
				<Menu />
			</div>
		</NavBarStyled>
	);
};

export default NavBar;
