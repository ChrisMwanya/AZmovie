import ComingSoon from "./sections/comingsoon"
import styled from "styled-components";
import SectionAllMovies from "./sections/sectionallmovies";

const PageMovie = styled.div`
    padding: 1rem;
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