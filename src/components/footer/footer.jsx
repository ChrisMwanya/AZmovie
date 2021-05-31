import styled from "styled-components";
import logoTDM from "./../../images/TheMovieDB.svg";

const FooterStyled = styled.footer`
	background: #000;
	padding: 4px;
	width: 100vw;
	.section {
		width: 82%;
		margin-left: 9%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		color: ${({ theme }) => theme.colors.textWhite};
	}

	.link{
		display: inline-block;
		margin-right: 4px;
		color:${({ theme }) => theme.colors.textWhite};
		font-size: 1.2rem;
	}
	.link:hover{
		transform:scale(1.05);
		
	}

	span{
		display: block;
		font-weight: bold;
		margin-top:.3rem;
		
	}

	.section p {
		border-bottom: 1px solid ${({ theme }) => theme.colors.textWhite};
		margin-bottom: 1rem;
	}

	.image {
		width: 5%;
		margin-bottom: 2rem;
	}

	img {
		display: block;
		width: 100%;
	}
	.copyright {
		text-align: center;
		color: ${({ theme }) => theme.colors.textWhite};
	}
`;
const Footer = () => {
	return (
		<FooterStyled>
			<div className="section">
				<p>Source de données</p>
				<div className="image">
					<img src={logoTDM} alt="logo TheMovieDB" />
				</div>
			</div>

			<p className="copyright">
				developed by <br></br>  <span>Mwanya Christian</span> <br></br>
				<a className="link"
					href="https://github.com/ChrisMwanya"
					target="_blank"
					rel="noreferrer">
					<i class="fab fa-github"></i>
				</a> 
				<a className="link" href="https://www.linkedin.com/in/christianmwanya/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin-in"></i></a> 
				<a className="link" href="https://twitter.com/MwanyaChristian" target="_blank" rel="noreferrer"><i class="fab fa-twitter"></i></a>
			</p>
		</FooterStyled>
	);
};
export default Footer;
