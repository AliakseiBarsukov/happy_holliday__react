import Container from '../Container/Container';
import style from './Card.module.css';
import Felicitation from './Felicitation/Felicitation';
import ImageCard from './ImageCard/ImageCard';

const Card = () => (
    <main className={style.main}>
        <Container>
        <div className={style.card}>
                <div className={style.wrapper}>
                    <div className={style.image}>
                        <ImageCard />
                        <Felicitation />
                    </div>
                </div>
            </div>
        </Container>
    </main>
);

export default Card;


