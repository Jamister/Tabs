import validChars from './validChars';

const returnKeyValue = (key = '', preValue) => {
    function checkArrows() {
        const arrows = (
            key === 'ArrowUp'
            || key === 'ArrowDown'
            || key === 'ArrowRight'
            || key === 'ArrowLeft'
            || key === 'Tab'
        );
        return arrows ? 'arrows' : preValue || '';
    }

    function checkDelete() {
        const is_delete = key === 'Delete';
        return is_delete ? '' : checkArrows();
    }

    function checkBackspace() {
        const is_backspace = key === 'Backspace';
        return is_backspace
            ? preValue.slice(0, -1)
            : checkDelete();
    }

    function checkValidTabChar() {
        const isValidChar = validChars
            .some(char => char === key.toLowerCase());
        return isValidChar
            ? `${preValue}${key.toLowerCase()}`
            : checkBackspace();
    }

    return checkValidTabChar();
};

export default returnKeyValue;
