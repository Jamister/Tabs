import moment from 'moment';

// export const formatDate = date => {
//     const language = window.mssp.application.language || 'ptbr';
//     return language === 'ptbr'
//         ? moment(date).format('DD [de] MMM [de] YYYY')
//         : moment(date).format('MMM DD, YYYY');
// };

// export const formatDateShort = date => {
//     const language = window.mssp.application.language || 'ptbr';
//     return language === 'ptbr' ? moment(date).format('DD MMM') : moment(date).format('MMM DD');
// };

export const getDateNow = () => moment().format();

export const getDateDiffFromNow = (date, measurement) => (
    moment(date).diff(moment(), measurement)
);
