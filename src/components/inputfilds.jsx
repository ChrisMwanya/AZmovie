import styled from 'styled-components'

const InputFieldsStyled= styled.input`
    border-radius: 15px;
    border: 1px solid white ;
    padding: 10px;
    text-align: right; 
     width: 60vw;
     color: white;
     background-color: ${({ theme }) => theme.colors.main};
    &:focus{
        outline: none;
    }
    
`

const InputField = () =>{
    return <InputFieldsStyled type="text" placeholder='Recherche'/>
}

export default InputField