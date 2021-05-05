import styled from "styled-components";

const MenuStyle = styled.ul`
	display: flex;
	justify-content: space-between;
	width: 60%;

	color: ${({ theme }) => theme.colors.secondText};
	.linkMenu {
		/* border-left: 5px solid ${({ theme }) => theme.colors.main};
		border-bottom: 2px solid ${({ theme }) => theme.colors.main};
		background-color:${({ theme }) => theme.colors.secondMain}; */
		padding: 10px;
		margin: 2px;
	}

	.linkMenu:hover {
		transition: all 0.6s ease;
		border-left: 5px solid ${({ theme }) => theme.colors.secondMain};
		border-bottom : 2px solid ${({ theme }) => theme.colors.secondMain};
	}
`;
const Menu = () => {
	return (
		<MenuStyle>
			<li className="linkMenu">Accueil</li>
			<li className="linkMenu">Films</li>
			<li className="linkMenu">Séries</li>
		</MenuStyle>
	);
};

export default Menu;
