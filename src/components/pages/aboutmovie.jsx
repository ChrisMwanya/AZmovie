import styled from "styled-components";
import Button from "../../buttons/button";
import imageFond from "../../images/VinDiesel.jpg";
import poster from "../../images/fastandfurious.jpg";
import TitleSection from "../mains/titleSection/titlesection";
import CardActor from "../cards/cardactor";

const AboutMovieStyled = styled.div`
	background: ${({ theme }) => theme.colors.main};
	color: ${({ theme }) => theme.colors.textWhite};
	display: flex;
	justify-content: center;
    padding: .9rem;

	.container {
		width: 100vw;
	}

	.header {
		position: relative;
		padding-right: 2rem;
		background: url("${imageFond}") no-repeat;
		background-size: cover;
		height: 70vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-end;
	}

    .synopsis{
        margin-top: 8rem;
        padding: 1rem;
        border-bottom: .1px solid ${({ theme }) => theme.colors.textWhite}
    }

    p{
       padding-top: 1rem;
    }

	.more-info {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 1rem;
		position: absolute;
		right: .8rem;
		margin-top: -6rem;
		width: 75.5%;
		height: 13vw;
		background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.7),
			rgba(0, 0, 0, 1)
		);
	}

	h1 {
		font-size: 3rem;
	}

	.btn-container {
		margin-top: 1rem;
	}

	.other-info {
		display: flex;
		justify-content: space-between;
	}

    .other{
        padding: 1rem;
    }

	.film-poster {
		border-radius: 15px;
		margin-left: 2rem;
		margin-top: -13rem;
		position: absolute;
		background: url("${poster}") no-repeat;
		background-size: cover;
		height: 48vh;
		width: 20vw;
		background-position: center;
	}

    .actors{
        padding: 1rem;
        border-bottom: .1px solid ${({ theme }) => theme.colors.textWhite}
    }

    .actors-container
    {
        padding: 1rem;
        display: flex;        
        flex-wrap:wrap;
    }
`;

const AboutMovie = (props) => {
	return (
		<AboutMovieStyled>
			<div className="container">
				<div className="header">
					<h1>Fast & Furious 9</h1>
					<div className="btn-container">
						<Button size=".9rem" type="button">
							Bande d'annonce
						</Button>
					</div>
				</div>
				<div className="film-poster"></div>
				<div className="more-info">
					<div className="categorie">
						<Button>Triller</Button> <Button>Action</Button>
					</div>
					<div className="other-info">
						<div className="director">Director: Justin Lin</div>
						<div>
							<div className="status">Satus: Annoncé</div>
							<div className="time">Durée : 1h30</div>
						</div>
					</div>
				</div>
				<div className="synopsis">
                    <TitleSection>Synopsis</TitleSection>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu,
						convallis porta sit. Lorem scelerisque facilisis tortor aliquet
						pretium. Semper sed arcu felis nulla. Et, augue porttitor ultrices
						amet. Nunc, tellus mattis eget turpis at pharetra nulla odio vel.
						Sit pretium felis dui lacinia morbi nisl sed eget. Integer dictum
						habitant etiam enim ut tristique dui. Augue sit neque libero quam
						egestas id suspendisse id nisi. Turpis maecenas malesuada sed
						faucibus quam felis, fermentum cursus. Vulputate placerat sit eu
						tellus scelerisque donec. Tellus in facilisis ornare pellentesque
						mauris id facilisi convallis ultrices. Leo, lectus scelerisque
						facilisis luctus facilisis felis, fringilla imperdiet. Pharetra
						interdum malesuada molestie pharetra sed enim, magna facilisi sit.
						Egestas ut ridiculus habitant ornare risus iaculis nibh nisl. Massa
						orci neque purus elementum. Fermentum, eget est, integer non
						interdum nunc urna porta. Nam vestibulum bibendum eu ullamcorper
						amet vitae commodo. Aliquet netus est molestie lorem risus
						scelerisque magna. In malesuada tellus volutpat aliquet egestas
						vitae aliquet quam. Volutpat scelerisque nullam convallis et quis
						nunc quis. Purus eu praesent phasellus morbi ut etiam tincidunt.
						Montes, tempus pharetra, tortor et porttitor molestie nibh nunc. Leo
						vulputate volutpat sagittis libero blandit. Semper neque, arcu,
						neque, porttitor laoreet pulvinar justo. Molestie convallis id
						lectus felis curabitur morbi dictumst.
					</p>
				</div>
				
				<div className="actors">
                    <TitleSection>Tête d'affiche</TitleSection>
                    <div className="actors-container">
                        <CardActor />  <CardActor />  <CardActor />
                    </div>
                </div>
				
				<div className="other">
					<div className="title-other">
                    <TitleSection>A voir aussi</TitleSection>
                    </div>
					<div className="slide-other">

                    </div>
				</div>
			</div>
		</AboutMovieStyled>
	);
};

export default AboutMovie;
