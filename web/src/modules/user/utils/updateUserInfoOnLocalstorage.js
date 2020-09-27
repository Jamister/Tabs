const updateUserInfoOnLocalstorage = ({ field, value }) => {
    function updateUser() {
        const auth_object = localStorage.getItem('auth') || '{}';
        const auth = JSON.parse(auth_object);
        const user = auth?.user || {};
        const newAuth = {
            ...auth,
            user: {
                ...user,
                [field]: value,
            },
        };
        localStorage.setItem('auth', JSON.stringify(newAuth));
    }

    return updateUser();
};

export default updateUserInfoOnLocalstorage;
