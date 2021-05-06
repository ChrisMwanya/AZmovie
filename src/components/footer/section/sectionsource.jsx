import styled from "styled-components";
import TitleSection from './sectiontitle'
import SectionContent from "./sectionContent";
import logoDBmovie from "./../../../images/TheMovieDB.svg"

const SectionFooterStyled = styled.section`
	margin-right : 10px;
`;

const SectionSource = () => {
    return(
        <SectionFooterStyled>
		<TitleSection>Source</TitleSection>
		<hr />
		<SectionContent>
            <img src={logoDBmovie} alt="logo Dbmovie" />
		</SectionContent>
	</SectionFooterStyled>
    )

};

export default SectionSource;