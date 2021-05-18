import styled from "styled-components";
import Main from "../mains/main";
import {Route } from "react-router-dom";
const HomeStyled = styled.section`
	padding: .4rem 2rem;
	background: ${({ theme }) => theme.colors.main};
	border: 3px solid orange;
	
`;
const Home = () => {
	
	return (
		<HomeStyled>		
			<Route path="/home" component={Main} />		
		</HomeStyled>
	);
};

export default Home;
