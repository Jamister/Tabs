import selectNote from '../selectNote';
import tab from '../../../store';

describe('selectNote', () => {
    it('should select note p1-b3-c9-2', () => {
        const action = {
            note: {
                p: 'p1',
                b: 'b3',
                c: 'c9',
                l: '2',
            },
        };
        const result = selectNote(tab, action);
        expect(result.selected_note).toStrictEqual({
            p: 'p1',
            b: 'b3',
            c: 'c9',
            l: '2',
        });
    });
});
