import {createGlobalStyle} from 'styled-components';

const GlobleStyle = createGlobalStyle `

html{
    height: 100%;
    font-family: 'Roboto', sans-serif;
}

*{
    margin :0;
    padding:0;
    box-sizing:border-box;
    
}

li{
    list-style :none;
}
`;
export default GlobleStyle;