import styled from "styled-components";
import Loader from "./loader";

const PageStyled = styled.div`
	padding: 0.9rem 30rem;
	background: ${({ theme }) => theme.colors.main};
	display: flex;
	justify-content: center;

	.header {
		position: relative;
		padding-right: 2rem;
		background: #111;
		background-size: cover;
		background-position: center;
        width: 100vw;       
		min-height: 80vh;
		display: flex;
		flex-direction: center;
		justify-content: center;
		align-items: center;
	}

	.film-poster {
		border-radius: 15px;
		margin-left: -50rem;
		margin-top: 20rem;
		position: absolute;
		background: #000;
		height: 48vh;
		width: 20vw;
        
	}
	.more-info {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 1rem;
		position: absolute;
		right: 6.8rem;
		margin-top: -6rem;
		width: 60.7%;
		height: 9vw;
		background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.7),
			rgba(0, 0, 0, 1)
		);
	}
`;

const PageAboutLoader = () => {
	return (
		<PageStyled>
			<div className="container">
				<div className="header">
					<Loader />
				</div>
			</div>
			<div className="film-poster">
				<Loader />
			</div>
			<div className="more-info">
				<Loader />
			</div>
		</PageStyled>
	);
};

export default PageAboutLoader
