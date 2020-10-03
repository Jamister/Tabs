// Actions
import {
    moveSelectedNote,
    startUpdatingNote,
    clearSelectedNote,
} from '../store/actions';

const mapKeysToActions = (event, key) => {
    const arrows = (
        key === 'ArrowUp'
        || key === 'ArrowDown'
        || key === 'ArrowRight'
        || key === 'ArrowLeft'
        || key === 'Tab'
    );
    if (arrows) {
        return moveSelectedNote({ event, key });
    }

    const esc = key === 'Escape';
    if (esc) {
        return clearSelectedNote();
    }

    return startUpdatingNote({ key });
};

export default mapKeysToActions;
