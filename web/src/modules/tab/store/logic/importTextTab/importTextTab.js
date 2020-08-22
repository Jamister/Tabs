const importTextTab = (state = {}, action = {}) => {
    const tab_text_view = `e|------------------------------|  
B|------------------------------|  
G|------------------------------|  
D|------------------------------|  
A|-5h7-5---5-------5h7--5-------|  
E|-------7---7-3-0--------7-3-0-|  `;

    let tab = tab_text_view;
    const lines_content = {};

    function separateLines() {
        const regex = /\|\|\|\|/gi;
        let match = '';
        const matches = [];
        // eslint-disable-next-line no-cond-assign
        while ((match = regex.exec(tab))) {
            matches.push(match.index);
        }
        const number_of_lines = matches.length;
        return number_of_lines;
    }

    function removeSpaces() {
        tab = tab.replace(/ /g, '');
        return separateLines();
    }

    function removeLineBreaks() {
        tab = tab.replace(/(?:\r\n|\r|\n)/g, '');
        return removeSpaces();
    }

    return removeLineBreaks();
};

export default importTextTab;
