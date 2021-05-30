import styled from "styled-components";
import { NavLink } from "react-router-dom";

const LinkStyled = styled(NavLink)`
	color: ${({ theme }) => theme.colors.textWhite};
	font-size: 0.8rem;
	text-transform: uppercase;
	text-decoration: none;
	padding: .5rem;
	display:flex;
	justify-content: center;
	align-items: center;

	&:hover {		
		padding: .5rem;
		background-color:${({ theme }) => theme.colors.secondMain};		
		border-radius:  5px;
		transition: all 0.3s ease-out;			
	}
`;

const MenuStyle = styled.ul`
	display: flex;
	justify-content: flex-end;
	width: 20%;
	color: ${({ theme }) => theme.colors.secondText};

	.active {	
		padding: .5rem;
		background-color:${({ theme }) => theme.colors.secondMain};		
		transition: all 0.3s ease-out;	
		border-radius:  5px;
		
	}
`;


const Menu = () => {
	return (
		<>
			
			<MenuStyle>
				<li className="linkMenu">
					<LinkStyled to="/home">Accueil</LinkStyled>
				</li>
				<li className="linkMenu">
					<LinkStyled to="/movie">Films</LinkStyled>
				</li>
				<li className="linkMenu">
					<LinkStyled to="/series">Séries</LinkStyled>
				</li>
			</MenuStyle>
		</>
	);
};

export default Menu;
