// Actions
import {
    moveSelectedNote,
    startUpdatingNote,
    clearSelectNote,
} from '../store/actions';

const mapKeysToActions = (key) => {
    const arrows = (
        key === 'ArrowUp'
        || key === 'ArrowDown'
        || key === 'ArrowRight'
        || key === 'ArrowLeft'
        || key === 'Tab'
    );
    if (arrows) {
        return moveSelectedNote(key);
    }

    const esc = key === 'Escape';
    if (esc) {
        return clearSelectNote();
    }

    return startUpdatingNote(key);
};

export default mapKeysToActions;
