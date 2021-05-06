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
		</MainWrapper>
	);
}

export default App;
