import styled from "styled-components";
import logoTDM from "./../../images/TheMovieDB.svg";

const FooterStyled = styled.footer`
	background: #000;
	padding: 1% 10%;
	width: 100%;	
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;

    .section {	
		 margin-right: 1rem; 
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		color: ${({ theme }) => theme.colors.textWhite};
		height: 15vh;
		
	}

	p{
		margin-bottom: .2rem;
	}
	.section-title{
		font-weight: bold;
		font-size: 1.2rem;	
		
	}

	.section-content{
		display: flex;
		flex-direction: column;
		justify-content:center;
		align-items:flex-start;
		font-size: .9rem;
	}

	.link{
		display: inline-block;
		margin-right: 4px;
		color:${({ theme }) => theme.colors.textWhite};
		font-size: 1.2rem;
	}
	a{
		text-decoration: none;
		color: ${({ theme }) => theme.colors.textWhite};
	}
	.link:hover, p:hover{
		transform:scale(1.05);
		
	}
    .image {
		width:30%;
		
		
	}

	img {
		display: block;
		width: 100%;
		
	}
`;

const Footer = () =>{

    return (
        <FooterStyled>
            <div className="section">
                <div className="section-title" >Source</div>
                <div className="image"><img className="img" src={logoTDM} alt="logo TheMovieDB" /></div>
            </div>
            <div className="section">
                <div  className="section-title">Copyright</div>
                <div className="section-content">
                    AZ Films &copy;2021
                </div>
            </div>
            <div className="section">
                <div className="section-title">Contact</div>
                <div className="section-content">
					<p><i className="fas fa-envelope"></i> <a href="mailto:cmwanya@gmail.com:">cmwanya@gmail.com</a></p>
					<p><i className="fas fa-phone"></i> <a href="tel: +243 90 69 20 283">+234 90 69 20 283</a></p>
					<p><i className="fas fa-map-marker-alt"></i> Kinshasa, RDC</p>
                </div>
            </div>
            <div className="section">
                <div  className="section-title">Suivez-moi</div>
                <div className="section-content">
					<p> <a className="link"
					href="https://github.com/ChrisMwanya"
					target="_blank"
					rel="noreferrer">
					<i class="fab fa-github"></i>
				</a> 
				<a className="link" href="https://www.linkedin.com/in/christianmwanya/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin-in"></i></a> 
				<a className="link" href="https://twitter.com/MwanyaChristian" target="_blank" rel="noreferrer"><i class="fab fa-twitter"></i></a></p>
                </div>
            </div>
        </FooterStyled>
    )

}

export default Footer
