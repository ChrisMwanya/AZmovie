import styled from "styled-components";

const ButtonStyled = styled.button`

	transition: all 0.8s ease;
	transform: scale(1.05);
	border-radius: 5px;
	margin:.3rem;
	cursor: pointer;
	padding: 10px;
	font-size: ${(props) => (props.size ? props.size : ".5rem")};
	border: 1px solid
		${(props) =>
			props.color ? props.color : ({ theme }) => theme.colors.secondMain};
	background: ${(props) =>
		props.type ? ({ theme }) => theme.colors.secondMain : "none"};
	color: ${({ theme }) => theme.colors.textWhite};
	/* width:35%; */
	/* height: 40%; */

	&:hover {
		transition: all 0.8s ease;
		transform: scale(1.05);
		color: ${({ theme }) => theme.colors.secondMain};
		background-color: ${({ theme }) => theme.colors.textWhite};
		border: 1px solid ${({ theme }) => theme.colors.secondMain};
	}
	&:active {
		transition: all 0.8s ease;
		transform: scale(1.05);
		outline: none;
		color: ${({ theme }) => theme.colors.secondMain};
		background-color: ${({ theme }) => theme.colors.textWhite};
		border: 3px solid ${({ theme }) => theme.colors.secondMain};
	}
`;
const Button = (props) => {
	return (
		<ButtonStyled onClick={props.onClick} type={props.type} color={props.color} size={props.size}>
			{props.children}
		</ButtonStyled>
	);
};

export default Button;
