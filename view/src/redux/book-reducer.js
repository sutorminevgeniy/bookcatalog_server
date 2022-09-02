const ADD_REVIEW = 'ADD-REVIEW';

const bookReducer = (state, action) => {
    switch (action.type) {
        case ADD_REVIEW: // добавление отзыва в часности
            const newReview = { 
                user: "Пользователь Admin",
                message: action.message,
                rate: action.rate,
                id: state.reviews.length + 1 };
            
            state.reviews.push(newReview);
            
            return state
        default:    
            return state
    } 
}

// Функции создания action для dispatch
export const addReviewCreator = (message, rate) => {
    return {
        type: ADD_REVIEW,
        message,
        rate,
    }
}

export default bookReducer;