import { Router, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import styled from "styled-components";
import Header from "./components/headers/header";
import Main from "./components/mains/main";
import Footer from "./components/footer/footer";
import Movie from "./components/pages/movie";

const MainWrapper = styled.div`
	width: 100vw;
	margin: 0 auto;
	display: flex !important;
	flex-direction: column;
	justify-content: space-evenly;
`;
function App() {
	return (
		<MainWrapper>
			<NavBar />
			<Switch>
				<Header />
				<Main />
				<Movie />
				<Footer />
			</Switch>
		</MainWrapper>
	);
}

export default App;
