import { useContext } from "react";
import { imgContext } from "../../../context/imgContext";
import CardBG from '../../../img/card-bg.jpeg';


const ImageCard = (props) => {
    const {urlImg} = useContext(imgContext)
    console.log(urlImg)
    return (
        <img src={urlImg || CardBG} alt='Фон открытки' width={840} height={520}/>
    )
};

export default ImageCard

