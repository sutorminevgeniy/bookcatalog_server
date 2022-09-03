const initialState = {
    authors: [
        { author: "Автор 1", countBooks: "11", id: "1" },
        { author: "Автор 2", countBooks: "13", id: "2" },
        { author: "Автор 3", countBooks: "8", id: "3" },
    ],        
};

const authorListReducer = (state = initialState, action) => {
    return state
}

export default authorListReducer;