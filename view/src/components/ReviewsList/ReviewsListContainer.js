import {connect} from 'react-redux';

import ReviewsList from './ReviewsList';

import {addReviewCreator} from '../../redux/book-reducer';


const mapStateToProps = (state) => {
  return {
    reviews: state.bookPage.reviews
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addReview: (message, rate) => {
      const action = addReviewCreator(message, rate);
      dispatch(action);
    }
  };
}


const ReviewsListContainer = connect(mapStateToProps, mapDispatchToProps)(ReviewsList);


export default ReviewsListContainer;