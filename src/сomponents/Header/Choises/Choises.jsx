import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetcHolidays} from '../../../store/holidaysSlice';
import { fetchText } from '../../../store/textSlice';
import { fetchImage } from '../../../store/imageSlice';
import { NavLink, useParams } from 'react-router-dom';
import style from './Choises.module.css';



const Choises = () => {
    const [isOpenChoises, setIsOpenChoises] = useState(false);
    const { holidays, loading } = useSelector(state => state.holidays);
    const dispatch = useDispatch();
    const { holiday } = useParams();

    const toggleChoises = () => {
        if (loading !== 'success') return;
        setIsOpenChoises(!isOpenChoises)
    }

    useEffect(() => {
        dispatch(fetcHolidays());
        if (holiday) {
            dispatch(fetchText(holiday))
            dispatch(fetchImage(holiday))
        }
    }, [dispatch, holiday])


    return(
        <div className={style.wrapper}>
            <button className={style.button} onClick={toggleChoises}>
                {loading !== 'success' ? 'Загрузка...' : 
                    holidays[holiday] || 'Выбрать праздник'}</button>
            { isOpenChoises && (
                    <ul className={style.list}>
                        {Object.entries(holidays).map(item => (
                            <li 
                            className={style.item} 
                            key={item[0]}
                            onClick={() => {
                                toggleChoises();
                            }}
                            >
                            <NavLink 
                                to={`card/${item[0]}`}
                                className={({isActive}) => (isActive ? style.LinkActive : '')}
                                >{item[1]}</NavLink>
                            </li>
                        ))}
                    </ul>
                )
            }
        </div>
    )
};

export default Choises;