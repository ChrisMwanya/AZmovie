import ComingSoon from "./sections/comingsoon"
import styled from "styled-components";
import SectionAllMovies from "./sections/sectionallmovies";

const PageMovie = styled.div`
    padding: 1rem;
    border: 2px solid Red;
    width:100vw;    
    background:${({ theme }) => theme.colors.main};
`

const Movie = () =>{
    return (
        <PageMovie>
            <ComingSoon/>
            <SectionAllMovies />
        </PageMovie>
    )
}

export default Movie;