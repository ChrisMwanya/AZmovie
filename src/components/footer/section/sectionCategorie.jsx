import styled from "styled-components";
import TitleSection from './sectiontitle'
import SectionContent from "./sectionContent";

const SectionFooterStyled = styled.section`
	margin-right : 10px;
	height: 30vh;
`;

const SectionCategorie = () => {
    return(
        <SectionFooterStyled>
		<TitleSection>Categorie</TitleSection>
		<hr />
		<SectionContent>
			<ul>
				<li>Action</li>
				<li>Horreur</li>
				<li>Comedie</li>
				<li>Fiction</li> 
                <li>Drama</li>
                <li>Documenataire</li>
			</ul>
		</SectionContent>
	</SectionFooterStyled>
    )

};

export default SectionCategorie;
