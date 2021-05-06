import styled from "styled-components";
import Main from "../mains/main";


const HomeStyled = styled.section`
	background: ${({ theme }) => theme.colors.main};
`;
const Home = () => {
	return (
		<HomeStyled>
			<Main/>
		</HomeStyled>
	);
};

export default Home;
