import SectionLatestMovie from "./sections/sectionlastetMovie";
import styled from "styled-components";
import SectionLatestSeries from "./sections/sectionlastestseries";

const MainStyled = styled.main`

	width: 100%;	
	background-color: ${({ theme }) => theme.colors.main};	
	display:flex;
	justify-content: center;
	align-items: center;
	.bloc {
		padding: 3rem;
	}
`;

const Main = () => {
	return (
		<MainStyled>
			<div className="bloc">
			<SectionLatestMovie />
			<SectionLatestSeries />
			</div>
		
		</MainStyled>
	);
};

export default Main;
