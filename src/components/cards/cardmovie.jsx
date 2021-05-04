import styled from "styled-components";
import imageFond from "./../../images/imageFilm.jpeg";


const CardStyled = styled.div`
    margin:5px;
    width: 15vw;
	border-radius: 20px;
	position: relative;
    height: 50vh;
	background: url("${imageFond}") no-repeat center;
    background-size: cover;

    .movie-title{
        margin-top: 130%;
        position : absolute;
        padding : 20px;
        border-bottom-right-radius: 20px;
        border-bottom-left-radius: 20px;
        text-align: center;
        font-size: 1.4rem;
        width: 100%;
        height: 20%;
        color : ${({ theme }) => theme.colors.textWhite};
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))
    }
`;

const CardMovie = () => {
	return <CardStyled>
        <div className='movie-title'>
            Scorpion
        </div>
    </CardStyled>;
};

export default CardMovie;
