import ComingSoon from "./sections/comingsoon"
import styled from "styled-components";
import SectionAllMovies from "./sections/sectionallmovies";
import CategoriesList from "../categories/categories";


const PageMovie = styled.div`
    padding: 1rem; 
    margin-top: 2rem;   
    width:100vw;    
    background:${({ theme }) => theme.colors.main};
`

const Movie = () =>{
    return (
        <PageMovie>    
            <CategoriesList/>        
            <SectionAllMovies />            
        </PageMovie>
    )
}

export default Movie;