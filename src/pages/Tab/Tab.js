import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

// Components
import Container from 'components/Container';
import NavigationBar from 'components/NavigationBar';
import ActionsSubBar from 'components/ActionsSubBar';
import Header from 'components/Header';
import Parts from 'components/Parts';

// Functions
import { mapKeysToActions } from 'functions/mapKeysToActions';

// CSS
import * as s from './Tab.style';

const Tab = () => {
	const dispatch = useDispatch();
	const parts = useSelector(store => store.tab.parts, shallowEqual);
	const all_ids = parts.all_ids || [];
	const by_id = parts.by_id || {};

	function handleKeyDown(e) {
		const action = mapKeysToActions(e.keyCode);
		dispatch(action);
	}

	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
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
							part_id={part_id}
							part_type={by_id[part_id].type}
							data-test="parts-render"
						/>
					))}
				</s.PaddingWrapper>
			</Container>
		</s.PageWrapper>
	);
};

export default Tab;
