import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

// CSS
import { Row, Col } from 'antd';
import * as s from './Tab.style';

// Components
import Container from '../../components/Container';
import NavigationBar from '../../components/NavigationBar';
import Header from '../../components/Header';
import Part from '../../components/Part';

// Actions
import { clearPressedKey } from '../../store/tab/actions';

// Functions
import { mapKeysToActions } from '../../functions/mapKeysToActions';

const Tab = () => {
	const dispatch = useDispatch();
	const parts = useSelector(store => store.tab.parts, shallowEqual);
	const all_ids = parts.all_ids || [];

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
			<Container>
				<Row>
					<Col span={24}>
						<Header />
						<s.PaddingWrapper>
							{all_ids.map(p => (
								<Part
									key={p}
									data-test="parts-render"
									part={parts.by_id[p]}
								/>
							))}
						</s.PaddingWrapper>
					</Col>
				</Row>
			</Container>
		</s.PageWrapper>
	);
};

export default Tab;
