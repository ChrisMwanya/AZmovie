import styled from "styled-components";
import { useState, useEffect } from "react";
import CardMovie from "../../cards/cardmovie";
import Pagination from "../../pagination/pagination";
import PageLoader from "../../loader/pageLoader";

const SectionStyled = styled.section`
	margin-top: 1rem;
	width: 100%;

	.buttons {
		border-bottom: 2px solid ${({ theme }) => theme.colors.secondMain};
	}
`;
const CardContainerStyled = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;

const SectionAllSeries = () => {
	const [Series, setSeries] = useState([]);
	const [loader, setLoader] = useState(true);
	const [actualPage, setActualPage] = useState(1);
	const [totalPages, setTotalPages] = useState();

	useEffect(() => {
		setLoader(true);
		fetch(
			`https://api.themoviedb.org/3/tv/popular?api_key=9320cf81bdc9ea7daa7bd98066b669de&language=fr&page=${actualPage}`
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				let dataMapped = data.results.map(
					({
						id,
						name,
						release_date,
						poster_path,
						popularity,
						vote_average,
					}) => {
						return {
							id,
							name,
							release_date,
							poster_path,
							popularity,
							vote_average,
						};
					}
				);
				setSeries(dataMapped);
				setLoader(false);
				setTotalPages(data.total_pages);
				window.scrollTo({ top: 0, behavior: "smooth" });
			});
	}, [actualPage]);

	const handleClickNextPage = () => {
		if (actualPage < totalPages) {
			setActualPage(actualPage + 1);
		}
	};
	const handleClickPrevPage = () => {
		if (actualPage > 1) {
			setActualPage(actualPage - 1);
		}
	};

	return (
		<SectionStyled>
			{loader ? (
				<PageLoader />
			) : (
				<div>
					<CardContainerStyled>
						{Series.map((serie) => {
							return (
								<CardMovie
									popularity={serie.popularity}
									vote_average={serie.vote_average}
									urlImage={serie.poster_path}
									key={serie.id}
									date={serie.release_date}
									type="tv"
									id={serie.id}>
									{serie.name}
								</CardMovie>
							);
						})}
					</CardContainerStyled>
					<Pagination
						onClickNextPage={handleClickNextPage}
						onClickPrevPage={handleClickPrevPage}
						actualPage={actualPage}
						totalPages={totalPages}
					/>
				</div>
			)}
		</SectionStyled>
	);
};

export default SectionAllSeries;
