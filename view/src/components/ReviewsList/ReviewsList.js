import React from 'react';

import style from './ReviewsList.module.css';

import ReviewsListItem from './ReviewsListItem';

import {addReviewCreator} from '../../redux/book-reducer';

const ReviewsList = (props) => {
    const messageElement = React.createRef();
    const rateElement = React.createRef();

    const addReview = () => {
        const message = messageElement.current.value;
        const rate = rateElement.current.value;

        const action = addReviewCreator(message, rate);

        props.dispatch(action);

        messageElement.current.value = '';
        rateElement.current.value = '';
    };
  
    const reviewsElements = props.state.map( 
      row => <ReviewsListItem user={row.user} message={row.message} rate={row.rate} key={row.id} />
    );

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
                    <button onClick={ addReview }>Оставить отзыв</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewsList;