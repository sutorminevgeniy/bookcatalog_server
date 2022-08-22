import style from './style.module.css';

import Item from './Item';

const ReviewsList = () => {
    return (
        <div className={style.reviews}>
            <h3>Отзывы</h3>
            <Item user="Пользователь 1" message="Отзыв о книге 1" rate="5" />            
            <Item user="Пользователь 2" message="Отзыв о книге 2" rate="4" />
        </div>
    );
};

export default ReviewsList;