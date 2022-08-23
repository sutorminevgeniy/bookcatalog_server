import style from './style.module.css';

import Item from './Item';

const ReviewsList = () => {
    const reviewsData = [
      { user: "Пользователь 1", message: "Отзыв о книге 1", rate: "5", id: "1" },
      { user: "Пользователь 2", message: "Отзыв о книге 1", rate: "4", id: "2" },,
      { user: "Пользователь 3", message: "Отзыв о книге 1", rate: "5", id: "3" },,
    ];
  
    const reviewsElements = reviewsData.map( 
      row => <Item user={row.user} message={row.message} rate={row.rate} key={row.id} />
    );
  
    return (
        <div className={style.reviews}>
            <h3>Отзывы</h3>
            {reviewsElements}
        </div>
    );
};

export default ReviewsList;