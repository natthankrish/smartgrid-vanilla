export const validateUser = () => {
    return localStorage.getItem('isLoggedIn') === 'true';
};