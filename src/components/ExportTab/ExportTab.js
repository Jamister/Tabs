import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

// CSS
import CSSModules from 'react-css-modules';
import styles from './style.module.sass';

// Actions
import { exportTabFormatTxt } from '../../store/tab/actions';

// Components
import Modal from '../Modal';

const ExportTab = () => {
	const dispatch = useDispatch();
	const [modal, setModal] = useState(false);

	const printed_tab = useSelector(store => store.tab.printed_tab, shallowEqual);

	function exportTab() {
		dispatch(
			exportTabFormatTxt(),
		);
		setModal(true);
	}

	const handleModal = useCallback(() => {
		setModal(!modal);
	}, [modal]);

	return (
		<>
			{modal && (
				<Modal closeModal={handleModal}>
					<>
						<p styleName="printed-tab-wrapper">{printed_tab}</p>
					</>
				</Modal>
			)}

			<button type="button" onClick={exportTab}>
				Export
			</button>
		</>
	);
};

export default CSSModules(ExportTab, styles, { allowMultiple: true });
