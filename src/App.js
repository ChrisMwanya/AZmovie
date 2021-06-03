import Start from "./components/pages/start";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NavBarBis from "./components/navbar/navbar";
import styled from "styled-components";
import Footer from "./components/footer/footer";
import Movie from "./components/pages/movie";
import Serie from "./components/pages/serie";
import Home from "./components/pages/home";
import AboutMovie from "./components/pages/abouts/aboutmovie";
import AboutSerie from "./components/pages/abouts/aboutserie";
import SearchPage from "./components/pages/searchpage";

const MainWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	overflow-x: hidden;
	background-color: ${({ theme }) => theme.colors.main};
	min-height: 100vh;
`;
function App() {
	const location = useLocation();
	return (
		<MainWrapper>
			<AnimatePresence exitBeforeEnter>
				{location.pathname !== "/" && <NavBarBis />}
				<Switch>
					<Route exact path="/" component={Start} />
					<Route path="/home" component={Home} />
					<Route path="/searchpage" component={SearchPage} />
					<Route exact path="/movie" component={Movie} />
					<Route exact path="/series" component={Serie} />
					<Route
						path="/movie/:id"
						render={({ match }) => <AboutMovie match={match} />}
					/>
					<Route
						path="/tv/:id"
						render={({ match }) => <AboutSerie match={match} />}
					/>
				</Switch>
				{location.pathname !== "/" && <Footer />}
			</AnimatePresence>
		</MainWrapper>
	);
}

export default App;
