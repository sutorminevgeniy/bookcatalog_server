import axios from 'axios';

const instAxios = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '3800a16a-e2c0-4336-8594-268b9cc94411'
    },
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instAxios.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    getUser(id) {
        return instAxios.get(`profile/${id}`)
            .then(response => response.data);
    },

    getMe() {
        return instAxios.get(`auth/me`)
            .then(response => response.data);
    },
    login(email, password, rememberMe=false) {
        return instAxios.post(`auth/login`, {email, password, rememberMe})
            .then(response => response.data);
    },
    logout() {
        return instAxios.delete(`auth/login`)
            .then(response => response.data);
    },

    postAccess(id) {
        return instAxios.post(`follow/${id}`)
            .then(response => response.data);
    },

    deleteAccess(id) {
        return instAxios.delete(`follow/${id}`)
            .then(response => response.data);
    },
};
