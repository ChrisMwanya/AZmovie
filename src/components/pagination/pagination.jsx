import styled from "styled-components";

const ButtonsContainerStyled = styled.div`
    margin-top: 1rem;
	display: flex;
	justify-content: space-around;
	align-items: center;
	color: ${({ theme }) => theme.colors.textWhite};

	button {
        cursor: pointer;		
		padding: .2rem;
        border: 1px solid ${({ theme }) => theme.colors.textWhite};
		background: ${({ theme }) => theme.colors.secondMain};
		color: ${({ theme }) => theme.colors.textWhite};
		width: 9vw;
		font-size: 0.8rem;
	}

    button:nth-child(2) {
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
    }

    button:nth-child(1) {
        border-top-left-radius: 50px;
        border-bottom-left-radius: 50px;
    }


	button:focus {
		outline: none;
	}
`;

const Pagination = (props) => {
	return (
		<ButtonsContainerStyled>
			<button onClick={props.onClickPrevPage}>
				<i className="fas fa-arrow-left"></i> Précédent
			</button>
			{props.actualPage} /{props.totalPages}
			<button onClick={props.onClickNextPage}>
				Next <i className="fas fa-arrow-right"></i>
			</button>
		</ButtonsContainerStyled>
	);
};

export default Pagination;
