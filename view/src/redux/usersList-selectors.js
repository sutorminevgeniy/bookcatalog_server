export const getUsers = (state) => {
    return state.usersListPage.users;
};

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