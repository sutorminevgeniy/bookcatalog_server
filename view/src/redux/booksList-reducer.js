const ADD_BOOK = 'ADD-BOOK';

const booksListReducer = (state, action) => {
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