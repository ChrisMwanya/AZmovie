import styled from "styled-components";
import SectionCategorie from "./section/sectionCategorie";
import SectionMenu from "./section/sectionmenu";
import SectionSource from "./section/sectionsource";

const FooterStyled = styled.footer`
	background: #000;
    padding: 4px;	
	width: 100vw;
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
				<SectionMenu />
                <SectionSource />
                <SectionCategorie />
			</div>
			
            <hr/>
            <p className="copyright">By MwanyaChristian</p>
            
            
		</FooterStyled>
	);
};
export default Footer;
