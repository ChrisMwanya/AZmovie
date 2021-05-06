
import NavBar from './components/navbar';
import styled from 'styled-components';
import Header from './components/headers/header';
import Main from './components/mains/main';
import Footer from './components/footer/footer';
import Movie from './components/pages/movie';

const MainWrapper = styled.div`
  width: 100vw;
  margin: 0 auto;
`
function App() {
  return (
    <MainWrapper>
      <NavBar />
      {/* <Header />
      <Main/> */}
      <Movie/>
      <Footer/>
     </MainWrapper>

  );
}

export default App;
