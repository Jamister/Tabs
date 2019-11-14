/* eslint--disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

// Components
import RequestsWrapper from '../RequestsWrapper/RequestsWrapper';
import Create from './Create';

// Functions
import { returnKeyValue } from './_returnKeyValue';

class CreateContainer2 extends Component {
	constructor() {
		super();
		this.state = {
			lines: [1, 2, 3, 4, 5, 6],
			parts: {
				all_ids: [1],
				by_id: {
					1: {
						id: 1,
						blocks: {
							all_ids: [1, 2],
							by_id: {
								1: {
									id: 1,
									columns: [1, 2, 3, 4, 5, 6],
								},
								2: {
									id: 2,
									columns: [1, 2, 3, 4, 5, 6, 7],
								},
							},
						},
					},
				},
			},
			notes: {},
			note_location: { p: 0, b: 0, c: 0, l: 0, string: '' },
		};
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.selectLocation = this.selectLocation.bind(this);
	}

	// componentWillMount() {
	// 	const { parts, lines } = this.state;
	// 	const pre_values = [];
	// 	const loop = parts.all_ids
	// 		.map(p => parts.by_id[p].blocks.all_ids
	// 			.map(b => parts.by_id[p].blocks.by_id[b].columns
	// 				.map(c => lines.map(l => {
	// 					pre_values.push({ p, b, c, l, value: '' });
	// 					return { p, b, c, l, value: '' };
	// 				}))));
	// 	console.log(loop);
	// 	console.log(pre_values);

	// 	const aaa = parts.all_ids.reduce((acc, innerArray) => {
	// 		acc.push(...innerArray);
	// 		return acc;
	// 	}, []);

	// 	const all_ids = [];
	// 	const by_id = pre_values.reduce((result, current) => {
	// 		const { p, b, c, l } = current;
	// 		const id = `${p}-${b}-${c}-${l}`;
	// 		all_ids.push(id);
	// 		return { ...result, [id]: current };
	// 	}, {});
	// 	const notes = { by_id, all_ids };
	// 	// this.setState({ notes });
	// }

	componentDidMount() {
		window.addEventListener('keydown', this.handleKeyDown);
	}

	handleKeyDown(e) {
		const { note_location, notes, parts } = this.state;
		const { p, b, c, string } = note_location;
		if (string === '') return; // No note selected
		const note_pre_value = ((notes || {})[string] || {}).value || '';
		const value = returnKeyValue(e.keyCode, note_pre_value);

		if (value === 'arrows') {
			this.handleArrows(e.keyCode);
		} else {
			setTimeout(() => {
				const parts_add_column = this.checkLastColumn(p, b, c);
				const _parts = parts_add_column === null ? parts : parts_add_column;
				const _notes = {
					...notes,
					[string]: { value },
				};
				this.setState({ notes: _notes, parts: _parts });
			}, 36);
		}
	}

	checkLastColumn(p, b, c) {
		const { parts } = this.state;
		const last_column = parts.by_id[p].blocks.by_id[b].columns.reduce((res, cur) => (cur > res ? cur : res));
		if (c === last_column) {
			const _parts = {
				...parts,
				by_id: {
					...parts.by_id,
					[p]: {
						...parts.by_id[p],
						blocks: {
							...parts.by_id[p].blocks,
							by_id: {
								...parts.by_id[p].blocks.by_id,
								[b]: {
									...parts.by_id[p].blocks.by_id[b],
									columns: [...parts.by_id[p].blocks.by_id[b].columns, last_column + 1],
								},
							},
						},
					},
				},
			};
			return _parts;
			// this.setState({ parts: _parts });
		}
		return null;
	}

	handleArrows(key_code) {
		const { note_location, parts, lines } = this.state;
		const { p, b, c, l } = note_location;

		switch (key_code) {
		// right arrow
		case 39: {
			const next_location = parts.by_id[p].blocks.by_id[b].columns.find(c2 => c2 === c + 1) === undefined
				? { p, b: b + 1, c: 1, l, string: `${p}-${b + 1}-1-${l}` }
				: { p, b, c: c + 1, l, string: `${p}-${b}-${c + 1}-${l}` };
			this.setState({ note_location: next_location });
			/*

				check the end

			*/
			break;
		}
		// left arrow
		case 37: {
			let next_column = c - 1;
			let next_block = b;
			if (next_column === 0 && b === 1) next_column = 1;
			if (next_column === 0 && b > 1) {
				next_column = parts.by_id[p].blocks.by_id[b - 1].columns.reduce((res, cur) => (cur > res ? cur : res));
				next_block = b - 1;
			}
			const next_location = { p, b: next_block, c: next_column, l, string: `${p}-${next_block}-${next_column}-${l}` };
			this.setState({ note_location: next_location });
			break;
		}
		// top arrow
		case 38: {
			const next_line = l === 1 ? 1 : l - 1;
			const next_location = { p, b, c, l: next_line, string: `${p}-${b}-${c}-${next_line}` };
			this.setState({ note_location: next_location });
			break;
		}
		// down arrow
		case 40: {
			const lower_line = lines.reduce((res, cur) => (cur > res ? cur : res));
			const next_line = l === lower_line ? lower_line : l + 1;
			const next_location = { p, b, c, l: next_line, string: `${p}-${b}-${c}-${next_line}` };
			this.setState({ note_location: next_location });
			break;
		}
		default:
		}
	}

	selectLocation(note_location) {
		this.setState({ note_location });
	}

	render() {
		return (
			<RequestsWrapper
				type="create"
				{...this.props}>

				<Create
					{...this.state}
					{...this.props}
					selectLocation={this.selectLocation} />

			</RequestsWrapper>
		);
	}
}

const mapStateToProps = props => ({
	docs: props.docs,
	contacts: props.contacts,
	ui: props.ui,
	user: props.user,
});

const mapDispatchToProps = dispatch => ({
	updateContacts: (field, value) => dispatch(actions.updateContacts(field, value)),
	updateDocs: (field, value) => dispatch(actions.updateDocs(field, value)),
	updateUi: (field, value) => dispatch(actions.updateUi(field, value)),
	updateUser: (field, value) => dispatch(actions.updateUser(field, value)),
	reportErrors: (page, error, codigo_pedido, full_error, test) => dispatch(actions.reportErrors(page, error, codigo_pedido, full_error, test)),
	updateModals: (modal, value) => dispatch(actions.updateModals(modal, value)),
	unsetAuth: () => dispatch(actions.unsetAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateContainer2);
