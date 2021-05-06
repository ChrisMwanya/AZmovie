import {Carousel} from '3d-react-carousal'
import imageFond from "./../../images/imageFilm.jpeg";

const slideCards=[<img  src={imageFond} alt="1" />,
<img  src={imageFond} alt="2" />  ,
<img  src={imageFond} alt="3" />  ,
<img  src={imageFond} alt="4" />  ,
<img src={imageFond} alt="5" /> ]
const Slide = (props) => {
    return(
        <Carousel slides={slideCards} autoplay={true} interval={1000}/>
    )
}

export default Slide;