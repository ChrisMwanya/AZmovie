import SectionLatestMovie from "./sections/sectionlastetMovie";
import styled from "styled-components";
import SectionLatestTvShow from "./sections/sectionlastestseries";
import Button from "../buttons/button";
import { useState } from "react";

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

	.title {
		padding: 0;
		color: ${({ theme }) => theme.colors.textWhite};
		margin-left: 9%;
		display: inline-block;
		border-bottom: 1px solid ${({ theme }) => theme.colors.textWhite};
		width: 82%;
		margin-bottom: 3rem;
	}
`;

const Main = () => {
	const [tvShowisVisible, setTvShowIsVisible] = useState(false);
	
	const handleClickTvShow = () =>{
		setTvShowIsVisible(true);
	}

	const handleClickMovie = () =>{
		setTvShowIsVisible(false);
	}

	return (
		<MainStyled>
			<div className="bloc">
				<div className="title">
					<Button onClick={handleClickMovie} type="button">Films</Button>
					<Button onClick={handleClickTvShow} type="button">Series</Button>
				</div>
				{tvShowisVisible ? <SectionLatestTvShow /> : <SectionLatestMovie />}
			</div>
		</MainStyled>
	);
};

export default Main;
