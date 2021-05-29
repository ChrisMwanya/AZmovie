import styled from "styled-components";
import SectionAllSeries from "./sections/sectionallseries";
import CategoriesList from "../categories/categories";
import { useState } from "react";
import { motion } from "framer-motion";
import SeriesbyCategory from "./sections/seriesbycategory";

const PageSerie = styled(motion.div)`
	padding: 1rem;
	margin-top: 2rem;
	width: 100vw;
	background: ${({ theme }) => theme.colors.main};
	overflow-x: hidden;
`;

const pageVariant = {
	in: { opacity: 1, x: 0 },
	out: { opacity: 0, x: "200vw" },
};

const pageTransition = {
	duration: 1,
	type:"spring",
	stiness: 50,

};

const Serie = () => {
	const [idCategory, setCategory] = useState();
	const [showCategory, setShowCategory] = useState(false);
	const handleClick = (id) => {
		setCategory(id);
		setShowCategory(true);
	};
	const change = (e) => {
		e.preventDefault();
		setShowCategory(false);
	};
	return (
		<PageSerie
		initial="out"
		animate="in"
		exit="out"
		variants={pageVariant}
		transition={pageTransition}>
			<CategoriesList type="tv" change={change} onClick={handleClick} />
			{showCategory ? (
				<SeriesbyCategory id={idCategory} />
			) : (
				<SectionAllSeries />
			)}
		</PageSerie>
	);
};

export default Serie;
