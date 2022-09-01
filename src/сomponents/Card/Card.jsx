import Container from '../Container/Container';
import style from './Card.module.css';
import Felicitation from './Felicitation/Felicitation';
import ImageCard from './ImageCard/ImageCard';
import CardBG from './../../img/card-bg.jpeg';

const Card = () => (
    <main className={style.main}>
        <Container>
        <div className={style.card}>
                <div className={style.wrapper}>
                    <div className={style.image}>
                        <ImageCard img={CardBG}/>
                        <Felicitation />
                    </div>
                </div>
            </div>
        </Container>
    </main>
);

export default Card;


