import styled from "styled-components";
import {Link} from "react-router-dom";


const LinkStyled = styled(Link)`
	color:${({ theme }) => theme.colors.textWhite};
	font-family: 'Roboto', sans-serif;
	font-size: 1rem;
	text-transform: uppercase;
	text-decoration:none;
`

const MenuStyle = styled.ul`
	display: flex;
	justify-content: space-between;
	width: 60%;

	color: ${({ theme }) => theme.colors.secondText};
	.linkMenu {
		border-left: 5px solid ${({ theme }) => theme.colors.main};	
		padding: 10px;
		margin: 2px;
	}

	.linkMenu:hover {
		transition: all 0.6s ease;
		border-left: 5px solid ${({ theme }) => theme.colors.textWhite};		
	}

	.linkMenu:active {
		transition: all 0.6s ease;
		border-left: 5px solid ${({ theme }) => theme.colors.secondMain};		
	}
`;
const Menu = () => {
	return (
		<MenuStyle>
			<li className="linkMenu"><LinkStyled to="/home">Accueil</LinkStyled></li>
			<li className="linkMenu"><LinkStyled to="/home/movie">Films</LinkStyled></li>
			<li className="linkMenu"><LinkStyled to="/home/movie">Séries</LinkStyled></li>
		</MenuStyle>
	);
};

export default Menu;
