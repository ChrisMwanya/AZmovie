import styled from "styled-components";



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
                            
			</div>		
            
            <p className="copyright">By MwanyaChristian</p>
            
            
		</FooterStyled>
	);
};
export default Footer;
