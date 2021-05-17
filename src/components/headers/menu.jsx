import styled from "styled-components";
import {NavLink} from "react-router-dom";


const LinkStyled = styled(NavLink)`
	color:${({ theme }) => theme.colors.textWhite};
	font-family: 'Roboto', sans-serif;
	font-size: .9rem;
	text-transform: uppercase;
	text-decoration:none;

	&:hover {
		font-size: .8rem;
		font-weight: bold;
		color:${({ theme }) => theme.colors.textWhite};
		border-bottom: 3px solid ${({ theme }) => theme.colors.textWhite};
	}
	
`

const MenuStyle = styled.ul`
	display: flex;
	justify-content: space-around;
	width: 100%;
	color: ${({ theme }) => theme.colors.secondText};

	.linkMenu {
		border-left: 5px solid ${({ theme }) => theme.colors.main};	
		padding: 10px 0;
	
	}

	.active {
		font-size: .8rem;
		font-weight: bold;
		color:${({ theme }) => theme.colors.textWhite};
		border-bottom: 3px solid ${({ theme }) => theme.colors.textWhite};
	}

`;
const Menu = () => {
	return (
		<MenuStyle>
			<li className="linkMenu"><LinkStyled to="/home">Accueil</LinkStyled></li>
			<li className="linkMenu"><LinkStyled to="/movie">Films</LinkStyled></li>
			<li className="linkMenu"><LinkStyled to="/series" >Séries</LinkStyled></li>
		</MenuStyle>
	);
};

export default Menu;
