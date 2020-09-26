import validChars from './validChars';

const returnKeyValue = (key, pre_value) => {
    function checkArrows() {
        const arrows = (
            key === 'ArrowUp'
            || key === 'ArrowDown'
            || key === 'ArrowRight'
            || key === 'ArrowLeft'
            || key === 'Tab'
        );
        return arrows ? 'arrows' : pre_value || '';
    }

    function checkDelete() {
        const is_delete = key === 'Delete';
        return is_delete ? '' : checkArrows();
    }

    function checkBackspace() {
        const is_backspace = key === 'Backspace';
        return is_backspace
            ? pre_value.slice(0, -1)
            : checkDelete();
    }

    function checkValidTabChar() {
        const is_valid_char = validChars
            .some(char => char === key.toLowerCase());
        return is_valid_char
            ? `${pre_value}${key.toLowerCase()}`
            : checkBackspace();
    }

    return checkValidTabChar();
};

export default returnKeyValue;
