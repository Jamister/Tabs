import moveSelectedNote from '../moveSelectedNote';

// test('should not crash', () => {
//     expect(moveSelectedNote()).toStrictEqual({
//         selected_note: { p: 1, b: 1, c: 1, l: 1 },
//     });
//     expect(moveSelectedNote(null, null)).toStrictEqual({
//         selected_note: { p: 1, b: 1, c: 1, l: 1 },
//     });
// });

describe('Moves', () => {
    const selected_note = { p: '1', b: '1', c: '2', l: '3' };
    const columns = {
        allIds: [
            '1-1-1',
            '1-1-2',
            '1-1-3',
            '1-1-4',
        ],
        byId: {
            '1-1-1': {},
            '1-1-2': {},
            '1-1-3': {},
            '1-1-4': {},
        },
    };
    const lines = [1, 2, 3, 4, 5, 6];
    const state = {
        selected_note,
        columns,
        lines,
    };

    const actionLeft = {
        key: 'ArrowLeft',
        event: { preventDefault: () => {} },
    };
    it('should move left', () => {
        expect(moveSelectedNote(state, actionLeft)).toStrictEqual({
            selected_note: { p: '1', b: '1', c: '1', l: '3' },
            columns,
            lines,
        });
    });

    const actionRight = {
        key: 'ArrowRight',
        event: { preventDefault: () => {} },
    };
    it('should move right', () => {
        expect(moveSelectedNote(state, actionRight)).toStrictEqual({
            selected_note: { p: '1', b: '1', c: '3', l: '3' },
            columns,
            lines,
        });
    });

    const actionTop = {
        key: 'ArrowUp',
        event: { preventDefault: () => {} },
    };
    it('should move top', () => {
        expect(moveSelectedNote(state, actionTop)).toStrictEqual({
            selected_note: { p: '1', b: '1', c: '2', l: '2' },
            columns,
            lines,
        });
    });

    const actionBottom = {
        key: 'ArrowDown',
        event: { preventDefault: () => {} },
    };
    it('should move bottom', () => {
        expect(moveSelectedNote(state, actionBottom)).toStrictEqual({
            selected_note: { p: '1', b: '1', c: '2', l: '4' },
            columns,
            lines,
        });
    });
});
