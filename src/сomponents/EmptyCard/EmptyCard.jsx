import style from './EmptyCard.module.css';


const EmptyCard = () => (
    <main className={style.main}>
            <div className={style.card}>
                <p>Выберите повод для поздравления!</p>
            </div>
    </main>
);

export default EmptyCard;


