import logo from "../images/logo.svg"
import styled from 'styled-components'

const ImageContainer =  styled.div`
    width: 70px;
    height: 15vh;
    
    .image{
        display:bloc;
        width:100%;
        height: 5vh;
        
    }
`

const Logo = () =>{
    return (
        <ImageContainer>
            <img src={logo} alt="logo" className='image' />
        </ImageContainer>
    )
}

export default Logo