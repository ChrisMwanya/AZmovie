import styled from "styled-components";

const ContainerStyled= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const UnrollContainerStyled = styled.div`
	border: 1px solid white;
	padding: 10px;
	text-align: right;
	width: 30vw;
	color: white;
	background-color: ${({ theme }) => theme.colors.main};
`;

const InputFieldsStyled = styled.input`
	border-radius: 15px;
	border: 1px solid white;
	padding: 10px;
	text-align: right;
	width: 30vw;
	color: white;
	background-color: ${({ theme }) => theme.colors.main};
	&:focus {
		outline: none;
	}
`;

const InputField = () => {
	return (
		<ContainerStyled>
			<InputFieldsStyled type="text" placeholder="Recherche" />
            <UnrollContainerStyled />
		</ContainerStyled>
	);
};

export default InputField;
