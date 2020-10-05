// Actions
import * as actions from '../store/actions';

const mapKeysToActions = (event, key) => {
    const arrows = (
        key === 'ArrowUp'
        || key === 'ArrowDown'
        || key === 'ArrowRight'
        || key === 'ArrowLeft'
        || key === 'Tab'
    );
    if (arrows) {
        return actions.moveSelectedNote({ event, key });
    }

    const plus = key === '+';
    if (plus) {
        return actions.addColumn();
    }

    const esc = key === 'Escape';
    if (esc) {
        return actions.clearSelectedNote();
    }

    return actions.startUpdatingNote({ key });
};

export default mapKeysToActions;
