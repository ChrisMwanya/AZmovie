import { createGlobalStyle } from "styled-components";



const GlobleStyle = createGlobalStyle`

html{
    height: 100%;
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
}

*{
    margin :0;
    padding:0;
    box-sizing:border-box;
    
}

ul {  
     list-style:none;
     padding: 0;
     margin: 0;
   }


li{
    list-style :none;
}

a{
    text-decoration :none;
}
`;
export default GlobleStyle;
