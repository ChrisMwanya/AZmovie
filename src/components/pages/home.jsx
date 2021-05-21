import styled from "styled-components";
import Main from "../mains/main";
import {Route } from "react-router-dom";
const HomeStyled = styled.section`
	padding: .4rem 2rem;
	background: ${({ theme }) => theme.colors.main};	
`;
const Home = () => {
	
	return (
		<HomeStyled>		
			<Route path="/home" component={Main} />		
		</HomeStyled>
	);
};

export default Home;
