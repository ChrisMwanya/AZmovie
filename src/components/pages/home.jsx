import styled from "styled-components";
import Main from "../mains/main";
import Movie from "./movie";
import {Route } from "react-router-dom";
const HomeStyled = styled.section`
	background: ${({ theme }) => theme.colors.main};

`;
const Home = () => {
	
	return (
		<HomeStyled>		
			<Route path="/home" component={Main} />
			<Route path="/home/movie" component={Movie} />			
		</HomeStyled>
	);
};

export default Home;
