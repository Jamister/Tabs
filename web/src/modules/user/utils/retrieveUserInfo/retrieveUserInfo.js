export const retrieveUserInfo = (info) => {
    function returnInfo(user) {
        return user[info] || '';
    }

    function retrieveUserData() {
        const auth_object = localStorage.getItem('auth') || '{}';
        const auth = JSON.parse(auth_object);
        const user = auth?.user || {};
        return returnInfo(user);
    }

    return retrieveUserData();
};
