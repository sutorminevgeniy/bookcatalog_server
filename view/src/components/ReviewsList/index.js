import style from './style.module.css';

import Item from './Item';

const ReviewsList = (props) => {
    const reviewsElements = props.state.map( 
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