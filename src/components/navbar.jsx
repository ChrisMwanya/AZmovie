import InputField from "./inputfilds";
import Logo from "./logo";
import Menu from "./menu";
import styled from "styled-components";

const NavBarStyled = styled.div`
	display: flex;
	justify-content: space-between;
	height: 7vh;
	padding: 5px;
    box-shadow: 2px 5px 10px grey;
    background-color : ${({theme})=>theme.colors.main};    
	.menu-inputfield {
		display: flex;
		justify-content: space-between;
        width: 40%;
	}
`;

const NavBar = () => {
	return (
		<NavBarStyled>
			<Logo />
			<div className='menu-inputfield'>
				<Menu />
				<InputField />
			</div>
		</NavBarStyled>
	);
};

export default NavBar;
