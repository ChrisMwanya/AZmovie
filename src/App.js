import Start from "./components/pages/start";

import { Route, Switch, useLocation } from "react-router-dom";
import NavBar from "./components/navbar";
import styled from "styled-components";
import Footer from "./components/footer/footer";
import Movie from "./components/pages/movie";
import Home from "./components/pages/home";

const MainWrapper = styled.div`
	width: 100vw;
	margin: 0 auto;
	display: flex !important;
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
					<Route path="/movie" component={Movie} />
				</Switch>
				{location.pathname !== "/" && <Footer />}				
		</MainWrapper>
	);
}

export default App;
