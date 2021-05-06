import styled from 'styled-components'

const ButtonStyled= styled.button`    
    border-radius: 5px;
    padding: 10px;
    font-size: ${(props) => props.size? props.size : ".5rem"}; 
    border: 2px solid ${({ theme }) => theme.colors.secondMain};
    background: ${(props) => props.type? ({theme}) => theme.colors.secondMain:'none'};    
    color: ${({ theme }) => theme.colors.textWhite};
    /* width:35%; */
    /* height: 40%; */

&:hover{
    
    transition: all 0.5s ease;
    transform:scale(1.05);
}

`
const Button = (props) =>{
    return (
        <ButtonStyled type={props.type} size={props.size}>{props.children}</ButtonStyled>
    )
}

export default Button;