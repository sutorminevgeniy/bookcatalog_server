const ADD_REVIEW = 'ADD-REVIEW';

const initialState = {
    book: { name: "Книга 1", author: "Автор 1", description: "", id: "1" },
    reviews: [
        { user: "Пользователь 1", message: "Отзыв о книге 1", rate: "5", id: "1" },
        { user: "Пользователь 2", message: "Отзыв о книге 1", rate: "4", id: "2" },
        { user: "Пользователь 3", message: "Отзыв о книге 1", rate: "5", id: "3" },
    ],
};

const bookReducer = (state = initialState, action) => {
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