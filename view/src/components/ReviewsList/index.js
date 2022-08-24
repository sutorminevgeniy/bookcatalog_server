import style from './style.module.css';

import Item from './Item';
import React from 'react';

const ReviewsList = (props) => {
    const reviewsElements = props.state.map( 
      row => <Item user={row.user} message={row.message} rate={row.rate} key={row.id} />
    );

    const messageElement = React.createRef();
    const rateElement = React.createRef();

    const addReview = () => {
        const message = messageElement.current.value;
        const rate = rateElement.current.value;
        
        alert('Hi!!! ' + message + ' ' + rate);
    };
  
    return (
        <div className={style.reviews}>
            <h3>Отзывы</h3>

            {reviewsElements}

            <div>
                <div>
                    <textarea ref={messageElement}></textarea>
                </div>
                <div>
                    <input ref={rateElement} type="text"></input>
                </div>
                <div>
                    <button onClick={ addReview }>Добавить отзыв</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewsList;