<<<<<<< HEAD
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navbar";
import styled from "styled-components";
import Header from "./components/headers/header";
import Main from "./components/mains/main";
import Footer from "./components/footer/footer";

const MainWrapper = styled.div`
	width: 100vw;
	margin: 0 auto;
`;
function App() {
	return (
		<MainWrapper>
			<NavBar />
			<Switch>
				<Header />
				<Main />
				<Footer />
			</Switch>
=======
import Start from "./components/pages/start";
import { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence} from "framer-motion";
import NavBar from "./components/navbar";
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
	/* height:100vh; */
`;
function App() {
	const [valueToSearch, setValueToSearch] = useState();

	const resetValueToSearch = () => {
		setValueToSearch("");
	};

	const searchResults = (e) => {
		setValueToSearch(e.target.value);
	};
	const location = useLocation();
	return (
		<MainWrapper>
			<AnimatePresence exitBeforeEnter>
				{location.pathname !== "/" && (
					<NavBar keyup={resetValueToSearch} onChange={searchResults} />
				)}
				<Switch>
					<Route exact path="/" component={Start} />
					<Route path="/home" component={Home} />
					<Route
						path="/searchpage"
						render={() => <SearchPage valueInput={valueToSearch} />}
					/>
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
>>>>>>> develop
		</MainWrapper>
	);
}

export default App;
