const ADD_REVIEW = 'ADD-REVIEW';

// Хранилище - управляет состоянием
const store = {
    // Состояние на основание которого строиться приложение
    _state: {
        booksListPage: {
            books: [
                { name: "Книга 1", author: "Автор 1", id: "1" },
                { name: "Книга 2", author: "Автор 2", id: "2" },
                { name: "Книга 3", author: "Автор 3", id: "3" },
            ],
        },
        bookPage: {
            book: { name: "Книга 1", author: "Автор 1", id: "1" },
            reviews: [
                { user: "Пользователь 1", message: "Отзыв о книге 1", rate: "5", id: "1" },
                { user: "Пользователь 2", message: "Отзыв о книге 1", rate: "4", id: "2" },
                { user: "Пользователь 3", message: "Отзыв о книге 1", rate: "5", id: "3" },
            ],
        },
        authorsListPage: {
            authors: [
                { author: "Автор 1", countBooks: "11", id: "1" },
                { author: "Автор 2", countBooks: "13", id: "2" },
                { author: "Автор 3", countBooks: "8", id: "3" },
            ],        
        },
    },
    getState() {
        return this._state;
    },
 
    // Фунция обработчик по умолчанию
    _callSubscriber() {
        console.log('State was changed!')
    },
    // Функция которая подписывает обработчики, которые вызываются при изменение состояния
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    // Функция запускающая различные изменеия состояния приложения
    dispatch(action) { // {type; 'ADD-REVIEW'}
        if(action.type === ADD_REVIEW) { // добавление отзыва в часности
            const newReview = { 
                user: "Пользователь Admin",
                message: action.message,
                rate: action.rate,
                id: this._state.bookPage.reviews.length + 1 };
            
            this._state.bookPage.reviews.push(newReview);
    
            this._callSubscriber();            
        }
    },
}

// Функция создания action для dispatch
export const addReviewActionCreator = (message, rate) => {
    return {
        type: ADD_REVIEW,
        message,
        rate,
    }
}

export default store;

window.store = store;