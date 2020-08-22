export const lockBody = value => {
    if (!value) {
        document.body.className = '';
        // document.body.style.paddingRight = '0px';
    } else {
        document.body.className = 'modal-open';
        // document.body.style.paddingRight = '16px';
    }
};
