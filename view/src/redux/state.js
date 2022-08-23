const state = {
    booksListPage: {
        books: [
            { name: "Книга 1", author: "Автор 1", id: "1" },
            { name: "Книга 2", author: "Автор 2", id: "2" },
            { name: "Книга 3", author: "Автор 3", id: "3" },
        ],
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
};

export default state;