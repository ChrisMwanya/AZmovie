import { ReactSearchAutocomplete } from "react-search-autocomplete";

const SearchInput = () => {
	const items = [
		{
			id: 0,
			name: "Cobol",
		},
		{
			id: 1,
			name: "JavaScript",
		},
		{
			id: 2,
			name: "Basic",
		},
		{
			id: 3,
			name: "PHP",
		},
		{
			id: 4,
			name: "Java",
		},
	];

    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
      }
    
      const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
      }
    
      const handleOnSelect = (item) => {
        // the item selected
        console.log(item)
      }
    
      const handleOnFocus = () => {
        console.log('Focused')
      }

	return (
		<ReactSearchAutocomplete

        onSearch={(e,name)=>handleOnSearch(e.target.value,name)}
        onHover={handleOnHover}
        onSelect={handleOnSelect}
        onFocus={handleOnFocus}
        autoFocus
			items={items}
			fuseOptions={{
				shouldSort: true,
				threshold: 0.6,
				location: 0,
				distance: 100,
				maxPatternLength: 32,
				minMatchCharLength: 1,
				keys: ["id"],
			}}
			placeholder="Searchest"
			resultStringKeyName="name"
			styling={{
                position:"absolute",
				width: "40vw",
				height: "44px",
				border: "1px solid white",
				borderRadius: "24px",
				backgroundColor: "white",
				boxShadow: "rgba(32, 33, 36, 0.28) 0px 1px 6px 0px",
				hoverBackgroundColor: "#eee",
				color: "#212121",
				fontSize: "1rem",
				fontFamily: "Roboto",
				iconColor: "red",
				lineColor: "rgb(232, 234, 237)",
				placeholderColor: "grey",
				clearIconMargin: "3px 14px 0 0",
				searchIconMargin: "0 0 0 16px",
			}}
		/>
	);
};

export default SearchInput;
