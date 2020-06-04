import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

// CSS
import * as s from './Tab.style';

// Components
import Container from '../../components/Container';
import NavigationBar from '../../components/NavigationBar';
import ActionsSubBar from '../../components/ActionsSubBar';
import Header from '../../components/Header';
import Parts from '../../components/Parts';

// Actions
import { clearPressedKey } from '../../store/tab/actions';

// Functions
import { mapKeysToActions } from '../../functions/mapKeysToActions';

const Tab = () => {
	const dispatch = useDispatch();
	const parts = useSelector(store => store.tab.parts, shallowEqual);
	const all_ids = parts.all_ids || [];
	const by_id = parts.by_id || {};

	function handleKeyDown(e) {
		const action = mapKeysToActions(e.keyCode);
		dispatch(action);
	}

	function handleKeyUp() {
		const action = clearPressedKey();
		dispatch(action);
	}

	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);
		window.addEventListener('keyup', handleKeyUp);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
			window.removeEventListener('keyup', handleKeyUp);
		};
	}, [handleKeyDown]);

	return (
		<s.PageWrapper>
			<NavigationBar />
			<ActionsSubBar />
			<Container>
				<Header />
				<s.PaddingWrapper data-testid="wrapper">
					{all_ids.map(part_id => (
						<Parts
							key={part_id}
							data-test="parts-render"
							part={by_id[part_id]}
						/>
					))}
				</s.PaddingWrapper>
			</Container>
		</s.PageWrapper>
	);
};

export default Tab;
