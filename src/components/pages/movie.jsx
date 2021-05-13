import ComingSoon from "./sections/comingsoon"
import styled from "styled-components";
import SectionAllMovies from "./sections/sectionallmovies";


const PageMovie = styled.div`
    padding: 1rem; 
    margin-top: 2rem;   
    width:100vw;    
    background:${({ theme }) => theme.colors.main};
`

const Movie = () =>{
    return (
        <PageMovie>            
            <SectionAllMovies />
            
        </PageMovie>
    )
}

export default Movie;