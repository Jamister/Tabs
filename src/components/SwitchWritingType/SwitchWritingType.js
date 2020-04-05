import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

// CSS
import { Radio } from 'antd';

// Actions
import { userChangedWritingType } from '../../store/tab/actions';

const SwitchWritingType = () => {
	const dispatch = useDispatch();
	const user_is_writing = useSelector(store => store
		.tab.user_is_writing, shallowEqual);

	function switchWriting(e) {
		const writing = e?.target?.value || 'notes';
		const action = userChangedWritingType({ writing });
		dispatch(action);
	}

	return (
		<Radio.Group
			buttonStyle="solid"
			defaultValue={user_is_writing}
			onChange={switchWriting}
		>
			<Radio.Button value="notes">Notes</Radio.Button>
			<Radio.Button value="chords">Chords</Radio.Button>
		</Radio.Group>
	);
};

export default SwitchWritingType;
