import styled from  'styled-components'

const SectionContentStyled = styled.div`
    color:${({ theme }) => theme.colors.textWhite};
    padding: 10px;
`
const SectionContent = (props) => {
    return(
        <SectionContentStyled>
            {props.children}
        </SectionContentStyled>
    )
}

export default SectionContent