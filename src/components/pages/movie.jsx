import ComingSoon from "./sections/comingsoon"
import styled from "styled-components";
import SectionAllMovies from "./sections/sectionallmovies";
import CategoriesList from "../categories/categories";
import {useState, useEffect} from 'react'
import MoviesbyCategory from "./sections/moviebycategory";



const PageMovie = styled.div`
    padding: 1rem; 
    margin-top: 2rem;   
    width:100vw;    
    background:${({ theme }) => theme.colors.main};
`

const Movie = () =>{

    const [idCategory,setCategory] = useState()
    const [showCategory,setShowCategory] = useState(false);
    const handleClick = (id) =>{
        setCategory(id)
        setShowCategory(true)       
    }
    const change = (e) =>{
        e.preventDefault();
        setShowCategory(false)
    } 

   

    return (
        <PageMovie>
             
            <CategoriesList type="movie" change={change} onClick={handleClick}/> 
            {showCategory ? <MoviesbyCategory id={idCategory}/>  : <SectionAllMovies />}
                  
        </PageMovie>
    )
}

export default Movie;