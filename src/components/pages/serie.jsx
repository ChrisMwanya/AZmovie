
import styled from "styled-components";
import SectionAllSeries from "./sections/sectionallseries";
import CategoriesList from "../categories/categories";


const PageSerie = styled.div`
    padding: 1rem;   
    margin-top: 2rem;  
    width:100vw;    
    background:${({ theme }) => theme.colors.main};
`

const Serie = () =>{
    return (
        <PageSerie> 
            <CategoriesList type="tv"/>           
            <SectionAllSeries />
        </PageSerie>
    )
}

export default Serie;