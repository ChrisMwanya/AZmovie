import styled from "styled-components";
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"

const ContainerStyled= styled.div`
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    color: white;

   
`;

const LinkStyled = styled(Link)`
    position: absolute;
    color:white;
    margin-left: 28vw;
    i{  
            

    }
`

const UnrollContainerStyled = styled.div`
	border: 1px solid white;
	padding-right: 4rem;
	text-align: right;
	width: 30vw;
	color: white;
	background-color: ${({ theme }) => theme.colors.main};
  
`;

const InputFieldsStyled = styled.input`
    position: relative;
	border-radius: 15px;
	border: 1px solid white;
	padding-right: 2rem;
    padding-top: .5rem;
    padding-bottom: .5rem;
	text-align: right;
	width: 30vw;
	color: white;
	background-color: ${({ theme }) => theme.colors.main};
	&:focus {
		outline: none;
	}

   
`;

const InputField = (props) => {     
	return (
		<ContainerStyled>
			<InputFieldsStyled type="text" placeholder="Recherche" onChange={props.onChange} /> <LinkStyled to="/SearchPage"><i class="fas fa-search"></i></LinkStyled>
        
		</ContainerStyled>
	);
};

export default InputField;
