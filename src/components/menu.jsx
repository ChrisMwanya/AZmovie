import styled from 'styled-components'

const MenuStyle = styled.ul`
  display: flex;
  justify-content: space-between;
  width : 60%;
  padding: 10px;
  color : ${({theme})=> theme.colors.secondText}
`
const Menu = () =>{
    return (
      <MenuStyle>
          <li>Accueil</li>
          <li>Films</li>
          <li>Séries</li>
      </MenuStyle>
        )
}

export default Menu