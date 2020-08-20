import { bindActionCreators } from 'redux';
import * as tabActions from 'modules/tab/store/actions';

const actions = {
    ...tabActions,
};

export const buildMapStateToProps = (props, fields = null) => {
    if (fields === null) {
        return ({
            tab: props.tab,
        });
    }

    return fields.reduce((result, current) => ({
        ...result,
        [current]: { ...props[current] },
    }), {});
};

export const buildmapDispatchToProps = dispatch => (
    bindActionCreators(actions, dispatch)
);

export const detailedmapDispatchToProps = (dispatch, funcs) => {
    const only_funcs = Object.keys(actions)
        .filter(a => funcs.filter(f => f === a).length > 0)
        .reduce((result, current) => ({
            ...result,
            [current]: actions[current],
        }), {});

    return {
        dispatch,
        ...bindActionCreators(only_funcs, dispatch),
    };
};
