import styled from "styled-components";
import TitleSection from './sectiontitle'
import SectionContent from "./sectionContent";

const SectionFooterStyled = styled.section`
	margin-right : 10px;
`;

const SectionMenu = () => {
    return(
        <SectionFooterStyled>
		<TitleSection>Menu</TitleSection>
		<hr />
		<SectionContent>
			<ul>
				<li>Home</li>
				<li>Films</li>
				<li>Séries</li>
				
			</ul>
		</SectionContent>
	</SectionFooterStyled>
    )

};

export default SectionMenu;