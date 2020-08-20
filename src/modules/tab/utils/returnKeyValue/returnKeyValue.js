export const returnKeyValue = (key_code, pre_value) => {
    switch (key_code) {
    // 0
    case 48: case 96: return `${pre_value}0`;
    // 1
    case 49: case 97: return `${pre_value}1`;
    // 2
    case 50: case 98: return `${pre_value}2`;
    // 3
    case 51: case 99: return `${pre_value}3`;
    // 4
    case 52: case 100: return `${pre_value}4`;
    // 5
    case 53: case 101: return `${pre_value}5`;
    // 6
    case 54: case 102: return `${pre_value}6`;
    // 7
    case 55: case 103: return `${pre_value}7`;
    // 8
    case 56: case 104: return `${pre_value}8`;
    // 9
    case 57: case 105: return `${pre_value}9`;
    // s
    case 83: return `${pre_value}s`;
    // h
    case 72: return `${pre_value}h`;
    // p
    case 80: return `${pre_value}p`;
    // b
    case 66: return `${pre_value}b`;
    // r
    case 82: return `${pre_value}r`;
    // v
    case 86: return `${pre_value}v`;
    // t
    case 84: return `${pre_value}t`;
    // x
    case 88: return `${pre_value}x`;
    // \
    case 226: return `${pre_value}\\`;
    // /
    case 193: return `${pre_value}/`;

    // backspace
    case 8: return pre_value.slice(0, -1);
    // del
    case 46: return '';

    // arrows
    case 37: case 38: case 39: case 40: return 'arrows';

    // default
    default: return pre_value || '';
    }
};
