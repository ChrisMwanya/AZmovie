import Start from "./components/pages/start";
import { useState} from 'react'
import { Route, Switch, useLocation } from "react-router-dom";
import NavBar from "./components/navbar";
import styled from "styled-components";
import Footer from "./components/footer/footer";
import Movie from "./components/pages/movie";
import Serie from "./components/pages/serie";
import Home from "./components/pages/home";
import AboutMovie from "./components/pages/abouts/aboutmovie";
import AboutSerie from "./components/pages/abouts/aboutserie";
import SearchPage from "./components/pages/searchpage"


const MainWrapper = styled.div`
	
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	overflow-x:hidden;
`;
function App() {

	const [valueToSearch,setValueToSearch] = useState()

    const searchResults = (e) => {
      setValueToSearch(e.target.value)    
    }    
	const location = useLocation()
	return (		
		<MainWrapper>
						
			{location.pathname !== "/" && <NavBar onChange={searchResults} />}		
				<Switch>
					<Route exact path="/" component={Start} />
					<Route path="/home" component={Home} />
					<Route path="/searchpage" render={()=> <SearchPage valueInput={valueToSearch} /> } />
					<Route exact path="/movie" component={Movie} />	
					<Route exact path="/series" component={Serie} />	
					<Route path="/movie/:id" render={({match}) => <AboutMovie match={match}/>}	/>	
					<Route path="/tv/:id" render={({match}) => <AboutSerie match={match}/>}	/>			
				</Switch>
				{location.pathname !== "/" && <Footer />}				
		</MainWrapper>

	);
}

export default App;
