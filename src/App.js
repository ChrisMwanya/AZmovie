import Start from "./components/pages/start";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import styled from "styled-components";
import Header from "./components/headers/header";
import Main from "./components/mains/main";
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
	return (
		<MainWrapper>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Start} />
					<Route path="/home" component={Home} />
				</Switch>
			</BrowserRouter>
		</MainWrapper>
	);
}

export default App;
