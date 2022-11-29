import { createSelector } from 'reselect';

const getUsersSelector = (state) => {
    return state.usersListPage.users;
};
//  Селектор со сложной логикой на основе простого (для контроля перерисовки при обновлении)
export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true);    
});

export const getPageSize = (state) => {
    return state.usersListPage.pageSize;
};

export const getTotalUserCount = (state) => {
    return state.usersListPage.totalUserCount;
};

export const getCurrentPage = (state) => {
    return state.usersListPage.currentPage;
};

export const getIsFetching = (state) => {
    return state.usersListPage.isFetching;
};

export const getIsChangingAccess = (state) => {
    return state.usersListPage.isChangingAccess;
};