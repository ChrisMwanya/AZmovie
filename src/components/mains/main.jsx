import Section from "./sections/section"
import styled from "styled-components"

const MainStyled= styled.main`
    padding : 20px;
    
    background-color :  ${({ theme }) => theme.colors.main};
`

const Main = () => {
    return(
        <MainStyled>
            <Section /> 
        </MainStyled>
    )
}

export default Main