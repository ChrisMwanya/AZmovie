
import styled from "styled-components";
import SectionAllMovies from "./sections/sectionallmovies";
import CategoriesList from "../categories/categories";
import {useState} from 'react'
import MoviesbyCategory from "./sections/moviebycategory";



const PageMovie = styled.div`
  
    padding: 7rem; 
    margin-top: 2rem;   
    width:80%;    
    background:${({ theme }) => theme.colors.main};
`

const Movie = () =>{

    const [idCategory,setIdCategory] = useState()
    const [isMoviesDisplayedByCategory,setIsMoviesDisplayedByCategory] = useState(false);
    const handleClick = (idCategory) =>{
        setIdCategory(idCategory)
        setIsMoviesDisplayedByCategory(true)       
    }
    const switchToAllMovies = () =>{    
        setIsMoviesDisplayedByCategory(false)
    } 

   

    return (
        <PageMovie>             
            <CategoriesList type="movie" change={switchToAllMovies} onClick={handleClick}/> 
            {isMoviesDisplayedByCategory ? <MoviesbyCategory id={idCategory}/>  : <SectionAllMovies />}
        </PageMovie>
    )
}

export default Movie;