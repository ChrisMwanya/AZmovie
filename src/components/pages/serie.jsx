import ComingSoon from "./sections/comingsoon"
import styled from "styled-components";
import SectionAllSeries from "./sections/sectionallseries";


const PageSerie = styled.div`
    padding: 1rem;   
    margin-top: 2rem;  
    width:100vw;    
    background:${({ theme }) => theme.colors.main};
`

const Serie = () =>{
    return (
        <PageSerie>            
            <SectionAllSeries />
        </PageSerie>
    )
}

export default Serie;