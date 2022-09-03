const ADD_BOOK = 'ADD-BOOK';

const initialState = {
    books: [
        { name: "Книга 1", author: "Автор 1", id: "1" },
        { name: "Книга 2", author: "Автор 2", id: "2" },
        { name: "Книга 3", author: "Автор 3", id: "3" },
    ],
};

const booksListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOK:
            const newBook = { 
                name: action.name,
                author: action.author,
                description: action.description,
                id: state.books.length + 1 };
            
            state.books.push(newBook);
            
            return state
        default:    
            return state
    } 
}

// Функции создания action для dispatch
export const addBookCreator = (name, author, description) => {
    return {
        type: ADD_BOOK,
        name,
        author,
        description,
    }
}

export default booksListReducer;