export const isError403 = (error) => {
    const errorMessage = error.message || '';
    const notLogged = (
        errorMessage === 'User not found'
        || errorMessage === 'You must be logged in'
    );
    return notLogged;
};

export const clearUserAuth = () => {
    localStorage.setItem('auth', JSON.stringify({}));
    return true;
};
