/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

// CSS
import CSSModules from 'react-css-modules';
import styles from './style.module.scss';

// Components
import Note from './Note';

// Functions
// import { editMomentDateFormat } from '../_functions/_editDateFormat';

const Create = ({
	/* state */ parts, lines, notes, note_location,
	/* props */
	/* propf */
	/* funcs */ selectLocation,
}) => {
	// const { locale } = user;
	return (
		<div>
			<div className="grid-container" styleName="doc-wrapper">
				<div className="grid-x">
					<div className="medium-12 cell">
						<h3>Novo documento</h3>
						<div className="key-division"><div /></div>
					</div>
				</div>

				<div className="grid-x">
					<div className="medium-12 cell">
						{parts.all_ids.map(p => (
							<div key={p} styleName="part">
								<div styleName="part-start"></div>
								<div styleName="background-lines">
									<div styleName="line-1"></div>
									<div styleName="line-2"></div>
									<div styleName="line-3"></div>
									<div styleName="line-4"></div>
									<div styleName="line-5"></div>
									<div styleName="line-6"></div>
								</div>

								{parts.by_id[p].blocks.all_ids.map(b => (
									<div key={b} styleName="block">
										{parts.by_id[p].blocks.by_id[b].columns.map(c => (
											<div key={c} styleName="column">
												{lines.map(l => {
													const { p: ps, b: bs, c: cs, l: ls, string } = note_location;
													const is_selected = string === `${p}-${b}-${c}-${l}`;
													const note_value = ((notes || {})[`${p}-${b}-${c}-${l}`] || {}).value || '';
													return (
														<Note
															key={l}
															this_note_location={{ p, b, c, l }}
															note_value={note_value}
															is_selected={is_selected}
															selectLocation={selectLocation} />
													);
												})}
											</div>
										))}
										<div styleName="block-end"></div>
									</div>
								))}
								<div styleName="part-end"></div>
							</div>
						))}
					</div>
				</div>

				{/* security time */}
				<div className="grid-x">
					<div className="medium-12 cell">
						<label>
							Tempo de segurança

						</label>
					</div>
				</div>

				{/* document */}
				<div className="grid-x">
					<div className="medium-12 cell">
						<label>
							Conteúdo

						</label>
					</div>
				</div>

				{/* document */}
				<div className="grid-x">
					<div className="medium-12 cell">
						<button type="button" className="button">Codificar e salvar</button>
					</div>
				</div>

				<div className="grid-x">
					<div className="small-12 cell"><p><br /></p></div>
				</div>
			</div>
		</div>
	);
};

Create.propTypes = {
	selectLocation: PropTypes.func.isRequired,
};

export default CSSModules(Create, styles, { allowMultiple: true });
