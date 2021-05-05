import styled from 'styled-components'

const TitleSectionStyled = styled.div`
    border-left: 5px solid ${({ theme }) => theme.colors.secondMain};
    border-bottom : 2px solid ${({ theme }) => theme.colors.secondMain};
    padding: 10px;
    font-size: 1.4rem;
    width: 100vw;
    
    color: ${({ theme }) => theme.colors.textWhite}
` 
const TitleSection = (props) => {
    return(
        <TitleSectionStyled>
            {props.children}
        </TitleSectionStyled>
    )
}

export default TitleSection