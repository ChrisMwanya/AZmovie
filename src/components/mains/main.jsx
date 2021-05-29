import SectionLatestMovie from "./sections/sectionlastetMovie";
import styled from "styled-components";
import SectionLatestTvShow from "./sections/sectionlastestseries";

const MainStyled = styled.main`	
	margin-top: 1rem;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.main};
	display: flex;
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
				<SectionLatestTvShow />
			</div>
		</MainStyled>
	);
};

export default Main;
