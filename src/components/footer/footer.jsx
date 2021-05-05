import styled from "styled-components";
import SectionCategorie from "./section/sectionCategorie";

const FooterStyled = styled.footer`
	background: #000;
    padding: 4px;	
	.section {        
		display: flex;
		justify-content: space-around;
		align-items: center;     
	}
    .copyright{

            text-align: center;
            color: ${({ theme }) => theme.colors.textWhite};
        }
`;
const Footer = () => {
	return (
		<FooterStyled>
			<div className="section">
				<SectionCategorie />
				<SectionCategorie />
                <SectionCategorie />
                
			</div>
            <hr/>
            <p className="copyright">By MwanyaChristian</p>
            
            
		</FooterStyled>
	);
};
export default Footer;
