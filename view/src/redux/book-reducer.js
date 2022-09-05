const ADD_REVIEW = 'ADD-REVIEW';

// Начальное состояние приложения
const initialState = {
    book: { name: "Книга", author: "Автор", description: "Хорошая книга", id: "1" },
    reviews: [
        { user: "Пользователь 1", message: "Отзыв о книге 1", rate: "5", id: "1" },
        { user: "Пользователь 2", message: "Отзыв о книге 1", rate: "4", id: "2" },
        { user: "Пользователь 3", message: "Отзыв о книге 1", rate: "5", id: "3" },
    ],
};

// Функция запускающая различные изменеия состояния приложения
const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_REVIEW: // добавление отзыва в часности
            const newReview = { 
                user: "Пользователь Admin",
                message: action.message,
                rate: action.rate,
                id: state.reviews.length + 1
            };
            
            return {
                ...state,
                reviews: [
                    ...state.reviews,
                    newReview
                ]
            }
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