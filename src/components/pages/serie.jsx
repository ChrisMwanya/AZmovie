
import styled from "styled-components";
import SectionAllSeries from "./sections/sectionallseries";
import CategoriesList from "../categories/categories";
import { useState} from 'react'
import SeriesbyCategory from "./sections/seriesbycategory";


const PageSerie = styled.div`
    padding: 1rem;   
    margin-top: 2rem;  
    width:100vw;    
    background:${({ theme }) => theme.colors.main};
`

const Serie = () =>{

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
        <PageSerie> 
            <CategoriesList type="tv"  change={change} onClick={handleClick}/>           
            {showCategory ? <SeriesbyCategory id={idCategory}/>  : <SectionAllSeries />}
        </PageSerie>
    )
}

export default Serie;