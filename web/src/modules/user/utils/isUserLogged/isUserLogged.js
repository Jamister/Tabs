export const isUserLogged = () => {
    function checkLogged(token, user) {
        const validToken = token !== '';
        const validUser = user.external_id !== undefined;
        const isLogged = validToken && validUser;
        return isLogged;
    }

    function retrieveUserData() {
        const auth = JSON.parse(localStorage.getItem('auth'));
        const token = auth?.token || '';
        const user = auth?.user || {};
        return checkLogged(token, user);
    }

    return retrieveUserData();
};
