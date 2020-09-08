export const isUserLogged = () => {
    function checkLogged(token, user) {
        const validToken = token !== '';
        const validUser = user.email !== undefined;
        const isLogged = validToken && validUser;
        return isLogged;
    }

    function retrieveUserData() {
        const auth_object = localStorage.getItem('auth') || '{}';
        const auth = JSON.parse(auth_object);
        const token = auth?.token || '';
        const user = auth?.user || {};
        return checkLogged(token, user);
    }

    return retrieveUserData();
};
