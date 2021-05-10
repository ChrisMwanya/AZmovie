import Start from "./components/pages/start";

import { Route, Switch, useLocation } from "react-router-dom";
import NavBar from "./components/navbar";
import styled from "styled-components";
import Footer from "./components/footer/footer";
import Movie from "./components/pages/movie";
import Home from "./components/pages/home";
import AboutMovie from "./components/pages/aboutmovie";

const MainWrapper = styled.div`
	width: 100vw;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;
function App() {
	const location = useLocation()
	return (		
		<MainWrapper>
						
			{location.pathname !== "/" && <NavBar />}		
				<Switch>
					<Route exact path="/" component={Start} />
					<Route path="/home" component={Home} />
					<Route exact path="/movie" component={Movie} />	
					<Route path="/movie/:id" render={({match}) => <AboutMovie match={match}/>}	/>	
					<Route path="/tv/:id" render={({match}) => <AboutMovie match={match}/>}	/>			
				</Switch>
				{location.pathname !== "/" && <Footer />}				
		</MainWrapper>

	);
}

export default App;
