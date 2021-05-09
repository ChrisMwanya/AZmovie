import styled from "styled-components";
import profil from "../../images/profilVinDiesel.jpeg";

const CardStyled = styled.div`
	margin: 5px;
	width: 10vw;
	border-radius: 15px;
	height: 30vh;
	background: url("${profil}") no-repeat;
	background-size: cover;
	position: relative;
	background-position: center;

	.info-actor {
		position: absolute;
		bottom: 0;
		height: 30%;
		width: 100%;
		background: ${({ theme }) => theme.colors.main};
	}
`;

const CardActor = () => {
	return (
		<CardStyled>
			<div className="info-actor">
				<p>
					Vin Diesel
					<br />
					Toretto
				</p>
			</div>
		</CardStyled>
	);
};

export default CardActor;
