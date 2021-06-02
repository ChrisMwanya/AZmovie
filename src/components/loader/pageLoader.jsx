import styled from "styled-components";
import { useState } from "react";
import Loader from "./loader";

const PageStyled = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;

	.fake-card {
		margin: 5px;
		width: 20vw;
		border-radius: 15px;
		position: relative;
		height: 40vh;
        background-color: ${({ theme }) => theme.colors.secondMain};
	}

    @media ${({ theme})=> theme.mediaQueries["bellow-1024"]}  {
		.fake-card {
			width: 20vw;
			height: 30vh;
		}
    }
    @media ${({ theme})=> theme.mediaQueries["bellow-768"]} {
		.fake-card {
			width: 24vw;
			height: 25vh;
		}
    }
`;

const PageLoader = () => {
    window.scrollTo(0, 0);
	const [fakeList] = useState([
		{ name: "" },
		{ name: "" },
		{ name: "" },
		{ name: "" },
		{ name: "" },
		{ name: "" },
		{ name: "" },
		{ name: "" },
		{ name: "" },
		{ name: "" },
		{ name: "" },
		{ name: "" },
	]);

	return (
		<PageStyled>
			{fakeList.map((fakeItem) => {
				return (
					<div className="fake-card">
						<Loader />
					</div>
				);
			})}
		</PageStyled>
	);
};

export default PageLoader;
