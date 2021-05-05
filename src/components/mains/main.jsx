import SectionLatestMovie from "./sections/sectionlastetMovie";
import styled from "styled-components";
import SectionLatestSeries from "./sections/sectionlastestseries";

const MainStyled = styled.main`
	padding: 10px;
	width: 100vw;
	background-color: ${({ theme }) => theme.colors.main};
`;

const Main = () => {
	return (
		<MainStyled>
			<SectionLatestMovie />
			<SectionLatestSeries />
		</MainStyled>
	);
};

export default Main;
