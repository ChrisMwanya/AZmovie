import styled from "styled-components";
import {NavLink} from "react-router-dom";


const LinkStyled = styled(NavLink)`
	color:${({ theme }) => theme.colors.textWhite};
	font-family: 'Roboto', sans-serif;
	font-size: 1rem;
	text-transform: uppercase;
	text-decoration:none;

	
`

const MenuStyle = styled.ul`
	display: flex;
	justify-content: space-around;
	width: 80%;

	color: ${({ theme }) => theme.colors.secondText};
	.linkMenu {
		border-left: 5px solid ${({ theme }) => theme.colors.main};	
		padding: 10px;
		margin: 2px;
	}

	.active {
		font-size: 1rem;
		font-weight: bold;
		color:${({ theme }) => theme.colors.textWhite};
		border-bottom: 3px solid ${({ theme }) => theme.colors.textWhite};
	}

	.linkMenu:hover {
		transition: all 0.6s ease;
		/* border-left: 5px solid ${({ theme }) => theme.colors.textWhite};		 */
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
			<li className="linkMenu"><LinkStyled to="/movie">Films</LinkStyled></li>
			{/* <li className="linkMenu"><LinkStyled >Séries</LinkStyled></li> */}
		</MenuStyle>
	);
};

export default Menu;
