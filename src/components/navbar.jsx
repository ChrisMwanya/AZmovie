import InputField from "./inputfilds";
import Logo from "./logo";
import Menu from "./headers/menu";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBarStyled = styled.div`
	display: flex;
	justify-content: space-between;
	height: 7vh;
	padding: 5px;
	box-shadow: 2px 5px 10px grey;
	background-color: ${({ theme }) => theme.colors.main};
	width: 100vw;
	.menu-inputfield {
		display: flex;
		justify-content: space-between;
		width: 70%;
	}
`;

const NavBar = () => {
	return (
		<NavBarStyled>
			<Link to="/">
				<Logo />
			</Link>
			<div className="menu-inputfield">
				<InputField />
				<Menu />
			</div>
		</NavBarStyled>
	);
};

export default NavBar;
