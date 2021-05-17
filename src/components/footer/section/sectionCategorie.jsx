import styled from "styled-components";
import TitleSection from './sectiontitle'
import SectionContent from "./sectionContent";


const SectionFooterStyled = styled.div`
	margin-right : 10px;

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
			{/* <CategoriesList /> */}
		</SectionContent>
	</SectionFooterStyled>
    )

};

export default SectionCategorie;
