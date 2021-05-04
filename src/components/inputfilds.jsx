import styled from 'styled-components'

const InputFieldsStyled= styled.input`
    border-radius: 15px;
    border: 3px solid #4E1717 ;
    padding: 10px;
    text-align: right; 
     
    &:focus{
        outline: none;
    }
    
`

const InputField = () =>{
    return <InputFieldsStyled type="text" placeholder='Recherche'/>
}

export default InputField