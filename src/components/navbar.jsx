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
	padding: 5px;
	/* box-shadow: 2px 2px 10px grey; */
	background-color: ${({ theme }) => theme.colors.main};
	width: 100%;
	.menu-inputfield {
		display: flex;
		justify-content: space-around;
		width: 90%;
	}
`;

const NavBar = (props) => {
	
	return (
		<NavBarStyled>
			<Link to="/">
				<Logo  width="6vw"/>
			</Link>
			<div className="menu-inputfield">
				<InputField  onChange={props.onChange}/>				
				<Menu />
			</div>
		</NavBarStyled>
	);
};

export default NavBar;
