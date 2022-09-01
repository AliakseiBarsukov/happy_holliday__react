import { useState } from 'react';
import style from './Choises.module.css';

const holidays = {
    newyear : 'Новый год',
    birthdayWoman : 'День рождения  Ж',
    birthdayMan : 'День рождения  М',
    womanDay : '8 марта',
    knowledgeday : 'День знаний',
}

const Choises = () => {
    const [isOpenChoises, setIsOpenChoises] = useState(false);
    const [holiday, setHoliday] = useState('Выбрать праздник')

    const toggleChoises = () => {
        setIsOpenChoises(!isOpenChoises)
    }

    const chengcHoliday = title => {
        setHoliday(title);
        toggleChoises()
    }

    return(
        <div className={style.wrapper}>
            <button className={style.button} onClick={toggleChoises}>{holiday}</button>
            { isOpenChoises && (
                    <ul className={style.list}>
                        {Object.entries(holidays).map(item => (
                            <li 
                            className={style.item} 
                            key={item[0]}
                            onClick={() => {
                                chengcHoliday(item[1])
                            }}
                            >
                            {item[1]}
                            </li>
                        ))}
                    </ul>
                )
            }
        </div>
    )
};

export default Choises;