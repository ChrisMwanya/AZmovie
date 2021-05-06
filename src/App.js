
import NavBar from './components/navbar';
import styled from 'styled-components';
import Header from './components/headers/header';
import Main from './components/mains/main';
import Footer from './components/footer/footer';
import Movie from './components/pages/movie';
import Home from './components/pages/home';
import Start from './components/pages/start';

const MainWrapper = styled.div`
  width: 100vw;
  margin: 0 auto;
  display: flex !important;
  flex-direction: column;
  justify-content: space-evenly;
`
function App() {
  return (
    <MainWrapper>
      <Start />
      {/* <NavBar/>

      <Home /> */}
       {/* <Header />
      <Main/>
      <Movie/>
      <Footer/> */}
     </MainWrapper>

  );
}

export default App;
