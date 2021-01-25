import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';

export const Modal = ({ isOpen, openCloseModal, user, task, description }) => {
	if (!isOpen) return null;

	return ReactDOM.createPortal(
		<section className="Modal">
			<div className="Modal__content">
				<h1 className="Modal__title">{user}</h1>
				<p className="Modal__task">{task}</p>
				<hr />
				<h2 className="Modal__description-title">Descripción:</h2>
				<p className="Modal__description">{description}</p>
				<button className="Modal__button" onClick={openCloseModal}>
					Close
				</button>
			</div>
		</section>,
		document.getElementById('modal')
	);
};
