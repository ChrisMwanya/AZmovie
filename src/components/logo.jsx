import logo from "../images/logo.svg";
import styled from "styled-components";

const ImageContainer = styled.div`
	width: ${(props) => (props.width ? props.width : "70px")};
	height: 5vh;

	@media ${({ theme }) => theme.mediaQueries["bellow-1024"]} {	
        width: 3rem;
		
	}

	@media ${({ theme }) => theme.mediaQueries["bellow-768"]} {
		
	}

	.image {
		display: bloc;
		width: 100%;
		height: ${(props) => (props.height ? props.height : "")};
	}
`;

const Logo = (props) => {
	return (
		<ImageContainer width={props.width} height={props.height}>
			<img src={logo} alt="logo" className="image" />
		</ImageContainer>
	);
};

export default Logo;
