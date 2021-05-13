import styled from "styled-components";

const StyledLoader = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
    background:transparent;

	@keyframes ldio-y1m1h6fjvff {
		0% {
			transform: rotate(0);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	.ldio-y1m1h6fjvff div {
        display:flex;
        justify-content:center;
		box-sizing: border-box !important;
	}
	.ldio-y1m1h6fjvff > div {
		position: absolute;
		width: 100px;
		height: 100px;
		top: 10px;
		left: 10px;
		border-radius: 50%;
		border: 5px solid #000;
		border-color: #fff transparent #fff transparent;
		animation: ldio-y1m1h6fjvff 1s linear infinite;
	}
	.ldio-y1m1h6fjvff > div:nth-child(2) {
		border-color: transparent;
	}
	.ldio-y1m1h6fjvff > div:nth-child(2) div {
		position: absolute;
		width: 100%;
		height: 100%;
		transform: rotate(45deg);
	}
	.ldio-y1m1h6fjvff > div:nth-child(2) div:before,
	.ldio-y1m1h6fjvff > div:nth-child(2) div:after {
		content: "";
		display: block;
		position: absolute;
		width: 16rem;
		height: 16rem;
		left: -6rem;
		top: 18rem;
		background: white;
		border-radius: 50%;
		box-shadow: 0 12rem 0 0 white;
	}
	.ldio-y1m1h6fjvff > div:nth-child(2) div:after {
		left: -6rem;
		top: 18rem;
		box-shadow: 128px 0 0 0 white;
	}
	.loadingio-spinner-dual-ring-wzw14euopql {
		width: 15rem;
		height: 12rem;
		display: inline-block;
		overflow: hidden;
		background: transparent;
	}
	.ldio-y1m1h6fjvff {
		width: 100%;
		height: 100%;
		position: relative;
		transform: translateZ(0) scale(1);
		backface-visibility: hidden;
		transform-origin: 0 0; /* see note above */
	}
	.ldio-y1m1h6fjvff div {
		box-sizing: content-box;
	}
`;

const Loader = () => {
	return (
		<StyledLoader>
			<div className="loadingio-spinner-dual-ring-wzw14euopql">
				<div className="ldio-y1m1h6fjvff">
					<div></div>
					<div>
						<div></div>
					</div>
				</div>
			</div>
		</StyledLoader>
	);
};
export default Loader;
