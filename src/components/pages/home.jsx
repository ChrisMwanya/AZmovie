import styled from "styled-components";
import Main from "../mains/main";
import { Route } from "react-router-dom";
import { motion } from "framer-motion";
const HomeStyled = styled(motion.section)`
	padding: 0.4rem 2rem;
	background: ${({ theme }) => theme.colors.main};
	overflow-x: hidden;
`;

const pageVariant = {
	in: { opacity: 1 },
	out: { opacity: 0 },
};

const pageTransition = {
	type: "spring",
	stiness: 50,
};
const Home = () => {
	return (
		<HomeStyled initial="out"
		animate="in"
		exit="out"
		variants={pageVariant}
		transition={pageTransition}>
			<Route path="/home" component={Main} />
		</HomeStyled>
	);
};

export default Home;
