import styled from "styled-components";
import {useState, useEffect} from "react";

const ContainerStyled= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const UnrollContainerStyled = styled.div`
	border: 1px solid white;
	padding: 10px;
	text-align: right;
	width: 30vw;
	color: white;
	background-color: ${({ theme }) => theme.colors.main};
`;

const InputFieldsStyled = styled.input`
	border-radius: 15px;
	border: 1px solid white;
	padding: 10px;
	text-align: right;
	width: 30vw;
	color: white;
	background-color: ${({ theme }) => theme.colors.main};
	&:focus {
		outline: none;
	}
`;

const InputField = () => {
    const [allMovieAndTv,setAllMovieAndTv] = useState([

    ]);
    const [movieAndTv,setMovieAndTv]= useState([]);

    useEffect(() => {
        // fetch().then((response) => {
        //     return response.json()
        // }).then((data) => {
        //     setAllMovieAndTv(data)
        // })

        setAllMovieAndTv([
            {name: 'Christian'},{name: 'Christopher'},{name: 'Merdie'},{name: 'Emmi'}
        ])
    },[])

    const searchResults = (e) => {
        if(e.target.value === "CHRISTIAN"){
            setMovieAndTv([]);
        }else{
            const results = allMovieAndTv.filter(item =>{
                return item.name.toUpperCase().includes(e.target.value.toUpperCase())
            })
            setMovieAndTv(results)
        }
    
    }

	return (
		<ContainerStyled>
			<InputFieldsStyled type="text" placeholder="Recherche" onChange={searchResults} />
            {/* <UnrollContainerStyled>
                <ul>
                    {movieAndTv.map((item) =>{
                        return <li>{item.name}</li>
                    })}
                </ul>
            </UnrollContainerStyled> */}

		</ContainerStyled>
	);
};

export default InputField;
