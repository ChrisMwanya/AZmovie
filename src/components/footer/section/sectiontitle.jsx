import styled from 'styled-components'

const TitleSectionStyled = styled.h5`
    color:${({ theme }) => theme.colors.textWhite};
    font-weight: bold;   
    font-size: 1.3rem; 
    padding: 10px;

`

const TitleSectionFooter = (props) =>{
    return(
        <TitleSectionStyled>
            {props.children}
        </TitleSectionStyled>
    )
}

export default TitleSectionFooter;